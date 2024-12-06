import { verifyEmail } from '../../service/verifyEmail'
import { verifyPassword } from '../../service/verifyPassword'

interface FormData {
  email: string
  password: string
}

interface Props {
  formData: FormData
}

export const FormMessage: React.FC<Props> = ({ formData }) => {
  const validatedForm = verifyEmail(formData.email) && verifyPassword(formData.password) > 2

  return (
    <p
      style={{ display: validatedForm ? 'block' : 'none' }}
      className='credentials__form-message'
    >
      {
        validatedForm && (
          <span>Crendeciales correcta</span>
        )
      }
    </p>
  )
}
