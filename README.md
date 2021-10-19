# Next.js + Tailwind CSS + MDX Starter Template

A starter template for Next.JS with Tailwind and MDX. Focus is simplicity and compositional model for adding features rather than "kitchen sink".

Includes instructions on how to rapidly customize the site.

## Features

Pre-configured with the following;

* Tailwind. Booted off NextJS default tailwindcss example (https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
* Basic common theme via components/Layout.js. Used to provide a standard them for all pages. Customizable NavBar and Footer with configurable nav links.
* Markdown / MDX rendering support. All markdown/MDX in `/content/` gets auto-rendered into the site.
* Support common public config e.g. site title etc (secret config in environment variables). See `Configuration` below.

## Usage

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/datopian/nextjs-tailwind-mdx myapp
# or
yarn create next-app --example https://github.com/datopian/nextjs-tailwind-mdx myapp
```

Then run the app:

```bash
cd myapp
npm run dev
```

## Configuration

See `config` directory:

* `config/siteConfig.js` for site wide configuration
* `config/navLinks.js` for configuration of navigation links

### How to customize the content directory location?

Open up `pages/[...slug].js` and change the `CONTENT_PATH` variable.

### Theming

We suggest the following:

* Replace the favicon in `public/favicon.ico` or use the svg favicon ...
* Add a logo: add image to `public` e.g. then open `components/layout.js` and replace footer logo link

Tweaking the theme in general: open up `components/Layout.js` and tweak away.

