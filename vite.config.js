import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true
        }),
        react()
    ],
    css: {
        postcss: './postcss.config.js',
         // Ensure this is correctly set for PostCSS
        preprocessorOptions: {
            scss: {
              additionalData: `@import "resources/scss/variables";` // Adjust the path to your SCSS variables file
            },
        }
    },

    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-slick'] // Example for splitting vendor libraries
                }
            }
        }
    },

    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif']
})
