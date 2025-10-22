import { useState } from 'react';
import './App.css'
import { PhoneBookForm } from './components/PhoneBookForm'
import { PhoneBookTable } from './components/PhoneBookTable';

export interface Contact {
  id: string
  firstName: string
  lastName: string
  phone: string
}

function App () {
  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <>
      <PhoneBookForm setContacts={ setContacts } />
      <PhoneBookTable contacts={ contacts } />
    </>
  );
}

export default App
