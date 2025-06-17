import React from "react";

export default function Equipe() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-4">
      <section className="py-20 px-4 text-center max-w-6xl">
        <h1 className="text-4xl font-bold mb-10">Notre Équipe</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center">
            <img src="/alexandre.png" alt="Alexandre Lavoie" className="w-48 h-48 rounded-full object-cover object-top mb-4 shadow-lg" />
            <h2 className="text-2xl font-semibold mb-2">Alexandre Lavoie</h2>
            <p className="mb-4">Courtier immobilier résidentiel de 3e génération avec une connaissance approfondie de la région de Lanaudière et des Laurentides.</p>
            <p>
              📞 <a href="tel:4505126578" className="text-remaxRed font-semibold">450-512-6578</a>
            </p>
            <p>
              📧 <a href="mailto:alexandre.lavoie@remax-quebec.com" className="text-remaxRed font-semibold">alexandre.lavoie@remax-quebec.com</a>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/jean.png" alt="Jean Lavoie" className="w-48 h-48 rounded-full object-cover object-top mb-4 shadow-lg" />
            <h2 className="text-2xl font-semibold mb-2">Jean Lavoie</h2>
            <p className="mb-4">Actif dans l’immobilier depuis 1977, expert du marché de St-Donat et des environs depuis plus de 40 ans.</p>
            <p>
              📞 <a href="tel:8192171774" className="text-remaxRed font-semibold">819-217-1774</a>
            </p>
            <p>
              📧 <a href="mailto:lavoie-jean@live.ca" className="text-remaxRed font-semibold">lavoie-jean@live.ca</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
