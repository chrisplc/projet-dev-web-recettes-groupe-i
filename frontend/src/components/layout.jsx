import { NavLink, Outlet } from 'react-router'

const linkClass = ({ isActive }) =>
  isActive ? 'font-medium text-emerald-700' : 'text-gray-600 hover:text-gray-900'

function Layout() {
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
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
