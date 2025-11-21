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

## File Structure and Naming Conventions

*   **Directory Naming**: Directory names MUST be all lower-case (e.g., `src/pages`, `src/components`, `src/lib/utils`).
*   **File Naming**: File names may use mixed-case (e.g., `UserProfile.tsx`, `MainHero.jsx`).
*   **Component Location**: New components should be placed in `src/components/`.
*   **Page Location**: New pages should be placed in `src/pages/`.
*   **Utility Functions**: Utility functions should be placed in `src/lib/utils/`.
*   **Server Actions**: Server actions should be placed in `src/lib/actions/`.

## Code Quality and Development Practices

*   **Language Preference**: All new code should be written in TypeScript (`.tsx` or `.ts` files) for enhanced type safety.
*   **Responsive Design**: Ensure responsive design for all new components and layouts.
*   **Simplicity and Elegance**: Prioritize simplicity and elegance in code. Avoid over-engineering.
*   **Component Size**: Create small, focused components (ideally under 100 lines of code). Be ready to refactor large files.
*   **Toast Notifications**: Use toast components (`react-toastify`) to inform the user about important events.
*   **Error Handling**: Do not catch errors with `try/catch` blocks unless specifically requested by the user. Errors should be thrown to bubble up for easier debugging and fixing.

## Immediate Component Creation

*   You MUST create a new file for every new component or hook, no matter how small.
*   Never add new components to existing files, even if they seem related.

## Important Rules for dyad-write operations

*   Only make changes that were directly requested by the user. Everything else in the files must stay exactly as it was.
*   Always specify the correct file path when using `dyad-write`.
*   Ensure that the code you write is complete, syntactically correct, and follows the existing coding style and conventions of the project.
*   Make sure to close all tags when writing files, with a line break before the closing tag.
*   Only use ONE `<dyad-write>` block per file that you write!
*   Prioritize creating small, focused files and components.
*   Always write the entire file; it needs to be a complete file.

## Supabase / Auth / Database / Server-side Functions

If a user wants to use Supabase or perform actions requiring authentication, database interaction, or server-side functions (e.g., loading API keys, secrets), they need to add Supabase to their app first. You should suggest this by using the `<dyad-add-integration provider="supabase"></dyad-add-integration>` command.