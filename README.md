# PWA Pilipinas Davao — Tanstack Start Workshop Starter

Starter code for the **Building Type-safe Web Apps with Tanstack Start & OpenAPI** workshop (April 18, 2026).

## What's inside

```
sample/
├── frontend/   Tanstack Start app (you'll build this during the workshop)
└── backend/    Pre-built Hono + Zod API that produces the OpenAPI spec
```

The two projects are independent — each has its own `package.json`. No workspace tooling.

## Prerequisites

- **Node.js** 20+ (22 recommended)
- **npm** (comes with Node)
- A terminal you're comfortable with
- A code editor (VS Code recommended for the best TS hover experience)

## Running the backend

The backend is pre-built. You'll tour its code during Part 3, but you don't modify it.

```bash
cd backend
npm install
npm run dev
```

Open:

- API:   http://localhost:8787/products
- Spec:  http://localhost:8787/docs/openapi.json

Leave this running for the whole workshop.

## Running the frontend

```bash
cd frontend
npm install
npm run dev
```

The dev server will print a URL (usually http://localhost:3000).

## Pre-built components (already in `frontend/src/components/`)

To keep the workshop focused on Tanstack Start (and not CSS), a few presentational components are provided — you just import and use them:

- **`<PokemonCard pokemon={...} />`** — card with sprite, id, name, and type badges
- **`<PokemonGrid>{children}</PokemonGrid>`** — responsive grid wrapper
- **`<TypeBadge type="fire" />`** — colored pill per pokemon type

Styling is out of scope. These components are provided so your app looks real when your loader returns data.

Example usage inside a route:

```tsx
import { PokemonCard } from '../components/PokemonCard'
import { PokemonGrid } from '../components/PokemonGrid'

function PokemonListPage() {
  const pokemon = Route.useLoaderData()
  return (
    <PokemonGrid>
      {pokemon.map((p) => <PokemonCard key={p.id} pokemon={p} />)}
    </PokemonGrid>
  )
}
```

## Workshop flow

We'll build the frontend together through the workshop. If you fall behind, each major beat is tagged — you can `git checkout <tag>` to catch up.

Tags (add as you build the workshop):

- `01-scaffolded` — fresh TSS project
- `02-first-page` — first route
- `03-typed-params` — route + search params
- `04-loaders` — plain fetch loader
- `05-wired-to-openapi` — HeyAPI generated client in loader

## Out of scope

- React basics, styling, deployment
- Hono/backend framework internals — we use it, we don't teach it

## Resources

- [Tanstack Start](https://tanstack.com/start)
- [@hey-api/openapi-ts](https://heyapi.dev)
- [Hono + Zod OpenAPI](https://hono.dev/examples/zod-openapi)

---

Ned Palacios · Community Lead · PWA Pilipinas Davao
