import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Lavoie & Fils Immobilier',
  description: 'Complice de votre projet immobilier - Lanaudière & Laurentides',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="font-sans bg-white text-gray-900">

        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-remaxBlue text-white">
          <div className="flex items-center space-x-4">
            <Image src="/logo-bonjour.png" alt="Logo" width={50} height={50} />
            <span className="text-xl font-semibold">Lavoie & Fils Immobilier</span>
          </div>

          <nav className="flex space-x-6">
            <Link href="/">Accueil</Link>
            <Link href="/equipe">Notre Équipe</Link>
            <Link href="/properties">Propriétés</Link>
            <Link href="/temoignage">Témoignages</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/a-propos">À propos</Link>
          </nav>
        </header>

        {/* Main content */}
        {children}

        {/* Footer */}
        <footer className="text-center p-4 text-sm text-gray-500">
          © 2025 Lavoie & Fils Immobilier - Tous droits réservés
        </footer>

      </body>
    </html>
  )
}
