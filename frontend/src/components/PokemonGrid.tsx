import type { ReactNode } from 'react'

export function PokemonGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {children}
    </div>
  )
}
