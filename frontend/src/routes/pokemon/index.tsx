import { Link, createFileRoute } from '@tanstack/react-router'
import type { Pokemon } from '../../types'
import { PokemonCard } from '../../components/PokemonCard'
import { PokemonGrid } from '../../components/PokemonGrid'

export const Route = createFileRoute('/pokemon/')({
  loader: async () => {
    const res = await fetch('http://localhost:8787/pokemon')
    return res.json() as Promise<Pokemon[]>
  },
  component: PokemonListPage,
})

function PokemonListPage() {
  const pokemon = Route.useLoaderData()

  return (
    <main className="mx-auto max-w-6xl">
      <h1 className="p-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
        Pokémon
      </h1>
      <PokemonGrid>
        {pokemon.map((p) => (
          <Link
            key={p.id}
            to="/pokemon/$id"
            params={{ id: p.id }}
            className="no-underline"
          >
            <PokemonCard pokemon={p} />
          </Link>
        ))}
      </PokemonGrid>
    </main>
  )
}
