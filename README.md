# ANIME INFO Next.js site with Sanity Studio

The Studio connects to Sanity Content Lake, which gives you hosted content APIs with a flexible query language, on-demand image transformations, powerful patching, and more.
You can use this starter to kick-start a clean slate site or learn these technologies.

## Table of Contents

- [Features](#features)
- [Table of Contents](#table-of-contents)
- [Project Overview](#project-overview)
  - [Important files and folders](#important-files-and-folders)
- [Configuration](#configuration)
  - [Step 1. Set up the environment](#step-1-set-up-the-environment)
  - [Step 2. Set up the project locally](#step-2-set-up-the-project-locally)
  - [Step 3. Run Next.js locally in development mode](#step-3-run-nextjs-locally-in-development-mode)
  - [Step 4. Deploy to production](#step-4-deploy-to-production)
- [Questions and Answers](#questions-and-answers)
  - [It doesn't work! Where can I get help?](#it-doesnt-work-where-can-i-get-help)
  - [How can I remove the "Next steps" block from my app?](#how-can-i-remove-the-next-steps-block-from-my-app)
  - [How can I set up Incremental Static Revalidation?](#how-can-i-set-up-incremental-static-revalidation)
- [Next steps](#next-steps)

## Project Overview

# Important files and folders

| File(s)                                 | Description                                                                           |
| --------------------------------------- | ------------------------------------------------------------------------------------- |
| `sanity.config.ts`                      | Config file for Sanity Studio                                                         |
| `sanity.cli.ts`                         | Config file for Sanity CLI                                                            |
| `/pages/index.tsx`                      | Landing page for `/`.                                                                 |
| `/pages/studio/[[...index]].tsx`        | Where Sanity Studio is mounted                                                        |
| `/pages/api/preview.ts`                 | Serverless route for triggering Preview mode                                          |
| `/sanity/schemas.ts`                    | Where Sanity Studio gets its content types from                                       |
| `/sanity/env.ts`                        | Configuration for the Sanity project and dataset                                      |
| `/sanity/schemas.ts`                    | Where Sanity Studio gets its content types from                                       |
| `/sanity/lib/client.ts`                 | Sanity client configured based on `env.ts`                                            |
| `/sanity/lib/image.ts`                  | Sanity image builder - unused in this template, but is needed to render Sanity images |
| `/sanity/plugins/IFramePreviewView.tsx` | See [adding studio preview](docs/studio-preview.md)                                   |
| `tailwind.config.js`                    | Tailwind config. Only applies to files listed under `content`                         |

All pages are wrapped in `pages/_document.tsx` and `pages/_app.tsx`.

## Configuration

### Step 1. Set up the environment

Use the Deploy Button below. It will let you deploy the starter using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-sanity-example) as well as connect it to your Sanity Content Lake using [the Sanity Vercel Integration][integration].

[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]

### Step 2. Set up the project locally

[Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) that was created for you on your GitHub account. Once cloned, run the following command from the project's root directory:

```bash
npx vercel link
```

Download the environment variables needed to connect Next.js and the Studio to your Sanity project:

```bash
npx vercel env pull
```

This will create a git-ignored `.env` file with environment variables that will be used for local development.

### Step 3. Run Next.js locally in development mode

```bash
npm install && npm run dev
```

When you run this development server, the changes you make in your frontend and studio configuration will be applied live using hot reloading.

Your blog should be up and running on [http://localhost:3000][localhost-3000]! You can create and edit content on [http://localhost:3000/studio][localhost-3000-studio].

### Step 4. Deploy to production

To deploy your changes to production you use `git`:

```bash
git add .
git commit
git push
```

Alternatively, you can deploy without a `git` hosting provider using the Vercel CLI:

```bash
npx vercel --prod
```

## Questions and Answers

### It doesn't work! Where can I get help?

In case of any issues or questions, you can post:

- [GitHub Discussions for Next.js][vercel-github]
- [Sanity's GitHub Discussions][sanity-github]
- [Sanity's Community Slack][sanity-community]

### How can I remove the "Next steps" block from my app?

You can remove it by deleting `intro-template`, and removing `IntroTemplate` usage from `pages/index.tsx`

## Next steps

- [Setup live preview](./docs/studio-preview.md)
- [Join our Slack community to ask questions and get help][sanity-community]
- [How to edit my content structure?][sanity-schema-types]
- [How to query content?][sanity-groq]
- [What is content modelling?][sanity-content-modelling]
