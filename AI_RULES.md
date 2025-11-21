# AI Rules for Portfolio Next.js Application

This document outlines the technical stack and specific library usage guidelines for developing and maintaining this application.

## Tech Stack Description

*   **Framework**: Next.js (App Router) for server-rendered React applications, API routes, and server actions.
*   **Language**: JavaScript (with a preference for TypeScript for all new files and components to enhance type safety and maintainability).
*   **Styling**: Tailwind CSS for utility-first styling, ensuring responsive and consistent UI. SASS is used for complex global styles and animations (e.g., `stars.sass`).
*   **UI Components**: shadcn/ui for pre-built, accessible, and customizable UI components, built on Radix UI primitives.
*   **Icons**: `lucide-react` for a comprehensive set of SVG icons.
*   **Form Handling**: `@formspree/react` for handling form submissions to Formspree.
*   **Animations**: AOS (Animate On Scroll) for scroll-triggered animations and `tw-animate-css` for general CSS animations.
*   **Toast Notifications**: `react-toastify` for displaying user feedback and notifications.
*   **Backend/API**: Next.js API Routes for server-side logic and Next.js Server Actions for direct server-side function calls.
*   **Utilities**: `clsx` and `tailwind-merge` are used via `cn` utility for conditionally joining CSS class names.

## Library Usage Rules

*   **UI Components**:
    *   Always prioritize using existing shadcn/ui components (`Button`, `Card`, `Tabs`, `Table`, `Dialog`, `Badge`).
    *   If a required component is not available in shadcn/ui or needs significant deviation, create a new component in `src/components/` using Tailwind CSS and, if appropriate, Radix UI primitives.
    *   **DO NOT** modify the files within `components/ui/` directly.
*   **Styling**:
    *   All new styling should primarily use Tailwind CSS utility classes.
    *   For global styles or complex animations that are difficult to achieve with Tailwind utilities alone, SASS (`.sass` files) can be used, but keep its usage minimal and focused.
*   **Icons**:
    *   Use icons from the `lucide-react` library.
*   **Forms**:
    *   For client-side form handling and submission to Formspree, use the `@formspree/react` library.
*   **Animations**:
    *   For scroll-based animations, integrate `aos`.
    *   For other CSS animations, leverage `tw-animate-css` or define custom keyframe animations in SASS/CSS.
*   **Notifications**:
    *   Use `react-toastify` for all toast notifications to provide consistent user feedback.
*   **Data Fetching & Server Logic**:
    *   For server-side data fetching or API interactions, use Next.js API Routes (`app/api/`) or Server Actions (`lib/actions/`).
*   **State Management**:
    *   For component-level state, use React's `useState` and `useReducer` hooks.
    *   For global state, consider React Context API for simpler scenarios. Avoid external state management libraries unless explicitly required for complex global state needs.
*   **File Structure**:
    *   New components should be placed in `src/components/`.
    *   New pages should be placed in `src/pages/`.
    *   Utility functions should be placed in `src/lib/utils/`.
    *   Server actions should be placed in `src/lib/actions/`.
*   **Code Quality**:
    *   All new code should be written in TypeScript (`.tsx` or `.ts` files).
    *   Ensure responsive design for all new components and layouts.
    *   Prioritize simplicity and elegance in code. Avoid over-engineering.
    *   Create small, focused components (ideally under 100 lines of code).