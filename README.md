# The Harry Potter App

A web app showcasing Harry Potter characters with filtering capabilities, detailed character views, and some preference settings.

## Demo

<!-- TODO: deploy the app and add the link here -->

[Live Demo](#)

[Wireframes](https://www.tldraw.com/f/SIDe4FlkrnXJDQyeK0qWb?d=v-615.-307.3070.1292.page)

![App Demo](./public/screenshots.gif)

## Features

- **House Selection**: Choose your preferred Hogwarts house or view all characters
- **Character Filtering**: Filter characters by students, staff, or favorites
- **Character Details**: View detailed information about each character
- **Favorites System**: Mark and filter your favorite characters
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

This application is built with modern web technologies:

- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [TanStack Router](https://tanstack.com/router/latest) - Type-safe routing for React
- [TanStack Query](https://tanstack.com/query/latest) - Data fetching and caching
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
- [Zod](https://zod.dev/) - TypeScript-first schema validation strings

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thiagoantunes/the-harry-potter-app
   cd the-harry-potter-app
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory with:

   ```
   VITE_HARRY_POTTER_API_URL=https://hp-api.onrender.com/api
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3001](http://localhost:3001) in your browser.

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm serve` - Preview production build
- `pnpm typecheck` - Run TypeScript type checking

## Deployment

This application can be deployed to any static hosting service:

1. Build the application:

   ```bash
   pnpm build
   ```

2. Deploy the `dist` directory to your hosting service of choice (Vercel, Netlify, etc.)
