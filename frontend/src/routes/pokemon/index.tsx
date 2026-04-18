import { Link, createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { listPokemon } from '../../client'
import { PokemonCard } from '../../components/PokemonCard'
import { PokemonGrid } from '../../components/PokemonGrid'

const POKEMON_TYPES = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
] as const

export const Route = createFileRoute('/pokemon/')({
  validateSearch: z.object({
    type: z.enum(POKEMON_TYPES).optional(),
  }),
  loaderDeps: ({ search: { type } }) => ({ type }),
  loader: async ({ deps: { type } }) => {
    const { data } = await listPokemon({ query: { type } })
    return data ?? []
  },
  component: PokemonListPage,
})

function PokemonListPage() {
  const pokemon = Route.useLoaderData()
  const { type } = Route.useSearch()

  return (
    <main className="mx-auto max-w-6xl">
      <header className="flex flex-wrap items-center justify-between gap-4 p-4">
        <h1 className="text-2xl font-bold capitalize text-gray-900 dark:text-gray-100">
          Pokémon{' '}
          {type && (
            <span className="text-lg font-normal text-gray-500 dark:text-gray-400">
              · filtered by {type}
            </span>
          )}
        </h1>
        <nav className="flex flex-wrap gap-2 text-sm">
          <FilterLink />
          <FilterLink type="fire" />
          <FilterLink type="water" />
          <FilterLink type="electric" />
          <FilterLink type="psychic" />
        </nav>
      </header>

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

function FilterLink({ type }: { type?: (typeof POKEMON_TYPES)[number] }) {
  return (
    <Link
      to="/pokemon"
      search={type ? { type } : {}}
      className="rounded-full border border-gray-300 px-3 py-1 capitalize text-gray-700 no-underline hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
      activeProps={{
        className:
          'rounded-full border border-sky-500 bg-sky-500 px-3 py-1 capitalize text-white no-underline',
      }}
      activeOptions={{ exact: true, includeSearch: true }}
    >
      {type ?? 'all'}
    </Link>
  )
}
