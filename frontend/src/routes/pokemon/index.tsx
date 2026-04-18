import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pokemon/')({
  component: PokemonListPage,
})

function PokemonListPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Pokémon
      </h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        Next step: add a loader to fetch data from the backend.
      </p>
    </main>
  )
}
