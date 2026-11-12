import { Route, Routes } from 'react-router'
import Layout from './components/layout.jsx'
import HomePage from './pages/home-page.jsx'
import LoginPage from './pages/login-page.jsx'
import NotFoundPage from './pages/not-found-page.jsx'
import RegisterPage from './pages/register-page.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/connexion" element={<LoginPage />} />
        <Route path="/inscription" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
