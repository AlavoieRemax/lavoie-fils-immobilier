import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Lavoie & Fils Immobilier",
  description: "Complice de votre projet immobilier à St-Donat, Lanaudière et Laurentides"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900">
        <header className="w-full p-6 bg-remaxRed text-white flex justify-between items-center shadow-md">
          <div className="text-2xl font-bold flex items-center space-x-2">
            {/* Ici on va ajouter ton logo très bientôt */}
            <div className="flex items-center space-x-2">
  <img src="/logo-bonjour.png" alt="Logo Bonjour" className="h-10" />
  <span>Lavoie & Fils Immobilier</span>
</div>
          </div>
          <nav className="space-x-4">
  <link href="/" className="hover:underline hover:text-remaxBlue">Accueil</link>
  <link href="/equipe" className="hover:underline hover:text-remaxBlue">Notre Équipe</link>
  <link href="/proprietes" className="hover:underline hover:text-remaxBlue">Propriétés</link>
  <link href="/temoignages" className="hover:underline hover:text-remaxBlue">Témoignages</link>
  <link href="/blog" className="hover:underline hover:text-remaxBlue">Blog</link>
  <link href="/contact" className="hover:underline hover:text-remaxBlue">Contact</link>
  <link href="/a-propos" className="hover:underline hover:text-remaxBlue">À propos</link>
</nav>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="w-full p-4 bg-gray-100 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Lavoie & Fils Immobilier
        </footer>
      </body>
    </html>
  );
}
