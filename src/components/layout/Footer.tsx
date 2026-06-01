import Link from "next/link";
import Container from "@/components/ui/Container";

const infoLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Refund / Return Policy", href: "/refund-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const serviceLinks = [
  { label: "Used Auto Parts", href: "/used-auto-parts" },
  { label: "Used Transmissions", href: "/used-transmissions" },
  { label: "Used Engines", href: "/used-engines" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 dark:border-white/6 dark:bg-slate-950 dark:text-slate-400">
      {/* Top gradient bar */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-bold text-slate-950 dark:text-white">Parts Central of Georgia</h3>
            <p className="mt-3 text-sm leading-7">
              8735 Dunwoody Pl Ste R<br />
              Atlanta, GA 30350, USA
            </p>
            <p className="mt-4 text-sm leading-7">
              Your trusted source for high-quality used OEM auto parts — warranty-backed, nationwide shipping.
            </p>
            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                60-Day Warranty
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Free Shipping
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-white/60">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-cyan-400"
                  >
                    <span className="h-px w-4 bg-slate-600 transition-all duration-200 group-hover:w-5 group-hover:bg-cyan-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-white/60">Information</h4>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-cyan-400"
                  >
                    <span className="h-px w-4 bg-slate-600 transition-all duration-200 group-hover:w-5 group-hover:bg-cyan-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-white/60">Contact Us</h4>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 mb-1.5">Phone</p>
            <a
              href="tel:7705984665"
              className="block text-xl font-bold text-slate-950 transition-colors duration-200 hover:text-cyan-600 dark:text-white dark:hover:text-cyan-400"
            >
              (770) 598-4665
            </a>

            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 mt-5 mb-1.5">Email</p>
            <a
              href="mailto:delpaenterprise@gmail.com"
              className="break-all text-sm text-slate-700 transition-colors duration-200 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
            >
              delpaenterprise@gmail.com
            </a>

            <div className="mt-7">
              <a
                href="tel:7705984665"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-primary/20 bg-primary/10 text-sm font-semibold text-primary shadow-lg shadow-primary/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/15 active:scale-[0.98] dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-100 dark:shadow-cyan-950/30 dark:hover:bg-cyan-300/15"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-slate-200 pt-7 text-xs text-slate-500 dark:border-white/6 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Parts Central of Georgia LLC. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-300">Privacy</Link>
            <Link href="/terms-and-conditions" className="transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-300">Terms</Link>
            <Link href="/cookie-policy" className="transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-300">Cookies</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
