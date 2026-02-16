# Website Structure and Navigation Report

Last updated: 2026-02-16

This document describes the current user-level structure of the `my_site` project after recent auth and build fixes.

## Project Overview

| Property | Value |
| --- | --- |
| Framework | Next.js 16.1.6 (App Router) |
| Auth | Supabase + Google OAuth (PKCE) |
| Data | Supabase tables: `profiles`, `students` |
| Styling | Tailwind CSS + `src/app/globals.css` tokens |
| Font | System stack (`Arial, Helvetica, sans-serif`) |
| Request Guard | `src/proxy.ts` (`proxy` export, Next 16 format) |

## Current Project Structure

```text
my_site/
|-- src/
|   |-- app/
|   |   |-- admin/
|   |   |   `-- dashboard/
|   |   |       `-- page.tsx
|   |   |-- auth/
|   |   |   `-- callback/
|   |   |       `-- route.ts
|   |   |-- login/
|   |   |   `-- page.tsx
|   |   |-- onboarding/
|   |   |   `-- page.tsx
|   |   |-- physics/
|   |   |   |-- layout.tsx
|   |   |   `-- page.tsx
|   |   |-- student/
|   |   |   `-- dashboard/
|   |   |       `-- page.tsx
|   |   |-- favicon.ico
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- components/
|   |   |-- LayoutChrome.tsx
|   |   `-- Navbar.tsx
|   |-- hooks/
|   |   `-- useAuthGuard.ts
|   |-- lib/
|   |   |-- supabase-middleware.ts
|   |   `-- supabase.ts
|   `-- proxy.ts
|-- public/
|   |-- file.svg
|   |-- globe.svg
|   |-- next.svg
|   |-- vercel.svg
|   `-- window.svg
|-- About project (User level experience).md
|-- README.md
|-- supabase_rls_students.sql
|-- package.json
|-- next.config.ts
|-- tailwind.config.ts
`-- tsconfig.json
```

## Route Map

| Route | File | Type | Access |
| --- | --- | --- | --- |
| `/` | `src/app/page.tsx` | Page | Public |
| `/login` | `src/app/login/page.tsx` | Page | Public |
| `/auth/callback` | `src/app/auth/callback/route.ts` | Route Handler | Public/System |
| `/onboarding` | `src/app/onboarding/page.tsx` | Page | Auth required |
| `/student/dashboard` | `src/app/student/dashboard/page.tsx` | Page | Student role |
| `/admin/dashboard` | `src/app/admin/dashboard/page.tsx` | Page | Admin role |
| `/physics` | `src/app/physics/page.tsx` | Page | Admin role |

## Navigation and Layout Behavior

- `src/app/layout.tsx` is the root layout for all routes.
- `src/components/LayoutChrome.tsx` shows `Navbar` on all routes except `/physics*`.
- `src/app/physics/layout.tsx` is a lightweight wrapper for the physics hub route segment.
- `src/components/Navbar.tsx` includes links for Home/About/Classes/Contact and `The Axiom` (`/login`).

## Auth and Access Control

### 1) Request-time guard (`src/proxy.ts`)

- Runs on matched routes using Next.js `proxy` entrypoint.
- Protects:
  - `/student/dashboard`
  - `/admin/dashboard`
  - `/physics`
  - `/onboarding`
- Redirects unauthenticated users to `/login`.
- Redirects authenticated users away from `/login` to `/student/dashboard`.

### 2) Session cookie bridge (`src/lib/supabase-middleware.ts`)

- Creates a request/response-aware Supabase client for proxy usage.
- Syncs auth cookie updates to both request and response.

### 3) Client-side role guard (`src/hooks/useAuthGuard.ts`)

- Used in student/admin/physics pages.
- Enforces role-specific access:
  - student -> `/student/dashboard`
  - admin -> `/admin/dashboard`
- Redirects unauthenticated users to `/login`.

### 4) OAuth callback routing (`src/app/auth/callback/route.ts`)

- Exchanges OAuth code for session.
- Checks `profiles` table and routes by role/profile state:
  - No profile -> `/onboarding`
  - `role = admin` -> `/admin/dashboard`
  - otherwise -> `/student/dashboard`

## Supabase Data Usage

| Table | Used in | Purpose |
| --- | --- | --- |
| `profiles` | callback, onboarding, role checks | User profile + role |
| `students` | physics hub | Student database data |

RLS policy script is in `supabase_rls_students.sql` (admin-only access pattern for `students`).

## Recent Fixes Reflected in This Structure

- `middleware` entry was migrated to `proxy` entry:
  - current file: `src/proxy.ts`
  - current export: `export async function proxy(...)`
- Removed runtime Google font dependency from layouts:
  - `src/app/layout.tsx`
  - `src/app/physics/layout.tsx`
- `src/middleware.ts` is not part of the active project structure.
