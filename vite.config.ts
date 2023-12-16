import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ra_1-3_props-ts_films/',
  plugins: [react()],
})
