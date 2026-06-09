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

## API: Submit Parts Inquiry
The app exposes a server endpoint to send inquiry emails.

### Endpoint
`POST /api/inquiry`

### Request Body
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

### Validation
- All fields are required.
- Placeholder dropdown values (like `Select Year`, `Select Make`, etc.) are rejected.

### Responses
- **200**: `{ "message": "Request sent. Please check your email for confirmation." }`
- **400**: missing/invalid fields
- **500**: SMTP/email not configured or email sending failed

## Required Environment Variables
Configure these on your hosting platform (or locally):

- `SMTP_HOST`
- `SMTP_PORT` (optional, default `587`)
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_FROM` (optional, defaults to `SMTP_USER`)
- `ADMIN_EMAIL` (email that receives the new request)

## Repository Scripts
From `package.json`:
- `npm run dev` — Next dev server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — ESLint

