# Luis Felipe Portfolio

Premium personal portfolio and digital curriculum for Luis Felipe, built with Next.js App Router, TypeScript, Tailwind CSS and subtle Framer Motion animations.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Editing content

Most website content lives in `data/site.ts`:

- social links
- navigation labels
- projects
- experience
- stack categories
- page copy in Portuguese and English

The default language is Portuguese. Theme follows the user's operating system until the visitor manually chooses dark or light mode.

## Deploy on Vercel

Push this folder to GitHub and import the repository on Vercel. The project uses the default Next.js build settings:

- Build command: `npm run build`
- Output: `.next`
