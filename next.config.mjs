/** @type {import('next').NextConfig} */
const PRODUCCION = process.env.NEXT_PUBLIC_PRODUCCION === 'true';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['spa-ui.onrender.com', 'api.spa.sentirse-bien.gonzaloebel.tech'], // reemplaza con tu dominio de Render
    // remotePatterns: [
    //     { 
    //         protocol: 'http' || 'https',
    //         hostname: 'localhost' || "api.spa.sentirse-bien.gonzaloebel.tech",
    //         port: '4000' || process.env.PORT,
    //         pathname: '/api/images/**'
    //     } 
    // ],
  },

  ...(PRODUCCION && { output: "export" }), // Condicionalmente agregar la propiedad output
  webpack: (config, { isServer }) => {
    // Configuración adicional para soportar módulos ES
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
      };
    }
    return config;
  },
  experimental: {
    // …
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
  },
};

export default nextConfig;