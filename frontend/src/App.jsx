import { Route, Routes } from 'react-router'
import Layout from './components/layout.jsx'
import HomePage from './pages/home-page.jsx'
import NotFoundPage from './pages/not-found-page.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
