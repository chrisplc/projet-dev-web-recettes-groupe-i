import { Link, useNavigate } from 'react-router'
import AuthForm from '../components/auth-form.jsx'
import { useAuth } from '../auth-context.jsx'

function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()

  return (
    <AuthForm
      title="Connexion"
      submitLabel="Se connecter"
      onSubmit={async (email, password) => {
        await login(email, password)
        navigate('/')
      }}
    >
      Pas de compte ? <Link to="/inscription" className="text-emerald-700 hover:underline">Créer un compte</Link>
    </AuthForm>
  )
}

export default LoginPage
