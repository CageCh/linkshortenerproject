# Clerk Authentication (Clerk-only)

Purpose: document authentication rules and expectations for agents and contributors.

- **Auth Provider:** Clerk is the only allowed authentication provider. NO other auth methods or custom auth flows should be added.
- **Protected Route:** `/dashboard` is a protected route and must require the user to be authenticated to access it.
- **Homepage Behavior:** If a user is authenticated and attempts to access the homepage (`/`), they must be redirected to `/dashboard`.
- **Sign In / Sign Up:** All sign in and sign up flows must use Clerk and must launch as a modal (do not implement full-page sign-in flows).

Implementation notes for contributors:
- Prefer Clerk's official Next.js integration and helpers (client and server-side) when implementing guards, middleware, or redirects.
- Server-side checks: perform auth checks on the server for `/dashboard` (SSR or middleware) to avoid exposing protected data to unauthenticated requests.
- Client-side UX: use Clerk modal APIs/components for sign-in/sign-up to ensure consistent modal behavior.
- Tests: update or add tests to assert that `/dashboard` is inaccessible when unauthenticated, that authenticated users are redirected from `/` to `/dashboard`, and that Clerk modals are used for sign-in/up.

Agent instructions:
- ALWAYS consult this file before making auth-related changes.
- If a requested change requires adding a second auth method, decline and ask the maintainer for explicit approval.
