import React, { useState } from 'react'
import AddPersonForm from './AddPersonForm'
import PeopleList from './PeopleList'

const ContactManager = (props) => {
  const [contacts, setContacts] = useState(props.data)

  const addPerson = (name) => {
    setContacts( [...contacts, name] )
  }

  const deletePerson = (index) => {
    let newContacts = [...contacts]
    newContacts.splice(index,1)
    setContacts(newContacts)
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList contacts={contacts} deletePerson={deletePerson} />
    </div>
  )
}

export default ContactManager
