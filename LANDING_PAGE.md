# Landing Page Structure

This document outlines the landing page structure and components.

## 📁 Components Structure

```
components/
└── features/
    ├── hero.tsx                 # Hero section with main CTA
    ├── stats-section.tsx        # Statistics/metrics section
    ├── features-section.tsx      # Features grid section
    ├── benefits-section.tsx      # Benefits with alternating layout
    ├── cta-section.tsx          # Final call-to-action section
    └── index.ts                 # Barrel exports
```

## 📄 Landing Page Sections

### 1. Hero Section (`components/features/hero.tsx`)

- **Purpose**: Main headline and primary call-to-action
- **Features**:
  - Animated title with gradient text
  - Subtitle/description
  - Two CTA buttons (Get Started, Learn More)
  - Framer Motion animations

### 2. Stats Section (`components/features/stats-section.tsx`)

- **Purpose**: Display key metrics and statistics
- **Features**:
  - Dark background with white text
  - Grid layout (2 columns mobile, 4 columns desktop)
  - Animated counters/values

### 3. Features Section (`components/features/features-section.tsx`)

- **Purpose**: Showcase product/service features
- **Features**:
  - Grid of feature cards (3 columns on desktop)
  - Each card has: icon, title, description
  - Staggered animations on scroll
  - Hover effects

### 4. Benefits Section (`components/features/benefits-section.tsx`)

- **Purpose**: Explain why users should choose you
- **Features**:
  - Alternating left/right layout
  - Large icons/illustrations
  - Detailed descriptions
  - Scroll animations

### 5. CTA Section (`components/features/cta-section.tsx`)

- **Purpose**: Final call-to-action to convert visitors
- **Features**:
  - Gradient background
  - Prominent headline
  - Two action buttons
  - Centered design

## 📊 Data Structure

All landing page content is stored in `constants/landing.ts`:

- `features[]` - Array of feature objects (icon, title, description)
- `benefits[]` - Array of benefit objects (icon, title, description)
- `stats[]` - Array of stat objects (value, label)

## 🎨 Customization

### Update Content

Edit `constants/landing.ts` to change:

- Feature descriptions
- Benefit descriptions
- Statistics values
- Add/remove items

### Update Styling

Each component uses Tailwind CSS classes. Modify:

- Colors: Change `from-blue-600 to-purple-600` gradients
- Spacing: Adjust `py-20`, `px-4`, `gap-8` values
- Layout: Modify grid columns (`sm:grid-cols-2 lg:grid-cols-3`)

### Update Animations

Components use Framer Motion. Modify:

- `initial`, `animate`, `transition` props
- `whileInView`, `viewport` for scroll animations
- `whileHover` for hover effects

## 🚀 Adding New Sections

To add a new section:

1. Create component in `components/features/[section-name].tsx`
2. Export from `components/features/index.ts`
3. Import and add to `app/page.tsx`

Example:

```tsx
// components/features/testimonials.tsx
export function TestimonialsSection() {
  return <section>...</section>;
}

// components/features/index.ts
export { TestimonialsSection } from "./testimonials";

// app/page.tsx
import { TestimonialsSection } from "@/components/features";
// Add <TestimonialsSection /> in the return
```

## 📱 Responsive Design

All sections are responsive:

- Mobile-first approach
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Flexible grid layouts
- Stack columns on mobile, side-by-side on desktop
