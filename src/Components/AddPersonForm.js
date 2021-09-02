import React, {useState} from "react"

function AddPersonForm(props) {
  const [person, setPerson] = useState('')
  
  const handleChange = (e) => {
    setPerson(e.target.value)
  } 

  const handleSubmit = (e) => {
    // 
    if(person === '') {
      alert('Contact name missing!')
    }
    else {
      // 
      props.handleSubmit(person)
      setPerson('')
      e.preventDefault()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddPersonForm