import { verifyEmail } from '../../service/verifyEmail'

interface Props {
  email: string
}

export const EmailMessage: React.FC<Props> = ({ email }) => {
  const isEmail = verifyEmail(email)

  return (
    <p className={`email-message  ${isEmail ? 'valid-email' : 'invalid-email'}`}>
      {
        isEmail ? 'Correo valido' : 'Correo no valido'
      }
    </p>
  )
}
