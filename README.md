# Plateforme de vente de services - Developpement web full stack

Plateforme de vente de services - Developpement web full stack is a React single-page application for browsing products and services, signing up or signing in, saving favorites, searching listings, and viewing seller-facing screens.

Recommended GitHub repository name: `plateforme-de-vente-de-services-developpement-web-full-stack`

## What The Project Does

This frontend is structured as a marketplace-style interface with:

- a landing page with featured product and service cards
- dedicated products and services pages
- product and service detail views
- sign-up, sign-in, and extended registration flows
- a favorites context for saving selected products in the session
- search requests sent to a local backend API
- add-product and profile-related screens for seller workflows

## Tech Stack

| Layer | Technology | Why It Is Used |
| --- | --- | --- |
| App framework | React 18 | Component-based UI and state handling |
| Routing | React Router DOM 6 | Client-side navigation between pages |
| Build tooling | Create React App / react-scripts 5 | Local development server and production bundling |
| Styling | Tailwind CSS + custom CSS files | Utility classes plus page-specific styling |
| UI components | NextUI | Cards, buttons, avatars, badges, and layout helpers |
| Motion | Framer Motion | Animation support |
| Carousel UI | React Slick + Slick Carousel | Product and service sliders |
| Notifications | React Hot Toast | Sign-in and interaction feedback |
| Client persistence | localStorage + react-cookie | Basic auth state and token storage |
| HTTP | fetch and axios | Backend communication support |

More detail is available in `TECH_STACK.txt`.

## Project Structure

```text
public/                 Static images and CRA public assets
src/App.js              Main router and app shell
src/Landingpage.js      Landing page and featured content
src/divs/               Main page and reusable UI components
src/context/            Context helpers
```

## Backend Dependency

This repository is only the frontend. It expects a backend API running locally at:

`http://127.0.0.1:8000`

Current frontend API calls include:

- `POST /api/register`
- `POST /api/login`
- `GET /api/search?query=...`

Because the API base URL is hardcoded in the components, the backend must match that address unless the code is changed.

## Local Setup

### Requirements

- Node.js 18+ or 20+
- npm
- a backend server listening on `127.0.0.1:8000`

### Install And Run

```bash
npm install
npm start
```

Open `http://localhost:3000` in the browser.

### Production Build

```bash
npm run build
```

The project was built successfully on April 3, 2026. The build completes with warnings, but it does generate a production bundle.

## Available Scripts

- `npm start` starts the CRA development server on port 3000
- `npm run build` creates a production build in `build/`
- `npm test` starts the CRA test runner

## Current Technical Notes

- Several screens still use placeholder data and static assets instead of live API data.
- Favorites are stored in React context only, so they reset on refresh.
- Authentication state is tracked with cookies and `localStorage`, but there is no centralized auth guard system.
- The codebase builds, but ESLint reports a number of warnings for unused imports, accessibility issues, and some equality checks.
- Tailwind and CRA produce non-blocking warnings during build because of legacy or invalid utility usage.

See `SETUP_NOTES.txt` for setup and maintenance notes.
