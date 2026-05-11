# F Design

A polished React + Vite landing page built around bold section cards, animated service text, and an interactive course showcase. The layout is intentionally visual and lightweight, making it easy to present skills, categories, and course counts in a clean, modern way.

## Features

- Animated service headline that cycles through offerings like UI & UX, Development, and Blockchain.
- Horizontal image slider with drag interaction and a progress indicator.
- Course showcase cards with strong color blocking, hover motion, and an expanded-card interaction.
- Responsive layout that adapts from mobile to desktop.

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- React Router
- React Icons
- Motion-based interactions for UI animations

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - start Vite in development mode.
- `npm run build` - create an optimized production build.
- `npm run preview` - preview the production build locally.
- `npm run lint` - run ESLint across the project.

## Project Structure

```text
src/
	App.jsx            # Page composition
	App.css            # App-level styles
	main.jsx           # React entry point
	components/
		Service.jsx      # Animated hero/service section
		Course.jsx       # Interactive course cards section
	assets/
	fonts/
public/
	images/            # Static images used by the UI
```

## Notes

- Static assets are served from `public/images`.
- The UI is built as a showcase/landing page, so most of the experience lives in the components themselves rather than in routing.
- If you add new sections, keep the existing color contrast and motion style consistent so the page stays cohesive.
