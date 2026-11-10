import { Route, Routes } from 'react-router'
import HomePage from './pages/home-page.jsx'
import NotFoundPage from './pages/not-found-page.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
