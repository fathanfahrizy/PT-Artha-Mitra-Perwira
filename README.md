# PT Artha Mitra Perwira - Company Profile Website

A B2B company profile website for PT Artha Mitra Perwira, a corrugated box manufacturing company. The business focuses on corrugated packaging (Carton Boxes, Pallet Karton, Siku Karton), general printing, and consumable production.

## Technology Stack

| Technology | Description |
|---|---|
| Vite | Frontend build tool and development server |
| React 18 | UI library (JSX, plain JavaScript) |
| React Router | Client-side routing for multi-page architecture |
| Tailwind CSS v4 | Utility-first styling framework |
| react-icons | Iconography (Font Awesome 6) |
| Framer Motion | Fluid animations for complex interactive components |

## Quick Start

```bash
npm install       # Install dependencies
npm run dev       # Start development server
npm run build     # Build production bundle
npm run preview   # Preview the production build locally
```

## Project Structure

This project follows the Atomic Design methodology to ensure high component reusability and scalability.

```text
PT-Artha/
├── public/                 # Static assets served directly from the root
│   └── images/             # Product photos, hero backgrounds, and logos
│
├── src/
│   ├── components/         # UI Components organized by Atomic Design principles
│   │   ├── atoms/          # Basic building blocks (Button, PixelImage, ScrollReveal)
│   │   ├── molecules/      # Simple combinations (ProductCard, FeatureCarousel)
│   │   ├── organisms/      # Complex sections (Navbar, Footer, HeroSection, ProductsSection)
│   │   └── templates/      # Layout wrappers (MainLayout)
│   │
│   ├── data/               # Single Source of Truth for website content
│   │   ├── navigationData.js # Navigation links and mega menu categories
│   │   ├── homeData.js       # Homepage content (Hero, About, Stats)
│   │   ├── productsData.js   # Product catalogs and specifications
│   │   ├── contactData.js    # Contact information and map embeds
│   │   └── footerData.js     # Footer feature strips
│   │
│   ├── pages/              # Page-level components
│   │   ├── Home.jsx        # Landing page
│   │   └── Product.jsx     # Product showcase page
│   │
│   ├── App.jsx             # Root application component and routing configuration
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles and Tailwind base imports
```

## Coding Conventions

1. Data Separation
   All textual content, product details, contact information, and URLs must be managed within the `src/data/*.js` files. Components should remain purely presentational and logic-driven, with no hardcoded business text.

2. Component Organization
   All components must adhere to the Atomic Design pattern (`atoms`, `molecules`, `organisms`, `templates`). Reusable sections should be designed to accept props (e.g., `title`, `description`, `items`) to maximize flexibility across different pages.

3. File Naming
   - React Components: `PascalCase.jsx`
   - Data Files: `camelCase.js` (e.g., `homeData.js`)
   - Exported Constants: `SCREAMING_SNAKE_CASE`

4. Styling
   Use Tailwind CSS utility classes within the JSX. Avoid inline `<style>` tags or custom CSS in `src/index.css` unless strictly necessary for complex global animations or specific external library overrides.

## Brand Guidelines

| Color | Hex | Usage |
|---|---|---|
| Dark Blue | `#0a1428` | Primary background, main text |
| Navy Blue | `#172554` | Hero gradients |
| Brand Red | `#c2182b` | Accents, primary buttons, icons |
| Dark Red | `#a01526` | Primary button hover state |
| Accent Yellow | `#eab308` | Text highlights on dark backgrounds |
| Slate Gray | `#64748b` | Secondary text |

## Content Management Reference

| To modify... | Edit file |
|---|---|
| Products and specifications | `src/data/productsData.js` |
| Homepage Hero, About, stats | `src/data/homeData.js` |
| Navigation menus and application tabs | `src/data/navigationData.js` |
| Contact, social media, maps | `src/data/contactData.js` |
| Footer links and strip | `src/data/footerData.js` |
| Images and assets | `public/images/` |

## Important External URLs

- Google Maps Pin: https://maps.app.goo.gl/LV73HXgJHfVhTJpi9
- WhatsApp Marketing: https://wa.me/6281315669699
- Email: mailto:marketing.arthamitra@gmail.com

*Note: The shortened Google Maps URL cannot be embedded in an iframe. For embedding, utilize the `mapUrl` format located within `src/data/contactData.js`.*