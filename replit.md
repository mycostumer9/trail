# HR Portal

## Overview

This is an HR Portal application built with Next.js 14, using the T3 Stack architecture. The application is currently in its initial setup phase, with a foundation ready for building HR-related features and workflows. It serves as a human resources management system designed to handle employee data, workflows, and related HR operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: Next.js 14 with App Router
- Uses React Server Components (RSC) for improved performance
- TypeScript throughout the application for type safety
- App directory structure for file-based routing

**UI Component Library**: shadcn/ui
- Built on top of Radix UI primitives for accessible, unstyled components
- Includes a comprehensive set of pre-built components (accordion, alert-dialog, avatar, badge, button, calendar, card, carousel, checkbox, dialog, dropdown-menu, form, input, select, table, tabs, toast, and more)
- Styled with Tailwind CSS for utility-first styling
- Theme support with CSS variables for light/dark mode customization
- Components located in `src/components/ui/` directory

**Styling Solution**: Tailwind CSS
- Custom configuration with design tokens (colors, spacing, animations)
- CSS variables for theming flexibility
- Global styles defined in `src/styles/globals.css`
- Prefix-free utility classes for cleaner markup

**Form Handling**: React Hook Form
- Integrated with `@hookform/resolvers` for validation
- Form components built with shadcn/ui patterns

**Utility Functions**
- `cn()` helper for conditional class name merging using clsx and tailwind-merge
- Located in `src/lib/utils.ts`

### Backend Architecture

**Runtime**: Node.js with Next.js server capabilities
- API routes (when implemented) will use Next.js App Router route handlers
- Server-side rendering and server components for optimal performance

**Database ORM**: Drizzle ORM
- Schema definition in `src/server/db/schema.ts`
- Currently includes a sample `posts` table as a reference implementation
- Connection pooling with postgres.js client
- Development-optimized with connection caching to avoid HMR issues
- Database migrations managed through drizzle-kit CLI commands

**Database Schema Pattern**
- Multi-project schema support with table name prefixing (`hr-portal_*`)
- Timestamp fields with timezone support
- Indexed fields for query optimization

**Type Safety**: Zod for runtime validation
- Environment variable validation in `src/env.js`
- Ensures all required environment variables are present at build/runtime

**Environment Configuration**
- Managed through `@t3-oss/env-nextjs` for type-safe environment variables
- Separate server and client variable definitions
- Runtime environment validation with helpful error messages

### External Dependencies

**Database**: Supabase (PostgreSQL)
- Hosted PostgreSQL database service
- Connection via `SUPABASE_DATABASE_URL` environment variable
- Drizzle ORM configured for PostgreSQL dialect
- Table filtering with `hr-portal_*` prefix pattern

**Authentication/Backend Service**: Supabase
- Supabase client initialized in `src/supabase/supabase.ts`
- Uses project URL and API key for authentication
- Ready for implementing row-level security and authentication flows

**Development Tools**
- Drizzle Kit for database schema management and migrations
- Drizzle Studio for visual database exploration (accessible via `db:studio` command)

**Key NPM Scripts**
- `dev`: Development server on port 5000
- `build`: Production build
- `start`: Production server on port 5000
- `db:generate`: Generate migration files from schema
- `db:migrate`: Run database migrations
- `db:push`: Push schema changes directly to database
- `db:studio`: Launch Drizzle Studio for database management

**Font**: Geist Sans
- Modern, clean typeface for UI consistency
- Applied globally through the root layout

**Environment Variables Required**
- `DATABASE_URL`: Primary database connection string
- `SUPABASE_PROJECT_URL`: Supabase project URL
- `SUPABASE_KEY`: Supabase API key for authentication
- `SUPABASE_DATABASE_URL`: Direct PostgreSQL connection string for Drizzle
- `NODE_ENV`: Environment mode (development/test/production)

**Code Quality Tools**
- ESLint for code linting
- Prettier with Tailwind CSS plugin for code formatting
- TypeScript with strict mode enabled