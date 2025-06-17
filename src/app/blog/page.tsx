import React from "react";

interface Article {
  id: number;
  titre: string;
  resume: string;
  date: string;
}

const articles: Article[] = [
  {
    id: 1,
    titre: "5 conseils pour vendre votre propriété rapidement",
    resume: "Découvrez nos meilleurs conseils pour préparer votre maison à la vente et attirer des acheteurs rapidement.",
    date: "2025-06-15"
  },
  {
    id: 2,
    titre: "Pourquoi choisir Lavoie & Fils Immobilier?",
    resume: "Apprenez pourquoi notre approche personnalisée fait toute la différence dans vos projets immobiliers.",
    date: "2025-05-22"
  }
];

export default function Blog() {
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
        <h1 className="text-4xl font-bold mb-10">Blog</h1>
        <div className="space-y-8">
          {articles.map((article) => (
            <div key={article.id} className="border rounded-lg p-6 shadow bg-gray-50 text-left">
              <h2 className="text-2xl font-semibold mb-2">{article.titre}</h2>
              <p className="mb-2 text-sm text-gray-500">{article.date}</p>
              <p className="mb-4">{article.resume}</p>
              <a href="#" className="text-remaxRed font-semibold">Lire la suite...</a>
            </div>
          ))}
        </div>
      </section>

      <footer className="w-full p-4 bg-gray-100 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Lavoie & Fils Immobilier
      </footer>
    </main>
  );
}
