import type { Pokemon } from '../types'
import { TypeBadge } from './TypeBadge'

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <article className="flex flex-col items-center gap-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <img
        src={pokemon.sprite}
        alt={pokemon.name}
        className="h-24 w-24"
        style={{ imageRendering: 'pixelated' }}
        loading="lazy"
      />
      <div className="text-xs font-mono text-gray-500 dark:text-gray-400">
        #{pokemon.id.padStart(3, '0')}
      </div>
      <h3 className="text-lg font-bold capitalize text-gray-900 dark:text-gray-100">
        {pokemon.name}
      </h3>
      <div className="flex flex-wrap justify-center gap-1.5">
        {pokemon.types.map((t) => (
          <TypeBadge key={t} type={t} />
        ))}
      </div>
    </article>
  )
}
