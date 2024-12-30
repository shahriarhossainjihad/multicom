import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'], // শুধুমাত্র React এর entry point যোগ করুন
            refresh: true,
        }),
        react(),
    ],
});
