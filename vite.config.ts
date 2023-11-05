import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/

export default defineConfig({
    base: '/millionaire/',
    plugins: [
        react(),
        checker({
            // e.g. use TypeScript check
            typescript: true
        }),
        svgr()
    ],
    resolve: {
        alias: {
            src: '/src'
        }
    }
})
