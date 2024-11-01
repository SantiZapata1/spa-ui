// "use client"; // Marca este componente como Client Component

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from '../context/auth';

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "SPA - Sentirse Bien",
  description: "Estás a un masaje de sentirte bien",
  start_url: "/",
  display: "standalone",
  manifest: "/manifest.json",
  icons: {
    apple: "/logo_sin_fondo.png",
    android: "/logo_sin_fondo.png",

  },
  themecolor: "#000000",
  
 
}

export default function RootLayout({ children }: Readonly<{children: React.ReactNode; }>) {
  // const pathname = usePathname(); // Obtiene la ruta actual

  // Verifica si la ruta actual comienza con lo que quiero que no muestre el NavBar y el Footer
  // const shouldHideNavFooter = pathname.startsWith("/panel-general");
 
  return (
    <html lang="es">
      {/* <title>SPA - Sentirse Bien</title> */}
      <body className={inter.className}>
        <AuthProvider>
          {/* {!shouldHideNavFooter && <NavBar />} */}
            {children}
          {/* {!shouldHideNavFooter && <Footer />} */}
        </AuthProvider>
      </body>
      <link rel="icon" href="logo_sin_fondo.png" sizes="any" />
    </html>
  );
}
