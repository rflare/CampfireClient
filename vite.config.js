import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig((command, mode) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
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