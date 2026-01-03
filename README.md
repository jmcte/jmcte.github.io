# JMCTE Site

Personal site for `jmcte.github.io`, built with Next.js and exported as static
files for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Static export

```bash
npm run export
```

This outputs static assets in `out/`, which GitHub Pages serves.

## Deployment

GitHub Actions builds and deploys to Pages on push to `main`. In the repo
settings, set Pages to use "GitHub Actions" as the source.

## Content

- Home page: `app/page.tsx`
- Resume assets: `public/resume.html`, `public/resume.pdf`, `public/resume.md`
