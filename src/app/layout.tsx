import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from '../context/auth'




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPA - Sentirse bien",
  description: "¡Saca tu turno ahora!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>
            <NavBar/>
              {children}
            <Footer/>
        </AuthProvider>

      </body>
      <link rel="icon" href="logo sin fondo.png" sizes="any" />
    </html>
  );
}
