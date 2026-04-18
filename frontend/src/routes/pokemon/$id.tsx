import { Link, createFileRoute } from '@tanstack/react-router'
import type { Pokemon } from '../../types'
import { TypeBadge } from '../../components/TypeBadge'

export const Route = createFileRoute('/pokemon/$id')({
  loader: async ({ params }) => {
    const res = await fetch(`http://localhost:8787/pokemon/${params.id}`)
    if (!res.ok) throw new Error(`Pokemon ${params.id} not found`)
    return res.json() as Promise<Pokemon>
  },
  component: PokemonDetailPage,
})

function PokemonDetailPage() {
  const pokemon = Route.useLoaderData()

  return (
    <main className="mx-auto max-w-2xl p-6">
      <Link
        to="/pokemon"
        className="text-sm text-sky-600 no-underline hover:underline"
      >
        ← Back to all pokémon
      </Link>

      <article className="mt-6 flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <img
          src={pokemon.sprite}
          alt={pokemon.name}
          className="h-48 w-48"
          style={{ imageRendering: 'pixelated' }}
        />
        <div className="font-mono text-sm text-gray-500 dark:text-gray-400">
          #{pokemon.id.padStart(3, '0')}
        </div>
        <h1 className="text-3xl font-bold capitalize text-gray-900 dark:text-gray-100">
          {pokemon.name}
        </h1>
        <div className="flex flex-wrap justify-center gap-2">
          {pokemon.types.map((t) => (
            <TypeBadge key={t} type={t} />
          ))}
        </div>
        <dl className="mt-2 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
          <dt className="text-gray-500 dark:text-gray-400">Height</dt>
          <dd className="text-gray-900 dark:text-gray-100">
            {(pokemon.height / 10).toFixed(1)} m
          </dd>
          <dt className="text-gray-500 dark:text-gray-400">Weight</dt>
          <dd className="text-gray-900 dark:text-gray-100">
            {(pokemon.weight / 10).toFixed(1)} kg
          </dd>
        </dl>
      </article>
    </main>
  )
}
