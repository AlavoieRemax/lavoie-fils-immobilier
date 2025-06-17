import "./globals.css";
import type { Metadata } from "next";
import React from "react";

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
  <a href="/" className="hover:underline hover:text-remaxBlue">Accueil</a>
  <a href="/equipe" className="hover:underline hover:text-remaxBlue">Notre Équipe</a>
  <a href="/proprietes" className="hover:underline hover:text-remaxBlue">Propriétés</a>
  <a href="/temoignages" className="hover:underline hover:text-remaxBlue">Témoignages</a>
  <a href="/blog" className="hover:underline hover:text-remaxBlue">Blog</a>
  <a href="/contact" className="hover:underline hover:text-remaxBlue">Contact</a>
  <a href="/a-propos" className="hover:underline hover:text-remaxBlue">À propos</a>
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
