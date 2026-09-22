# Website Structure and Navigation Report

Last updated: 2026-09-23

This document describes the current user-level structure of the `my_site` portfolio & consulting project.

## Project Overview

| Property | Value |
| --- | --- |
| Framework | Next.js 16.1.6 (App Router) |
| Purpose | Personal Portfolio & Physics Consulting |
| Academy Link | [AL Physics Academy](https://physics-academy.vercel.app/) |
| Styling | Tailwind CSS + `src/app/globals.css` tokens |
| Analytics | Vercel Analytics (`@vercel/analytics`) |
| Font | System stack (`Arial, Helvetica, sans-serif`) |

## Current Project Structure

```text
my_site/
|-- src/
|   |-- app/
|   |   |-- favicon.ico
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   `-- components/
|       |-- LayoutChrome.tsx
|       `-- Navbar.tsx
|-- public/
|   |-- file.svg
|   |-- globe.svg
|   |-- next.svg
|   |-- vercel.svg
|   `-- window.svg
|-- About project (User level experience).md
|-- README.md
|-- package.json
|-- next.config.ts
|-- tailwind.config.ts
`-- tsconfig.json
```

## Route Map

| Route | File | Type | Description |
| --- | --- | --- | --- |
| `/` | `src/app/page.tsx` | Page | Portfolio & Academic Services homepage |
| Legacy LMS Routes | Handled via `next.config.ts` | Redirects | `/login`, `/physics`, `/student/*`, `/admin/*`, `/onboarding` redirect to `https://physics-academy.vercel.app/` |

## Navigation Behavior

- `src/app/layout.tsx` is the root layout.
- `src/components/LayoutChrome.tsx` renders the `Navbar` and wraps content with top padding.
- `src/components/Navbar.tsx` includes:
  - In-page anchors: `Home` (`/`), `About` (`#about`), `Classes` (`#classes`), `Contact` (`#contact`).
  - **The Axiom** CTA button: Links directly to [AL Physics Academy](https://physics-academy.vercel.app/) (`target="_blank" rel="noopener noreferrer"`).
