import React from "react";

interface Temoin {
  id: number;
  nom: string;
  commentaire: string;
}

const temoignages: Temoin[] = [
  {
    id: 1,
    nom: "Marie C.",
    commentaire: "Service impeccable et très professionnel. Alexandre et Jean nous ont accompagnés tout au long de notre transaction avec une attention exceptionnelle."
  },
  {
    id: 2,
    nom: "Luc D.",
    commentaire: "Merci à Lavoie & Fils Immobilier pour leur disponibilité et leur expertise. Une équipe de confiance!"
  }
];

export default function Temoignages() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
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
        <h1 className="text-4xl font-bold mb-10">Témoignages</h1>
        <div className="space-y-8">
          {temoignages.map((temoin) => (
            <div key={temoin.id} className="border rounded-lg p-6 shadow bg-gray-50">
              <p className="italic mb-4">"{temoin.commentaire}"</p>
              <p className="font-bold">{temoin.nom}</p>
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
