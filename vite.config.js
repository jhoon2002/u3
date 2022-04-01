import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: { transformAssetUrls },
        }),

        quasar({
            sassVariables: 'src/css/quasar-variables.sass',
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        port: 8080,
        proxy: {
            '/dev/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/dev\/api/, '/api'),
            },
            '/pro/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/pro\/api/, '/api'),
            },
            '/dev/hiworks': {
                target: 'https://api.hiworks.com',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/dev\/hiworks/, ''),
            },
            '/pro/hiworks': {
                target: 'https://api.hiworks.com',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/pro\/hiworks/, ''),
            },
        },
    },
    build: {
        outDir: '../afar-backend/public',
    },
})
