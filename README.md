# Parts Central (Used Auto Parts)

Parts Central is a Next.js website for sourcing **quality OEM used auto parts** with an **inquiry/lead capture** flow. The homepage highlights parts categories and trust features, while users can submit a request through the site and receive email confirmation.

## Live Features
- Homepage built with reusable section components (Hero, Quality Parts, Brands, Trust, Services, Customer Stories, How it Works, CTA).
- Global UI layout:
  - Navbar
  - Floating call button
  - Footer
  - Custom cursor
- Theme initialization (light/dark) using the app layout.

## Tech Stack
- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **ESLint**

## Getting Started

### Prerequisites
- Node.js

### Install
```bash
npm install
```

### Run locally
```bash
npm run dev
```

Then open: http://localhost:3000

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

## APIs & External Endpoints (Documented)
This project uses a single Next.js server API route for lead capture, plus a few external “links” (mailto/tel/maps) that are triggered from the client.

### 1) Submit Parts Inquiry (Server API)
The app exposes a server endpoint to send inquiry emails.

- **Endpoint:** `POST /api/inquiry`
- **Implemented in:** `app/api/inquiry/route.ts`

#### Request Body
```json
{
  "year": "string",
  "make": "string",
  "model": "string",
  "part": "string",
  "engineSize": "string",
  "transmission": "string",
  "fullName": "string",
  "email": "string",
  "zipCode": "string",
  "phone": "string"
}
```

#### How the frontend calls it
- `src/components/forms/VehicleSelectorForm.tsx`
  - `fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(...) })`
- `src/components/layout/DelayedQuoteModal.tsx`
  - Renders `VehicleSelectorForm` after a delay (this indirectly enables the API call flow).

#### Validation
- All fields are required.
- Placeholder dropdown values (like `Select Year`, `Select Make`, `Select Part`, etc.) are rejected.

#### Responses
- **200**: `{ "message": "Request sent. Please check your email for confirmation." }`
- **400**: missing/invalid fields
- **500**: SMTP/email not configured or email sending failed

---

### 2) Email delivery mechanism (SMTP via Node)
This is performed inside `app/api/inquiry/route.ts` using raw SMTP over Node sockets.

- Uses Node modules:
  - `node:net`
  - `node:tls`
- Performs SMTP commands via a direct connection (no external email SDK).

Two emails are sent per request:
- Confirmation to the user (`to: data.email`, subject: `Your parts request was received`)
- Notification to the admin (`to: ADMIN_EMAIL`, subject includes year/make/model)

#### Required Environment Variables
Configure these on your hosting platform (or locally):

- `SMTP_HOST`
- `SMTP_PORT` (optional, default `587`)
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_FROM` (optional, defaults to `SMTP_USER`)
- `ADMIN_EMAIL` (email that receives the new request)

---

### 3) External link endpoints triggered from the client (not Next.js APIs)
These are not server routes; they open external apps/services via browser navigation.

- **Telephone links:**
  - `tel:7705984665` (used in Contact hero, floating call button, and parts CTAs)

- **Mail links:**
  - `mailto:delpaenterprise@gmail.com` (Contact hero)
  - `window.location.href = "mailto:..."` with encoded subject/body (Contact form: `src/components/sections/contact/ContactForm.tsx`)

- **Google Maps search URL:**
  - `https://www.google.com/maps/search/?api=1&query=...` (used in `src/components/sections/contact/ContactHero.tsx`)

## Repository Scripts
From `package.json`:
- `npm run dev` — Next dev server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — ESLint

