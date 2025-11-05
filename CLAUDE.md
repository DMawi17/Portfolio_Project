# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Dagmawi (www.mawi.me) built with React 17 and Create React App. The site showcases skills, experience, portfolio projects, and contact information. Uses SASS for styling, React Router for navigation, and Framer Motion for animations.

## Development Commands

- `yarn start` - Start development server on localhost:3000
- `yarn build` - Create production build in /build directory
- No test or lint scripts are configured in this project

## Architecture

### Data Management
All portfolio content is centralized in **src/db.json** including:
- Personal introduction and social links
- About section content
- Skills with proficiency levels
- Qualification and work experience
- Portfolio projects with demo links
- Contact information

Content is exposed via React Context API through **src/contexts/data-hooks.js**:
- `DataProvider` wraps the app at root level (src/index.js)
- `useData()` hook provides access to all content and UI configuration
- Icons (FontAwesome) and button configurations are also managed in this context
- Data is read-only; changes should be made in db.json

### Routing Structure
Simple 3-route application (src/core/App.jsx):
- `/` - Main home page (single-page layout)
- `/ThankYou` - Contact form success page
- `*` - 404 error page (Whoops404)

The home route displays all sections (intro, about, skills, qualification, portfolio, contact) in a single-page scrollable layout.

### Component Organization

**Core** (src/core/):
- `App.jsx` - Route configuration
- `Home.jsx` - Main layout composition (Header + Main + Footer + ScrollUpBtn)

**Layout** (src/layout/):
- `Header.jsx` - Top header
- `Nav.jsx` - Navigation menu
- `Main.jsx` - Main content sections
- `Footer.jsx` - Site footer

**Components** (src/components/):
- Organized by feature: contact/, projects/, qualification/, skills/, titles/
- Reusable components: Buttons.jsx, DarkMode.jsx, Intro.jsx, NavList.jsx, Socials.jsx

**Pages** (src/pages/):
- Section components: About.jsx, Contact.jsx, Portfolio.jsx, LandingPage.jsx
- Error pages: Whoops404.jsx, ThankYou.jsx

### SASS Architecture

**Entry point**: src/sass/styles.scss imports all styles in order:
1. Core (App.scss)
2. Layouts (header, nav, footer)
3. Components (buttons, intro, skills, qualification, portfolioSlider)
4. Pages (about, contact, portfolio, etc.)
5. Media queries (small, medium, large)

**Utils** (src/sass/utils/):
- `_colors.scss` - Color palette definitions
- `_fonts.scss` - Font imports and typography
- `_variables.scss` - SASS variables (spacing, sizes, etc.)
- `_index.scss` - Utility exports

**Base**: Reset and typography baseline

**Media Queries**: Responsive breakpoints organized in separate files (small, medium, large)

### Key Dependencies

- **React Router v6**: Client-side routing
- **FontAwesome**: Icons via import macros (configured in babel-plugin-macros.config.js)
- **Framer Motion**: Animation library for transitions
- **Swiper**: Carousel/slider for portfolio projects
- **React Intersection Observer**: Scroll-based animations

### Assets
Portfolio project images stored in **public/images/** and referenced in db.json via relative paths (e.g., "images/moviest.png")

## Making Changes

**Content Updates**: Edit src/db.json to modify any text, links, or portfolio items

**Styling**:
- Follow existing SASS structure - component styles in components/, page styles in pages/
- Use existing color/font variables from src/sass/utils/
- Responsive styles go in media-queries/ directory

**New Features**:
- Add components to appropriate subdirectory in src/components/
- Create corresponding SASS file in src/sass/components/
- Import SASS file in src/sass/styles.scss
- Access data via useData() hook if needed

**Icons**:
- Import from FontAwesome using import macros: `solid("icon-name")` or `brands("icon-name")`
- Add icon definitions to data-hooks.js icons object
- Reference via context in components
