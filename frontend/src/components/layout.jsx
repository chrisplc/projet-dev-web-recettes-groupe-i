import { NavLink, Outlet } from 'react-router'
import { useAuth } from '../auth-context.jsx'

const linkClass = ({ isActive }) =>
  isActive ? 'font-medium text-emerald-700' : 'text-gray-600 hover:text-gray-900'

function Layout() {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b border-gray-200 bg-white">
        <nav className="mx-auto flex max-w-5xl items-center gap-6 px-4 py-3">
          <NavLink to="/" className="font-semibold">
            Recettes
          </NavLink>
          <NavLink to="/" end className={linkClass}>
            Accueil
          </NavLink>

          <div className="ml-auto flex items-center gap-4 text-sm">
            {user ? (
              <>
                <span className="text-gray-600">{user.email}</span>
                {user.role === 'ADMIN' && (
                  <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
                    Admin
                  </span>
                )}
                <button type="button" onClick={logout} className="text-gray-600 hover:text-gray-900">
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <NavLink to="/connexion" className={linkClass}>Connexion</NavLink>
                <NavLink to="/inscription" className={linkClass}>Inscription</NavLink>
              </>
            )}
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
