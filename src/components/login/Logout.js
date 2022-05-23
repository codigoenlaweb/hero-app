import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Logout = () => {

  const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/login', {replace: true})
    }

  return (
    <button onClick={handleLogout} className=' md:text-lg text-gray-400 font-bold'>Logout</button>
  )
}
