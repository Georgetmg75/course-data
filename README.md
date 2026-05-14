# Course Data App

A React application built with Vite that displays course data with search, filtering, infinite scroll, and serverless API support for deployment on Vercel.

## Features

- React + Vite frontend
- Dynamic courses list with category and instructor filters
- Infinite scroll for more courses
- Course detail pages with React Router
- Mock course data served through Vercel serverless API routes
- Local API proxy support during development

## Project structure

- `api/` — Vercel serverless API functions for courses
- `public/` — Static assets and mock data files
- `src/api/` — React API client calling `/api/courses`
- `src/components/` — Reusable UI components
- `src/pages/` — Page views for courses and details
- `src/routes/` — React Router route definitions
- `db.json` — Mock data source used by API routes
- `vercel.json` — Vercel deployment configuration

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the Vite development server:
   ```bash
   npm run dev
   ```

3. Open the app at:
   ```
   http://localhost:5175/
   ```

4. If you want to run the local mock API via JSON Server instead of serverless functions:
   ```bash
   npm run json-server
   ```

## API endpoints

- `GET /api/courses` — List all courses
- `GET /api/courses/:id` — Get one course by ID

These endpoints are implemented as serverless functions in `api/courses.js` and `api/courses/[id].js`.

## Deployment to Vercel

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Vercel automatically detects the project and deploys the app.

The serverless API routes will be available on the deployed site under `/api/courses`.

## Notes for your client

This application is built to be production-ready for Vercel. It uses serverless route functions to serve mock JSON course data, ensuring the frontend does not rely on a separate backend server in production.
