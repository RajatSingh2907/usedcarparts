import net from "node:net";
import tls from "node:tls";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type InquiryRequest = {
  year?: string;
  make?: string;
  model?: string;
  part?: string;
  engineSize?: string;
  transmission?: string;
  fullName?: string;
  email?: string;
  zipCode?: string;
  phone?: string;
};

type InquiryData = Required<InquiryRequest>;

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
};

const siteUrl = "https://www.partscentraloftexas.com";
const supportEmail = "support@partscentral.us";
const supportPhone = "(888) 338-2540";
const supportPhoneHref = "tel:8883382540";
const leadsApiUrl = "https://partscentral.us/api/leads/manual";
const leadSource = "W-PCTXS";

const placeholderValues = new Set([
  "Select Year",
  "Select Make",
  "Select make first",
  "Select Model",
  "Select Part",
  "Select Engine Size",
  "Select Transmission",
]);

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function extractEmailAddress(value: string) {
  const match = value.match(/<([^>]+)>/);
  return match?.[1] ?? value;
}

function formatRequest(data: InquiryData) {
  return [
    ["Year", data.year],
    ["Make", data.make],
    ["Model", data.model],
    ["Part", data.part],
    ["Engine Size", data.engineSize],
    ["Transmission", data.transmission],
    ["Full Name", data.fullName],
    ["Email", data.email],
    ["Zip Code", data.zipCode],
    ["Phone", data.phone],
  ];
}

function buildHtml(data: InquiryData, heading: string) {
  const rows = formatRequest(data)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #dbeafe;font-weight:700;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;border:1px solid #dbeafe;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#0f172a;">
      <h2>${escapeHtml(heading)}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">
        ${rows}
      </table>
    </div>
  `;
}

function buildCustomerConfirmationHtml(data: InquiryData) {
  const requestedPart = `${data.year} ${data.make} ${data.model} ${data.part}`;
  const rows = [
    ["Year", data.year],
    ["Make", data.make],
    ["Model", data.model],
    ["Part Requested", data.part],
    ["Engine Size", data.engineSize],
    ["Transmission", data.transmission],
    ["Zip Code", data.zipCode],
  ]
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #dbeafe;background:#f8fafc;font-weight:700;color:#0f172a;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border:1px solid #dbeafe;color:#1e293b;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join("");

  return `
    <div style="margin:0;background:#f3f4f6;padding:24px 12px;font-family:Arial,sans-serif;color:#0f172a;">
      <div style="margin:0 auto;max-width:640px;overflow:hidden;border-radius:18px;background:#ffffff;border:1px solid #e2e8f0;">
        <div style="background:#020617;padding:22px 28px;text-align:center;">
          <div style="color:#ffffff;font-size:24px;font-weight:800;letter-spacing:0.04em;">Parts Central of Texas</div>
          <div style="margin-top:6px;color:#67e8f9;font-size:12px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;">OEM Parts Request Received</div>
        </div>

        <div style="padding:28px;">
          <h1 style="margin:0;color:#0369a1;font-size:24px;line-height:1.25;">Thanks, ${escapeHtml(data.fullName)}. We received your request.</h1>
          <p style="margin:14px 0 0;color:#334155;font-size:15px;line-height:1.7;">
            Our parts team will review availability, fitment, pricing, warranty terms, and shipping details for your requested part.
          </p>
          <p style="margin:12px 0 0;color:#334155;font-size:15px;line-height:1.7;">
            This email confirms that your request was submitted. It is not a final order confirmation or payment confirmation.
          </p>

          <div style="margin:22px 0;padding:16px;border-radius:14px;background:#ecfeff;border:1px solid #bae6fd;text-align:center;">
            <div style="font-size:12px;color:#0369a1;font-weight:800;text-transform:uppercase;letter-spacing:0.12em;">Requested Part</div>
            <div style="margin-top:6px;color:#0f172a;font-size:18px;font-weight:800;">${escapeHtml(requestedPart)}</div>
          </div>

          <table style="border-collapse:collapse;width:100%;font-size:14px;">
            ${rows}
          </table>

          <div style="margin:24px 0 0;padding:18px;border-radius:14px;background:#f8fafc;border:1px solid #e2e8f0;">
            <div style="font-weight:800;color:#0f172a;">What happens next?</div>
            <ol style="margin:10px 0 0;padding-left:20px;color:#334155;line-height:1.7;">
              <li>We check part availability and fitment details.</li>
              <li>A specialist contacts you with quote and shipping information.</li>
              <li>You review the details before any order is finalized.</li>
            </ol>
          </div>

          <div style="margin-top:24px;text-align:center;">
            <a href="${supportPhoneHref}" style="display:inline-block;border-radius:12px;background:#0284c7;color:#ffffff;padding:13px 20px;text-decoration:none;font-weight:800;">Call ${supportPhone}</a>
            <div style="margin-top:12px;color:#475569;font-size:14px;">
              Email: <a href="mailto:${supportEmail}" style="color:#0369a1;font-weight:700;">${supportEmail}</a>
            </div>
          </div>
        </div>

        <div style="background:#020617;padding:16px 24px;text-align:center;color:#94a3b8;font-size:12px;">
          © ${new Date().getFullYear()} Parts Central of Texas LLC. All rights reserved.
        </div>
      </div>
    </div>
  `;
}

function buildText(data: InquiryData, heading: string) {
  return [
    heading,
    "",
    ...formatRequest(data).map(([label, value]) => `${label}: ${value}`),
  ].join("\n");
}

function buildCustomerConfirmationText(data: InquiryData) {
  return [
    `Thanks, ${data.fullName}. We received your parts request.`,
    "",
    "Our parts team will review availability, fitment, pricing, warranty terms, and shipping details.",
    "This is not a final order confirmation or payment confirmation.",
    "",
    ...formatRequest(data).map(([label, value]) => `${label}: ${value}`),
    "",
    `Call: ${supportPhone}`,
    `Email: ${supportEmail}`,
    `Website: ${siteUrl}`,
  ].join("\n");
}

async function sendLeadToDashboard(data: InquiryData) {
  const createdDate = new Date().toISOString().slice(0, 10);
  const leadPayload = {
    lead_source: leadSource,
    created_by: "System",
    created_date: createdDate,
    name: data.fullName,
    email: data.email,
    engine_Size: data.engineSize,
    make: data.make,
    mobile: data.phone,
    model: data.model,
    part: data.part,
    status: "New",
    trasmission: data.transmission,
    year: data.year,
    zipcode: data.zipCode,
  };

  const response = await fetch(leadsApiUrl, {
    body: JSON.stringify(leadPayload),
    headers: {
      "Content-Type": "application/json",
      Origin: siteUrl,
    },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`Lead dashboard API failed with status ${response.status}`);
  }
}

function dotStuff(value: string) {
  return value.replace(/\r?\n\./g, "\r\n..").replace(/\r?\n/g, "\r\n");
}

function encodeHeader(value: string) {
  return value.replace(/\r|\n/g, "");
}

function buildMessage({
  from,
  html,
  replyTo,
  subject,
  text,
  to,
}: {
  from: string;
  html: string;
  replyTo: string;
  subject: string;
  text: string;
  to: string;
}) {
  const boundary = `parts-central-${Date.now()}`;

  return dotStuff(
    [
      `From: ${encodeHeader(from)}`,
      `To: ${encodeHeader(to)}`,
      `Reply-To: ${encodeHeader(replyTo)}`,
      `Subject: ${encodeHeader(subject)}`,
      "MIME-Version: 1.0",
      `Content-Type: multipart/alternative; boundary="${boundary}"`,
      "",
      `--${boundary}`,
      'Content-Type: text/plain; charset="UTF-8"',
      "Content-Transfer-Encoding: 7bit",
      "",
      text,
      "",
      `--${boundary}`,
      'Content-Type: text/html; charset="UTF-8"',
      "Content-Transfer-Encoding: 7bit",
      "",
      html,
      "",
      `--${boundary}--`,
      "",
    ].join("\r\n"),
  );
}

function readResponse(socket: net.Socket | tls.TLSSocket) {
  return new Promise<string>((resolve, reject) => {
    let response = "";
    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error("SMTP response timed out"));
    }, 15000);

    function cleanup() {
      clearTimeout(timeout);
      socket.off("data", onData);
      socket.off("error", onError);
    }

    function onError(error: Error) {
      cleanup();
      reject(error);
    }

    function onData(chunk: Buffer) {
      response += chunk.toString("utf8");
      if (/(^|\r?\n)\d{3} /.test(response)) {
        cleanup();
        resolve(response);
      }
    }

    socket.on("data", onData);
    socket.on("error", onError);
  });
}

async function expectResponse(
  socket: net.Socket | tls.TLSSocket,
  acceptedCodes: number[],
) {
  const response = await readResponse(socket);
  const code = Number(response.slice(0, 3));

  if (!acceptedCodes.includes(code)) {
    throw new Error(`Unexpected SMTP response: ${code}`);
  }
}

async function sendCommand(
  socket: net.Socket | tls.TLSSocket,
  command: string,
  acceptedCodes: number[],
) {
  socket.write(`${command}\r\n`);
  await expectResponse(socket, acceptedCodes);
}

function connect(config: SmtpConfig) {
  return new Promise<net.Socket | tls.TLSSocket>((resolve, reject) => {
    const socket =
      config.port === 465
        ? tls.connect(config.port, config.host, { servername: config.host })
        : net.connect(config.port, config.host);

    socket.once("connect", () => resolve(socket));
    socket.once("error", reject);
    socket.setTimeout(20000, () => {
      socket.destroy();
      reject(new Error("SMTP connection timed out"));
    });
  });
}

function upgradeToTls(socket: net.Socket, host: string) {
  return new Promise<tls.TLSSocket>((resolve, reject) => {
    const secureSocket = tls.connect({ socket, servername: host }, () => {
      resolve(secureSocket);
    });

    secureSocket.once("error", reject);
  });
}

async function sendMail({
  config,
  html,
  replyTo,
  subject,
  text,
  to,
}: {
  config: SmtpConfig;
  html: string;
  replyTo: string;
  subject: string;
  text: string;
  to: string;
}) {
  let socket = await connect(config);
  const fromAddress = extractEmailAddress(config.from);

  await expectResponse(socket, [220]);
  await sendCommand(socket, "EHLO localhost", [250]);

  if (config.port !== 465) {
    await sendCommand(socket, "STARTTLS", [220]);
    socket = await upgradeToTls(socket as net.Socket, config.host);
    await sendCommand(socket, "EHLO localhost", [250]);
  }

  await sendCommand(socket, "AUTH LOGIN", [334]);
  await sendCommand(socket, Buffer.from(config.user).toString("base64"), [334]);
  await sendCommand(socket, Buffer.from(config.pass).toString("base64"), [235]);
  await sendCommand(socket, `MAIL FROM:<${fromAddress}>`, [250]);
  await sendCommand(socket, `RCPT TO:<${to}>`, [250, 251]);
  await sendCommand(socket, "DATA", [354]);

  socket.write(
    `${buildMessage({
      from: config.from,
      html,
      replyTo,
      subject,
      text,
      to,
    })}\r\n.\r\n`,
  );
  await expectResponse(socket, [250]);
  socket.write("QUIT\r\n");
  socket.end();
}

export async function POST(request: Request) {
  const payload = (await request.json()) as InquiryRequest;
  const data = {
    year: clean(payload.year),
    make: clean(payload.make),
    model: clean(payload.model),
    part: clean(payload.part),
    engineSize: clean(payload.engineSize),
    transmission: clean(payload.transmission),
    fullName: clean(payload.fullName),
    email: clean(payload.email),
    zipCode: clean(payload.zipCode),
    phone: clean(payload.phone),
  };

  const missingField = Object.values(data).some(
    (value) => !value || placeholderValues.has(value),
  );

  if (missingField) {
    return NextResponse.json(
      { message: "Please complete all fields before submitting." },
      { status: 400 },
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS?.replace(/\s/g, "");
  const mailFrom = process.env.MAIL_FROM ?? process.env.SMTP_FROM ?? smtpUser;
  const adminEmail = process.env.ADMIN_EMAIL ?? process.env.SMTP_TO;

  const missingConfig = [
    !smtpHost ? "SMTP_HOST" : "",
    !smtpUser ? "SMTP_USER" : "",
    !smtpPass ? "SMTP_PASS" : "",
    !mailFrom ? "MAIL_FROM or SMTP_FROM" : "",
    !adminEmail ? "ADMIN_EMAIL or SMTP_TO" : "",
  ].filter(Boolean);

  if (missingConfig.length > 0) {
    return NextResponse.json(
      {
        message: `Email is not configured on the server yet. Missing: ${missingConfig.join(", ")}`,
      },
      { status: 500 },
    );
  }

  const config = {
    from: mailFrom!,
    host: smtpHost!,
    pass: smtpPass!,
    port: smtpPort,
    user: smtpUser!,
  };

  try {
    try {
      await sendLeadToDashboard(data);
    } catch (error) {
      console.error("Lead dashboard sync failed:", error);
    }

    await Promise.all([
      sendMail({
        config,
        html: buildCustomerConfirmationHtml(data),
        replyTo: adminEmail!,
        subject: "We received your parts request - Parts Central of Texas",
        text: buildCustomerConfirmationText(data),
        to: data.email,
      }),
      sendMail({
        config,
        html: buildHtml(data, "New vehicle parts request"),
        replyTo: data.email,
        subject: `New parts request: ${data.year} ${data.make} ${data.model}`,
        text: buildText(data, "New vehicle parts request"),
        to: adminEmail!,
      }),
    ]);
  } catch (error) {
    console.error("Inquiry email failed:", error);
    return NextResponse.json(
      { message: "Email could not be sent. Please check SMTP settings." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    message: "Request sent. Please check your email for confirmation.",
  });
}
