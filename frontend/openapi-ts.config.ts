import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: 'http://localhost:8787/docs/openapi.json',
  output: {
    path: 'src/client',
    format: 'prettier',
  },
  plugins: ['@hey-api/client-fetch', '@hey-api/sdk', '@hey-api/typescript'],
})
