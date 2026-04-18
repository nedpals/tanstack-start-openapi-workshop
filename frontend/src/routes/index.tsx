import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center gap-6 p-8 text-center">
      <div>
        <div className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Workshop Starter
        </div>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 dark:text-gray-100">
          Tanstack Start + OpenAPI
        </h1>
      </div>
      <p className="text-gray-600 dark:text-gray-400">
        A pre-built backend is serving a small Pokémon API. You'll build the
        frontend that consumes it — type-safe end-to-end.
      </p>
      <Link
        to="/pokemon"
        className="inline-block rounded-full bg-sky-600 px-6 py-3 font-semibold text-white no-underline shadow transition hover:bg-sky-700"
      >
        Browse Pokémon →
      </Link>
    </main>
  )
}
