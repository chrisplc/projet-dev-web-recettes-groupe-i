import { Link, useNavigate } from 'react-router'
import AuthForm from '../components/auth-form.jsx'
import { useAuth } from '../auth-context.jsx'

function RegisterPage() {
  const { register } = useAuth()
  const navigate = useNavigate()

  return (
    <AuthForm
      title="Créer un compte"
      submitLabel="S'inscrire"
      onSubmit={async (email, password) => {
        await register(email, password)
        navigate('/')
      }}
    >
      Déjà inscrit ? <Link to="/connexion" className="text-emerald-700 hover:underline">Se connecter</Link>
    </AuthForm>
  )
}

export default RegisterPage
