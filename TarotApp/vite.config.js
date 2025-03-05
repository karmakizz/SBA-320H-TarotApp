import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',    // Bind to all network interfaces (publicly accessible)
    port: process.env.PORT || 8080, // Use the environment variable or default to 8080
  },
})
