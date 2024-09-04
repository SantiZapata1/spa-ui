/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { 
                protocol: 'http' || 'https',
                hostname: 'localhost',
                port: '4000',
                pathname: '/api/images/**'
            } 
        ],
    },
};

export default nextConfig;
