import { z } from '@hono/zod-openapi'

export const PokemonType = z
  .enum([
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
  ])
  .openapi('PokemonType')

export const PokemonSchema = z
  .object({
    id: z.string().openapi({ example: '25' }),
    name: z.string().openapi({ example: 'pikachu' }),
    types: z.array(PokemonType).openapi({ example: ['electric'] }),
    height: z.number().openapi({ example: 4, description: 'In decimeters' }),
    weight: z.number().openapi({ example: 60, description: 'In hectograms' }),
    sprite: z.string().url().openapi({
      example:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    }),
  })
  .openapi('Pokemon')

export type Pokemon = z.infer<typeof PokemonSchema>

export const PokemonListSchema = z.array(PokemonSchema).openapi('PokemonList')

export const PokemonParamsSchema = z
  .object({
    id: z.string().openapi({
      param: { name: 'id', in: 'path' },
      example: '25',
    }),
  })
  .openapi('PokemonParams')

export const PokemonQuerySchema = z
  .object({
    type: PokemonType.optional().openapi({
      param: { name: 'type', in: 'query' },
      example: 'fire',
    }),
  })
  .openapi('PokemonQuery')
