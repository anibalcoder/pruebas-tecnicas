import { useRef } from 'react'
import styles from '../styles/phone-book-form.module.css'
import type { Contact } from '../App'

interface Props {
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>
}

const formFields = [
  {
    id: 'first-name',
    name: 'first-name',
    label: 'Nombres',
    placeholder: 'Coder',
    type: 'text',
  },
  {
    id: 'last-name',
    name: 'last-name',
    label: 'Apellidos',
    placeholder: 'Byte',
    type: 'text',
  },
  {
    id: 'phone',
    name: 'phone',
    label: 'Teléfono',
    placeholder: '8885559999',
    type: 'tel',
  },
]

export const PhoneBookForm = ({ setContacts }: Props) => {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault()

    const form = new FormData(formRef.current!)
    const firstName = form.get('first-name') as string
    const lastName = form.get('last-name') as string
    const phone = form.get('phone') as string

    setContacts(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        firstName,
        lastName,
        phone
      }
    ])

    formRef.current?.reset()
  }

  return (
    <form
      onSubmit={ handleSubmitForm }
      ref={ formRef }
      className={ styles.root }
    >
      {
        formFields.map(({
          id,
          label,
          name,
          placeholder,
          type
        }) => (
          <div className={ styles.containerInput } key={ id }>
            <label htmlFor='first-name'>{ label }:</label>
            <input
              type={ type }
              id={ id }
              name={ name }
              placeholder={ placeholder }
              required
            />
          </div>
        ))
      }

      <button type='submit'>
        Agregar usuario
      </button>
    </form>
  )
}
