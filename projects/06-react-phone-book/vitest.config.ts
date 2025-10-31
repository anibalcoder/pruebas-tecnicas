import { defineConfig, mergeConfig  } from 'vitest/config'
import viteConfig from './vite.config.ts'

// Extiende la config de Vite para compartir alias y plugins
export default mergeConfig(viteConfig, defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
  },
}))