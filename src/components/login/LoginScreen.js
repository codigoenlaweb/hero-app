import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/marvel', {replace: true})
  }

  return (
    <main>
      <section>
        <h2>Login</h2>
        <button onClick={handleLogin} className='px-2 py-1 rounded-md border border-solid border-pink-600 text-pink-500 font-bold'>login</button>
      </section>
    </main>
  )
}
