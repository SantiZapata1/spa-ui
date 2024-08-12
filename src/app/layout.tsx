import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";

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
        <NavBar/>
        {children}
      </body>
      <link rel="icon" href="logo sin fondo.png" sizes="any" />
    </html>
  );
}
