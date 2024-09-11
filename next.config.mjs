/** @type {import('next').NextConfig} */
const nextConfig = {
      // Uncomment the following line to build a static site.
  output: "export",
  reactStrictMode: true,
    images: {
        domains: ['https://spa-ui.onrender.com/'], // reemplaza con tu dominio de Render
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
