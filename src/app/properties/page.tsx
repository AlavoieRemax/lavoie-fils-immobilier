import React from "react";

interface Propriete {
  id: number;
  titre: string;
  description: string;
  prix: string;
  localisation: string;
}

const proprietes: Propriete[] = [
  {
    id: 1,
    titre: "Chalet bord de l'eau - St-Donat",
    description: "Magnifique chalet avec accès au lac, 3 chambres, entièrement rénové.",
    prix: "599 000 $",
    localisation: "St-Donat, Lanaudière"
  },
  {
    id: 2,
    titre: "Condo ski-in/ski-out",
    description: "Condo parfait pour les amateurs de ski, accès direct aux pentes.",
    prix: "449 000 $",
    localisation: "Mont-Garceau, St-Donat"
  }
];

export default function Proprietes() {
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

      <section className="py-20 px-4 text-center max-w-6xl">
        <h1 className="text-4xl font-bold mb-10">Nos propriétés en vedette</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {proprietes.map((prop) => (
            <div key={prop.id} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold mb-2">{prop.titre}</h2>
              <p className="mb-4">{prop.description}</p>
              <p className="font-bold mb-2">{prop.prix}</p>
              <p className="text-sm text-gray-500">{prop.localisation}</p>
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
