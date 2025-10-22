import type { Contact } from '../App'
import styles from '../styles/phone-book-table.module.css'

interface Props {
  contacts: Contact[]
}

export const PhoneBookTable = ({ contacts }: Props) => {
  const sortedContacts = contacts.sort((a, b) => a.lastName.localeCompare(b.lastName))

  return (
    <table className={ styles.root }>
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {
          sortedContacts.map(({ id, firstName, lastName, phone }) => (
            <tr key={ id }>
              <td>{ firstName }</td>
              <td>{ lastName }</td>
              <td>{ phone }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
