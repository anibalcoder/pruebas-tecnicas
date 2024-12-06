import { useRef } from 'react'
import { verifyPassword } from '../service/verifyPassword'

interface Props {
  password: string
}

export const PasswordStrength: React.FC<Props> = ({ password }) => {
  const securityCheck = verifyPassword(password)
  // Se utiliza useRef en lugar de variables para evitar recalcular los valores en cada renderizado.
  const securityInfo = useRef({ text: '', color: '' })

  if (securityCheck <= 2) securityInfo.current = { text: 'Contraseña Debil', color: 'red' }
  else if (securityCheck <= 4) securityInfo.current = { text: 'Contraseña Moderada', color: 'orange' }
  else if (securityCheck === 5) securityInfo.current = { text: 'Contraseña Fuerte', color: 'limegreen' }

  return (
    <p
      className='credentials__password-strength'
      style={{ color: `${securityInfo.current.color}` }}
    >
      {securityInfo.current.text}
    </p>
  )
}
