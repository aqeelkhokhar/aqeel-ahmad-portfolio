# Aqeel Ahmad, Portfolio

[![CI](https://github.com/aqeelkhokhar/aqeel-ahmad-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/aqeelkhokhar/aqeel-ahmad-portfolio/actions/workflows/ci.yml)
![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)

Source for https://aqeel-ahmad-portfolio.vercel.app/, the portfolio of Aqeel Ahmad, Senior Mobile Engineer working in React Native and Flutter.

The site presents shipped apps, services, experience and a way to get in touch. It is a static, content driven Next.js site, so every section reads from a typed data file and there is no backend to run.

## Stack

- Next.js 15 with the App Router
- TypeScript
- Tailwind CSS and shadcn/ui
- Framer Motion for animation
- Deployed on Vercel, with every push to the main branch redeploying

## Structure

All content lives in typed files under `data/`, one file per section (projects, services, skills, experience, achievements, certificates, education, social links). Components only render that data, which keeps changes to copy separate from changes to layout. Sections with no entries hide themselves automatically.

## Run it

```sh
npm install
npm run dev
```

Other scripts are `npm run build`, `npm run start` and `npm run type-check`.

## Contact

- Email aqeelakash596@gmail.com
- WhatsApp +92 302 3376494
- LinkedIn https://www.linkedin.com/in/aqeel-ahmad-mobile-engineer
