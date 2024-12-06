import { useState } from 'react'
import { FormMessage } from './validationMessages/Form'
import { EmailMessage } from './validationMessages/Email'
import { PasswordStrength } from './PasswordStrength'

export function PageCheckLogin (): JSX.Element {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [typePassword, setTypePassword] = useState(true)

  const handleChangeFormData = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target

    if (name === 'email') setFormData({ ...formData, email: value })
    if (name === 'pwd') setFormData({ ...formData, password: value })
  }

  return (
    <section className='credentials'>
      <FormMessage formData={formData} />

      <h1 className='credentials__title'>Validar Credenciales</h1>

      <form className='credentials__form'>
        <section className='credentials__form-group'>
          <input
            onChange={handleChangeFormData}
            className='credentials__input'
            type='email'
            name='email'
            value={formData.email}
            placeholder='Correo Eléctronico'
          />
          <EmailMessage email={formData.email} />

          <input
            onChange={handleChangeFormData}
            className='credentials__input'
            type={typePassword ? 'password' : 'text'}
            name='pwd'
            value={formData.password}
            placeholder='Contraseña'
          />
          <PasswordStrength password={formData.password} />
        </section>

        <section className='credentials__form-group'>
          <button
            onClick={() => setTypePassword(!typePassword)}
            className='credentials__button credentials__button--toggle-password'
            type='button'
          >
            Mostrar Contraseña
          </button>

          <button
            onClick={() => setFormData({ email: '', password: '' })}
            className='credentials__button credentials__button--clear'
            type='button'
          >
            Limpiar
          </button>
        </section>
      </form>
    </section>
  )
}
