/** @type {import('next').NextConfig} */
const PRODUCCION = process.env.NEXT_PUBLIC_PRODUCCION === 'true';

const nextConfig = {
      // Uncomment the following line to build a static site.
  reactStrictMode: true,
    images: {
        domains: ['https://spa-ui.onrender.com/' || "https://api.spa.sentirse-bien.gonzaloebel.tech/"], // reemplaza con tu dominio de Render
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
};

export default nextConfig;
