## Polygraf-ai Face Detection
This website [polygraf-ai](https://polygraf-ai.vercel.app/) is the very simple prototype. It is one page website, whereas it could be expanded with additional tools and features. The website mainly consists of front end except some basic server side features like image storage and authentication process.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features Used

### Authentication

- Integrated [Clerk](https://clerk.com/docs) for authentication purposes.

### Image and Video Storage

- Utilized [Edge](https://edgestore.dev) store for storing images and videos uploaded to the website

### UI Components

- Employed [MaterialUI](https://mui.com/material-ui/) for creating the timeline and icons.
- Additionally [NextUI](https://nextui.org/) was used to create the rest of the designs

## Resources
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
