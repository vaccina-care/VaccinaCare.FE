import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    publicDir: 'public', 
    // Ensure the Vite development server listens on 0.0.0.0 and port 3000

    //Optimize dev server
    server: {
        hmr: {
            overlay: false, // Disable the error overlay
        },
        watch: {
            usePolling: false, // Disable polling
        },
        fs: {
            strict: false, // Less strict file system checks
        },
        host: '0.0.0.0', // Bind to 0.0.0.0 to make the server accessible outside the container
        port: 3000, // Set the port to 3000
    },

    // Optimize dependencies
    optimizeDeps: {
        include: [
            'react',
            'react-dom',
            'react-router-dom',
        ],
    },

    // Reduce build time
    build: {
        target: 'esnext', // Modern browsers only
        minify: false, // Skip minification in development
        sourcemap: false, // Disable sourcemaps in development
    },
});
