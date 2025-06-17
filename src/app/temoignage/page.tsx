import Link from 'next/link'

export default function Temoignage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Témoignages</h1>
      <p className="mb-4">Découvrez les témoignages de nos clients satisfaits.</p>
      <Link href="/" className="text-remaxBlue underline">Retour à l&apos;accueil</Link>
    </main>
  )
}
