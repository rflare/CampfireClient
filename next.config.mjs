/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `http://127.0.0.1:${process.env.SERVER_LOCAL_PORT}/api/:path*`
            }
        ]
    }
};

export default nextConfig;
