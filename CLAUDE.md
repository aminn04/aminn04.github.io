# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
pnpm dev          # Start development server
pnpm build        # Type check and build for production
pnpm preview      # Preview production build locally
pnpm check        # Run Biome linting/formatting (auto-fix)
```

Package manager: pnpm (v9.12.2)

## Architecture Overview

This is an Astro-based personal portfolio/blog site with Tailwind CSS styling.

### Core Technologies
- **Astro 5.17.1** - Static site generator with file-based routing
- **Tailwind CSS 3.4.3** - Utility-first CSS with dark mode (class-based `dark:` prefix)
- **TypeScript** - Type checking via `@astrojs/check`
- **Biome** - Code formatting and linting

### Project Structure

```
/src
  /assets/js/main.js    - Client-side JS (dark mode, sticky header, mobile menu)
  /collections/         - JSON data files (menu.json, projects.json, experiences.json)
  /components/          - Reusable Astro components
    /home/              - Home page specific components
  /content/post/        - Markdown blog posts (content collection)
  /layouts/             - Page layouts (main.astro, post.astro)
  /pages/               - File-based routing
    /post/[slug].astro  - Dynamic blog post routes
```

### Data Flow
- **Navigation**: Configured in `src/collections/menu.json`
- **Projects**: Data in `src/collections/projects.json`, rendered by `components/project.astro`
- **Work Experience**: Data in `src/collections/experiences.json`, rendered on About page
- **Blog Posts**: Markdown files in `src/content/post/` with frontmatter schema (title, description, dateFormatted)

### Layout Hierarchy
```
main.astro (base layout)
├── header.astro (nav, dark mode toggle)
├── [page content slot]
├── footer.astro (social links)
└── square-lines.astro (decorative background)
```

### Key Patterns
- Dark mode persisted via localStorage, toggled in `assets/js/main.js`
- Sticky header behavior triggers at 16px scroll
- Social icons use brand colors (LinkedIn #0A66C2, GitHub adapts to dark mode, Instagram #E4405F, Spotify #1DB954)
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
