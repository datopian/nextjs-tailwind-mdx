# Next.js + Tailwind CSS + MDX Starter Template

A starter template for Next.JS with Tailwind and MDX. Focus on simplicity and compositional model for adding features rather than "kitchen sink" of features.

Includes instructions on how to rapidly customize such a site.

## The setup

* NextJS + Tailwind. NextJS default tailwindcss example (https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
* Common layout. Add a components/layout.js and use that to provide a standard them for all pages. Customizable NavBar and Footer
* Markdown / MDX rendering support. All markdown/MDX in `/content/` gets auto-rendered into the site.
* Support common public config e.g. site title etc (secret config in environment variables) **DONE: 

## Site config

See `config` directory.

## Content and Markdown

### How to customize the content directory location?

Open up `pages/[...slug].js` and change the `CONTENT_PATH` variable.

## Theming

We suggest you do the following:

* Replace the favicon in `public/favicon.ico` or use the svg favicon ...
* Add a logo: add image to `public` e.g. then open `components/layout.js` and replace footer logo link

Tweaking the theme in general: open up `components/layout.js` and tweak away.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app 
# or
yarn create next-app --example https://github.com/datopian/nextjs-tailwind-mdx myapp
```

Then run the app:

```
npm run dev
```
