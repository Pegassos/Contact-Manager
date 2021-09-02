import React from 'react'

const PeopleList = (props) => {
  const {contacts, deletePerson} = props

  let listItems = <h5>Add contacts to the list</h5>

  if(contacts.length) {
    listItems = contacts.map((val, index) => {
      return (
        <div key={index} className="contact">
          <div>
            <h5>{val}</h5>
          </div>
          <div>
            <button onClick={() => deletePerson(index)} >x</button>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="contacts-list">
      {listItems}
    </div>
  )

}

export default PeopleList