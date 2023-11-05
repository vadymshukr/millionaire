import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    base: '/millionaire/',
    plugins: [
        react(),
        checker({
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
