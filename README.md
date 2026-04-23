# Baran Çakı — Portfolio

Personal portfolio website built with React, TypeScript, and Vite.

## Tech Stack

- **React 19** + **TypeScript** + **Vite 6**
- **Tailwind CSS** (CDN v3) — dark/light mode
- **React Router DOM v7** — multi-page routing
- **@paper-design/shaders-react** — animated MeshGradient background
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev       # localhost:3000
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Docker

```bash
docker compose up -d --build   # runs on localhost:8080
```

Nginx serves the static Vite build with SPA routing, gzip compression, and security headers.

## Project Structure

```
pages/          # Route-level pages (About, project case studies)
components/     # Reusable UI components
lib/            # Utility functions
```
