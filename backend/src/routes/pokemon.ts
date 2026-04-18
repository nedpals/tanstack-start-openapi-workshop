import { createRoute, OpenAPIHono } from '@hono/zod-openapi'
import {
  PokemonSchema,
  PokemonListSchema,
  PokemonParamsSchema,
  PokemonQuerySchema,
  type Pokemon,
} from '../schemas.js'
import pokemonData from '../data/pokemon.json' with { type: 'json' }

const app = new OpenAPIHono()

const pokemon: Pokemon[] = pokemonData as Pokemon[]

const listPokemon = createRoute({
  method: 'get',
  path: '/',
  operationId: 'listPokemon',
  tags: ['Pokemon'],
  summary: 'List all pokemon (optionally filtered by type)',
  request: { query: PokemonQuerySchema },
  responses: {
    200: {
      content: { 'application/json': { schema: PokemonListSchema } },
      description: 'List of pokemon',
    },
  },
})

const getPokemon = createRoute({
  method: 'get',
  path: '/{id}',
  operationId: 'getPokemonById',
  tags: ['Pokemon'],
  summary: 'Get a pokemon by id',
  request: { params: PokemonParamsSchema },
  responses: {
    200: {
      content: { 'application/json': { schema: PokemonSchema } },
      description: 'A pokemon',
    },
    404: { description: 'Pokemon not found' },
  },
})

app.openapi(listPokemon, (c) => {
  const { type } = c.req.valid('query')
  const filtered = type ? pokemon.filter((p) => p.types.includes(type)) : pokemon
  return c.json(filtered, 200)
})

app.openapi(getPokemon, (c) => {
  const { id } = c.req.valid('param')
  const found = pokemon.find((p) => p.id === id)
  if (!found) return c.body(null, 404)
  return c.json(found, 200)
})

export default app
