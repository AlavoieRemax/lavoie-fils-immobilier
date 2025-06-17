import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-900">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        {/* Image de fond */}
        <Image
          src="/alexandre-jean-hero.jpg"
          alt="Hero"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Overlay foncé */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Contenu par-dessus */}
        <div className="relative z-20 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Une histoire de famille, <br /> une passion de l’immobilier
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Chez Lavoie & Fils Immobilier, les générations se rencontrent pour mieux servir Lanaudière et les Laurentides.
          </p>
          <Link href="/proprietes" className="px-8 py-3 bg-remaxRed text-white rounded-full font-semibold shadow-md transition duration-300 hover:bg-red-700 hover:scale-105">
            Voir les propriétés
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-remaxBlue text-white text-center py-12">
        <h2 className="text-2xl font-semibold mb-6">Complice de votre projet immobilier</h2>
        <div className="flex justify-center space-x-6">
          <Link href="/proprietes" className="px-6 py-3 bg-white text-remaxBlue rounded-full font-semibold hover:bg-gray-100 transition">Acheter</Link>
          <Link href="/contact" className="px-6 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-remaxBlue transition">Nous joindre</Link>
        </div>
      </section>

    </main>
  )
}
