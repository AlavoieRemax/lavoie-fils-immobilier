import React from "react";

export default function Contact() {
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
        <h1 className="text-4xl font-bold mb-10">Nous contacter</h1>
        <form className="space-y-4 max-w-md mx-auto text-left">
          <div>
            <label className="block mb-1 font-semibold">Nom</label>
            <input type="text" className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Courriel</label>
            <input type="email" className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea className="w-full border rounded p-2" rows={5}></textarea>
          </div>
          <button type="submit" className="px-6 py-3 bg-remaxRed text-white rounded-md hover:bg-red-700">Envoyer</button>
        </form>
      </section>

      <footer className="w-full p-4 bg-gray-100 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Lavoie & Fils Immobilier
      </footer>
    </main>
  );
}
