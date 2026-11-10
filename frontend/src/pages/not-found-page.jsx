import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Page introuvable</h1>
      <Link to="/" className="mt-4 inline-block text-emerald-700 hover:underline">
        Retour à l'accueil
      </Link>
    </section>
  )
}

export default NotFoundPage
