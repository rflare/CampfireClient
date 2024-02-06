import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig((command, mode) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    app: resolve(__dirname, 'app/index.html')
                }
            }
        },
        plugins: [react()],
        server:{
            host: '127.0.0.1',
            port: env.CLIENT_LOCAL_PORT,
            proxy:{
                '/api': `http://localhost:${env.SERVER_LOCAL_PORT}`
            }
        }
    }
})
