import { serve } from '@hono/node-server'
import { OpenAPIHono } from '@hono/zod-openapi'
import { cors } from 'hono/cors'
import pokemon from './routes/pokemon.js'

const app = new OpenAPIHono()

app.use('*', cors())

app.route('/pokemon', pokemon)

app.doc31('/docs/openapi.json', {
  openapi: '3.1.0',
  info: {
    title: 'Workshop API',
    version: '1.0.0',
    description:
      'Pre-built backend for PWA Pilipinas Davao — Tanstack Start + OpenAPI workshop. A static subset of PokeAPI.',
  },
})

const port = 8787

console.log(`Server running on  http://localhost:${port}`)
console.log(`OpenAPI spec at     http://localhost:${port}/docs/openapi.json`)

serve({ fetch: app.fetch, port })
