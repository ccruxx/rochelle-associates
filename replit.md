# Rochelle & Associates Law Firm Website

## Overview

This is a professional law firm website for Rochelle & Associates, a criminal defense and family law practice in Lawton, Oklahoma. The application is built as a modern full-stack web application with a React frontend and Express backend, designed to provide information about legal services, attorney credentials, and enable potential clients to contact the firm through a web form.

The website focuses on local SEO optimization for Lawton, Oklahoma, targeting practice areas including criminal defense, DUI defense, family law, domestic violence, tribal family law, and estate planning. The site includes structured data markup, comprehensive meta tags, and content optimized for search engines while maintaining a professional, accessible user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query (React Query) for server state management
- Shadcn UI component library built on Radix UI primitives
- Tailwind CSS for styling with a custom design system

**Design Decisions:**
- **Component Library Choice**: Uses Shadcn UI (configured in components.json) which provides accessible, customizable components built on Radix UI. This was chosen for its accessibility-first approach and customization capabilities while maintaining a professional appearance suitable for a law firm.
- **Styling Strategy**: Tailwind CSS with CSS variables for theming (defined in index.css). The color scheme uses navy blue (primary) and gold (secondary/accent) to convey professionalism and trustworthiness. Custom design tokens are defined for consistency across the application.
- **Routing Strategy**: Wouter was selected as a lightweight alternative to React Router, sufficient for this relatively simple multi-page site with routes for Home, About, Practice Areas (with sub-pages), Criminal Defense, DUI Defense, Family Law, and Contact.
- **State Management**: TanStack Query handles server state (contact form submissions), while local component state manages UI interactions. No global client state management library was needed due to the application's simplicity.

**Key Pages:**
- Home (`/`) - Landing page with practice area overview and testimonials
- About (`/about`) - Attorney biography and firm credentials
- Criminal Defense (`/criminal-defense`) - Dedicated service page
- DUI Defense (`/dui-defense`) - Dedicated service page
- Family Law (`/family-law`) - Dedicated service page
- Practice Areas (`/practice-areas` and `/practice-areas/:area`) - Dynamic service pages for additional practice areas
- Contact (`/contact`) - Contact form and office information
- 404 Not Found (`/not-found`) - Error page

### Backend Architecture

**Technology Stack:**
- Express.js server with TypeScript
- Node.js runtime environment
- Vite middleware for development (HMR and SSR-like capabilities)
- Static file serving for production builds

**API Design:**
- RESTful API structure with `/api` prefix for all endpoints
- Single POST endpoint `/api/contact` for contact form submissions
- JSON request/response format
- Zod schema validation for request data

**Data Storage:**
- In-memory storage implementation (`MemStorage` class in server/storage.ts)
- Prepared for database integration with defined interface (`IStorage`)
- Database schema defined using Drizzle ORM with PostgreSQL dialect
- Neon Database serverless driver configured for production deployment

**Rationale for In-Memory Storage:**
The application currently uses an in-memory storage implementation as a placeholder. This allows the application to function without database setup during initial development while maintaining a clean interface (`IStorage`) that can be swapped for a real database implementation (likely PostgreSQL via Drizzle ORM based on the configuration) without changing business logic.

### Database Architecture

**Schema Design (Drizzle ORM):**
- Contact submissions table (`contact_submissions`) stores lead information
- Fields: id (UUID), name, email, phone (optional), message, createdAt timestamp
- Uses PostgreSQL-specific types and functions (gen_random_uuid)
- Schema validation via Drizzle-Zod integration

**Database Configuration:**
- Drizzle Kit configured for PostgreSQL dialect
- Connection via DATABASE_URL environment variable
- Neon serverless database driver for production
- Migration files output to `./migrations` directory
- Schema source: `./shared/schema.ts`

**Future Database Integration:**
The codebase is prepared for database integration. The `IStorage` interface in server/storage.ts defines the contract that a database implementation must fulfill. To add PostgreSQL:
1. Install @neondatabase/serverless (already in dependencies)
2. Create a Drizzle database instance
3. Implement IStorage interface with Drizzle queries
4. Replace MemStorage with database implementation
5. Run `npm run db:push` to sync schema

### Security Considerations

**Data Protection:**
- Contact submission GET endpoint removed to protect PII
- CORS and request validation implemented
- Environment variables for sensitive configuration
- HTTPS enforced in production (recommended)

**Input Validation:**
- Zod schemas validate all user input
- Email format validation
- Minimum length requirements for name and message
- Optional phone number field

### SEO Strategy

**On-Page Optimization:**
- Dynamic meta tags per page (title, description, keywords)
- Structured data (JSON-LD) for Attorney schema with local business information
- Semantic HTML structure with proper heading hierarchy
- Mobile-responsive viewport configuration
- Open Graph tags for social media sharing

**Local SEO:**
- Location-specific keywords (Lawton, Oklahoma, Comanche County)
- Geographic coordinates in structured data
- Area served markup for cities and counties
- Google Business Profile integration ready
- Sitemap.xml and robots.txt configured

**Technical SEO:**
- Fast page loads via Vite optimization
- Static site generation capabilities
- Clean URL structure with semantic paths
- Internal linking structure between practice area pages

## External Dependencies

### Third-Party Services

**Database Provider:**
- Neon Database (serverless PostgreSQL) - configured but not yet actively used
- Connection via @neondatabase/serverless driver
- Requires DATABASE_URL environment variable

**Development Tools:**
- Replit-specific plugins for runtime error handling and development banners
- Cartographer plugin for Replit integration

### Key NPM Packages

**Frontend:**
- @tanstack/react-query (v5.60.5) - Server state management
- @radix-ui/* - Accessible UI primitives (20+ packages for different components)
- wouter - Client-side routing
- react-hook-form (via @hookform/resolvers) - Form state management
- zod - Runtime type validation
- tailwindcss - Utility-first CSS framework
- date-fns - Date formatting utilities
- embla-carousel-react - Carousel/slider functionality

**Backend:**
- express - Web server framework
- drizzle-orm - TypeScript ORM for PostgreSQL
- drizzle-zod - Schema validation bridge
- tsx - TypeScript execution for development

**Build Tools:**
- vite - Frontend build tool and dev server
- esbuild - Backend bundling for production
- typescript - Type checking and compilation
- tailwindcss - CSS processing

### Environment Variables Required

- `DATABASE_URL` - PostgreSQL connection string (required for database features)
- `NODE_ENV` - Environment mode (development/production)
- `REPL_ID` - Replit-specific identifier (optional, for Replit deployment)

### External APIs

**Current Integrations:**
- **Google Maps Embed** - Embedded maps showing office location at 511 SW C Ave, Lawton, OK 73501
  - Contact page: Full-size interactive map with Get Directions button
  - Homepage: "Visit Our Office" section with map and office details
  - Footer: Small embedded map (250px height) on all pages
  - Get Directions functionality uses Google Maps Directions API
  - All maps configured with lazy loading and proper accessibility attributes

**Future Integrations:**
- Email service (SendGrid, Mailgun) for contact form notifications
- Calendar API for appointment scheduling
- Payment processing for retainers

## Recent Changes

### Facebook Social Media Integration (November 2025)
Added Facebook social media links throughout the website to improve engagement and social proof:

**Implementation:**
1. **Footer**: Added "Follow Us" section with Facebook icon button visible on all pages
2. **Contact Page**: Added "Connect With Us" card as 5th contact info card with Facebook link

**Facebook Page:**
- URL: https://www.facebook.com/profile.php?id=100068930332608
- Opens in new tab with proper security attributes (rel="noopener noreferrer")
- Accessibility-compliant with aria-labels

**Benefits:**
- Increases social media engagement and follower growth
- Provides social proof and credibility to potential clients
- Offers another channel for clients to connect and stay updated
- Consistent presence across all pages via footer

### Office Hours Update to Match Google Business Profile (November 2025)
Updated all office hours across the website to match the Google Business Profile exactly, ensuring NAP consistency for optimal local SEO:

**Updated Schedule:**
- **Monday-Thursday**: 9:00 AM - 5:00 PM
- **Friday**: 9:00 AM - 12:00 PM
- **Saturday-Sunday**: Closed

**Locations Updated:**
1. **Home Page Schema Markup**: LegalService JSON-LD with separate openingHoursSpecification entries for Monday-Thursday (09:00-17:00) and Friday (09:00-12:00)
2. **Home Page "Visit Our Office" Section**: Complete schedule display including weekend closure
3. **Contact Page**: Office hours info card with primary and secondary lines
4. **Footer**: Three-line format visible on all pages

**SEO Benefits:**
- Perfect NAP consistency between website and Google Business Profile
- Helps Google validate business information for local search rankings
- Reduces confusion for potential clients checking availability
- Supports local 3-pack ranking algorithm requirements

### Google Maps Integration (November 2025)
Added comprehensive Google Maps integration to boost local SEO authority and improve user experience:

**Implementation:**
1. **Contact Page**: Replaced placeholder map with fully interactive Google Maps embed
2. **Homepage**: Added "Visit Our Office" section with embedded map, office details, and Get Directions button
3. **Footer**: Added small map visible on all pages for universal location visibility
4. **Schema Markup**: Enhanced LegalService JSON-LD with geo-coordinates (latitude: 34.604, longitude: -98.395)

**SEO Benefits:**
- Reinforces NAP (Name, Address, Phone) consistency across the site
- Improves visibility for "lawyer near me" and "Lawton criminal defense attorney" searches
- Helps business appear in Google local 3-pack map results
- Shows verified office location on every page via footer map

**Technical Details:**
- Maps use iframe embeds with lazy loading for performance
- Get Directions buttons use Google Maps Directions API (`https://www.google.com/maps/dir/?api=1&destination=...`)
- All maps include proper accessibility attributes (titles, referrer policy)
- Responsive design maintains quality across desktop and mobile devices