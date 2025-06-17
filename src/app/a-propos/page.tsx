import React from "react";

export default function APropos() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-4">
      <header className="w-full p-6 bg-remaxRed text-white flex justify-between items-center">
        <div className="text-2xl font-bold">Lavoie & Fils Immobilier</div>
        <nav className="space-x-4">
          <a href="/">Accueil</a>
          <a href="/equipe">Notre Équipe</a>
          <a href="/proprietes">Propriétés</a>
          <a href="/temoignages">Témoignages</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <a href="/a-propos">À propos</a>
        </nav>
      </header>

      <section className="py-20 px-4 text-center max-w-4xl">
        <h1 className="text-4xl font-bold mb-10">À propos de nous</h1>
        <p className="mb-4">
          Chez Lavoie & Fils Immobilier, l’immobilier est une tradition familiale transmise depuis trois générations.
        </p>
        <p className="mb-4">
          Basés à St-Donat et actifs dans Lanaudière et les Laurentides, nous offrons un service personnalisé, transparent et professionnel.
        </p>
        <p className="mb-4">
          Notre duo père-fils combine l’expérience depuis 1977 avec une vision moderne et humaine du marché immobilier.
        </p>
        <p className="font-bold text-remaxRed">
          Complice de votre projet immobilier.
        </p>
      </section>

      <footer className="w-full p-4 bg-gray-100 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Lavoie & Fils Immobilier
      </footer>
    </main>
  );
}
