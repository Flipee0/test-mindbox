/// <reference types="vitest/config" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],

    // @ts-ignore ide marks this as error despite the directive at the top of the file
    test: {
        globals: true,
        environment: 'jsdom',
    },
    base: '/test-mindbox/',
});
