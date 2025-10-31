# Audit Compliance Consulting & Agri Training Landing Page

## Overview

This is a professional landing page application for an audit compliance consulting and agricultural training business. The application showcases services including Global G.A.P and Siza certification preparation, internal audits, training programs, and paperless systems. The site features a single-page design with prominent WhatsApp call-to-action for immediate client engagement.

The application is built as a full-stack TypeScript application with a React frontend and Express backend, though currently the backend is minimal (serving as a starter template). The focus is on delivering a professional, modern landing page experience optimized for agricultural consulting services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing (currently single-page application)

**UI Component System**
- Shadcn/ui component library with "new-york" style variant
- Radix UI primitives for accessible, unstyled component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for type-safe component variants
- Framer Motion for animations and transitions

**Design System**
- Custom color system using HSL values with CSS variables for theming
- Neutral base color palette with green accent colors (--primary: 142 76% 36%) reflecting agricultural branding
- Responsive typography using Inter/Source Sans Pro with optional Playfair Display for accents
- Spacing based on Tailwind's standard scale (2, 4, 6, 8, 12, 16, 20, 24)
- Custom border radius system (sm: 3px, md: 6px, lg: 9px)

**State Management**
- TanStack Query (React Query) for server state management and data fetching
- Custom query client with infinite stale time and disabled refetching (static content site)
- React Hook Form with Zod resolvers for form validation (infrastructure present, not currently utilized)

**Key Architectural Decisions**
- **Single-Page Application**: Currently implements only a home route, designed as a marketing landing page without complex navigation needs
- **Component-First Design**: Extensive shadcn/ui component library provides consistent, accessible UI building blocks
- **Static Content Approach**: Query client configured with `staleTime: Infinity` and disabled refetching, indicating primarily static content delivery
- **Mobile-First Responsive**: Custom `useIsMobile` hook for adaptive layouts with 768px breakpoint

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- TypeScript with ES modules for modern JavaScript features

**Development & Production Modes**
- Vite middleware integration in development for HMR and SSR capabilities
- Separate production build outputting to `dist/public` for static assets
- Request logging middleware for API route monitoring

**Session & Storage**
- In-memory storage implementation (`MemStorage`) for user data
- Storage interface pattern allowing easy swap to persistent storage
- Session support infrastructure using `connect-pg-simple` (configured for PostgreSQL sessions)

**Key Architectural Decisions**
- **Minimal Backend**: Currently serves as a starter template with placeholder user management
- **Storage Abstraction**: `IStorage` interface allows switching from in-memory to database-backed storage without changing application code
- **Separation of Concerns**: Routes, storage, and server setup cleanly separated into distinct modules

### Data Storage Solutions

**Database Configuration**
- Drizzle ORM configured for PostgreSQL dialect
- Schema location: `shared/schema.ts` for code sharing between client and server
- Migration output directory: `./migrations`

**Current Schema**
- Users table with UUID primary keys, username, and password fields
- Zod validation schemas derived from Drizzle tables using `drizzle-zod`

**Database Provider**
- Neon serverless PostgreSQL (`@neondatabase/serverless`) configured as the database client
- Connection via `DATABASE_URL` environment variable

**Key Architectural Decisions**
- **Shared Schema Pattern**: Database schema defined in `shared/` directory enables type-safe data models across client and server
- **Drizzle Kit**: Database schema management and migrations handled through Drizzle's push/migration system
- **Currently Unused**: Database infrastructure is set up but not actively used in the landing page application

### External Dependencies

**UI & Component Libraries**
- **Shadcn/ui**: Complete component library using Radix UI primitives
- **Radix UI**: 20+ primitive components (accordion, dialog, dropdown, select, toast, etc.)
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel component
- **cmdk**: Command palette/menu component
- **Framer Motion**: Animation library for UI transitions

**Forms & Validation**
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition
- **@hookform/resolvers**: Integration between React Hook Form and Zod

**Styling**
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with Autoprefixer
- **clsx & tailwind-merge**: Conditional class name utilities
- **class-variance-authority**: Type-safe variant API for component styling

**Data Fetching**
- **TanStack Query**: Server state management, caching, and synchronization

**Backend Services**
- **Neon Serverless PostgreSQL**: Serverless database provider
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **connect-pg-simple**: PostgreSQL session store for Express

**Development Tools**
- **TypeScript**: Type safety across the stack
- **Vite**: Frontend build tool and dev server
- **TSX**: TypeScript execution for Node.js
- **ESBuild**: Backend bundling for production builds
- **Replit Plugins**: Development banner, error overlay, and cartographer for Replit environment

**Key Integration Points**
- WhatsApp integration (contact CTA) via direct links/buttons in the UI
- No external API integrations currently implemented
- Database connection through environment variable (`DATABASE_URL`)
- Google Fonts integration for typography (preconnected in HTML head)