# Next.js App Router Folder Structure

This document outlines the folder structure of this Next.js project.

## 📁 Root Directory

```
ai57-landing/
├── app/                    # Next.js App Router directory
├── components/             # React components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and helpers
├── types/                  # TypeScript type definitions
├── constants/              # Application constants
├── public/                 # Static assets
└── [config files]          # Next.js config files
```

## 📂 app/ Directory

The `app/` directory uses Next.js App Router conventions:

```
app/
├── layout.tsx              # Root layout (wraps all pages)
├── page.tsx                # Home page (/)
├── loading.tsx             # Loading UI for the route
├── error.tsx               # Error UI for the route
├── not-found.tsx           # 404 page
├── globals.css             # Global styles
├── (marketing)/            # Route group (doesn't affect URL)
│   ├── layout.tsx          # Layout for marketing routes
│   └── about/
│       ├── layout.tsx      # Nested layout
│       └── page.tsx        # /about page
└── api/                    # API routes
    └── health/
        └── route.ts        # GET /api/health
```

### Route Groups

- `(marketing)` - Routes for marketing pages (parentheses don't appear in URL)
- Route groups help organize routes without affecting the URL structure

### Special Files

- `layout.tsx` - Wraps pages and nested layouts
- `page.tsx` - The UI for a route
- `loading.tsx` - Loading UI shown while page is loading
- `error.tsx` - Error UI for error boundaries
- `not-found.tsx` - 404 page
- `route.ts` - API route handlers (GET, POST, etc.)

## 📂 components/ Directory

```
components/
├── ui/                     # shadcn/ui components
│   └── button.tsx
├── layout/                 # Layout components
│   ├── header.tsx
│   ├── footer.tsx
│   └── index.ts
└── features/               # Feature-specific components
    └── index.ts
```

### Component Organization

- `ui/` - Reusable UI components from shadcn/ui
- `layout/` - Layout-related components (Header, Footer, etc.)
- `features/` - Feature-specific components grouped by domain

## 📂 Other Directories

```
hooks/                      # Custom React hooks
├── index.ts                # Export all hooks

lib/                        # Utility functions
└── utils.ts                # Utility functions (cn, etc.)

types/                      # TypeScript definitions
└── index.ts                # Export all types

constants/                  # Application constants
└── index.ts                # Export all constants
```

## 🎯 Best Practices

1. **Route Organization**: Use route groups `(folder)` to organize routes without affecting URLs
2. **Component Co-location**: Place components close to where they're used, or in `components/` if shared
3. **Barrel Exports**: Use `index.ts` files to export modules from directories
4. **Type Safety**: Define types in `types/` and import where needed
5. **API Routes**: Place API routes in `app/api/[route]/route.ts`
6. **Static Assets**: Place images, fonts, etc. in `public/`

## 📝 Adding New Pages

To add a new page:

1. Create a `page.tsx` file in `app/your-route/page.tsx`
2. The file path becomes the URL (e.g., `app/about/page.tsx` → `/about`)

## 📝 Adding API Routes

To add an API route:

1. Create a `route.ts` file in `app/api/your-endpoint/route.ts`
2. Export named functions: `GET`, `POST`, `PUT`, `DELETE`, etc.
3. The folder name becomes the endpoint (e.g., `app/api/users/route.ts` → `/api/users`)

## 📝 Adding Components

1. **Shared UI Components**: Add to `components/ui/` (use shadcn/ui CLI)
2. **Layout Components**: Add to `components/layout/`
3. **Feature Components**: Add to `components/features/`
4. **Page-specific Components**: Co-locate in the same folder as the page
