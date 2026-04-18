import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pokemon/$id')({
  component: PokemonDetailPage,
})

function PokemonDetailPage() {
  const { id } = Route.useParams()
  return (
    <main className="mx-auto max-w-2xl p-6">
      <Link
        to="/pokemon"
        className="text-sm text-sky-600 no-underline hover:underline"
      >
        ← Back to all pokémon
      </Link>
      <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
        Pokémon #{id}
      </h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        Next step: add a loader to fetch this pokemon from the backend.
      </p>
    </main>
  )
}
