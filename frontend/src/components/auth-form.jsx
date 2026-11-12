import { useState } from 'react'

function AuthForm({ title, submitLabel, onSubmit, children }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSending(true)
    try {
      await onSubmit(email, password)
    } catch (err) {
      setError(err.message)
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm rounded-lg border border-gray-200 bg-white p-6">
      <h1 className="text-xl font-semibold">{title}</h1>

      <label className="mt-6 block text-sm font-medium" htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
      />

      <label className="mt-4 block text-sm font-medium" htmlFor="password">Mot de passe</label>
      <input
        id="password"
        type="password"
        required
        minLength={8}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
      />

      {error && <p role="alert" className="mt-4 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full rounded-md bg-emerald-700 px-4 py-2 font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
      >
        {submitLabel}
      </button>

      <div className="mt-4 text-sm text-gray-600">{children}</div>
    </form>
  )
}

export default AuthForm
