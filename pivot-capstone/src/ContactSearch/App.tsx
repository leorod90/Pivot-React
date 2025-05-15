import React, { useState } from 'react'
import "./App.css"

function RenderPerson(props) {
  return (
    <div style={{
      margin: 5,
      border: "red 1px solid"
    }}>
      <p>{props.name} - {props.email}</p>
      <button
        style={{
          backgroundColor: "green"
        }}
        onClick={props.deleteHandler}>Remove</button>
    </div>
  )
}

const initialContacts = [
  {
    id: 0,
    name: "Leo",
    email: "leo@test.com",
  },
  {
    id: 1,
    name: "Jess",
    email: "school1@test.com"
  },
  {
    id: 2,
    name: "Raymond",
    email: "school1@test.com"
  },
]

export default function App() {
  const [searchTxt, setSearchTxt] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contacts, setContacts] = useState(initialContacts);

  const sortHandler = () => {
    // a.sort((x, y) => x.s.localeCompare(y.s));
    const copyContacts = [...contacts]
    copyContacts.sort((x, y) => x.name.localeCompare(y.name));
    setContacts(copyContacts);
  }

  const addHandler = () => {
    if (name === "" || email === "") {
      return
    }
    // old [0,1,2]
    // new [0,1,2,3]

    setContacts([...contacts, {
      id: Math.random(),
      name: name,
      email: email,
    }]);
    setName("");
    setEmail("");
  }

  const deleteHandler = (id) => {
    // let up = a.filter(a => a.id !== 2);
    const up = contacts.filter(a => a.id !== id);
    setContacts(up);
  }

  const searchHandler = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className='container'>
      <h2>Contact Search</h2>
      {/* SEARCH BAR SECTION */}
      <input
        placeholder='search'
        type="text"
        value={searchTxt}
        onChange={searchHandler}
      // onChange={(event) => setSearchTxt(event.target.value)}
      />
      <button className="btn" onClick={sortHandler}>Sort A-Z</button>
      {/* ADD INFO SECTION */}
      <label>Enter a name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Enter a email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button className="btn" onClick={addHandler}>Add</button>
      {/* SHOW DATA */}
      {contacts.map((person, index) => <RenderPerson
        key={person.id}
        name={person.name}
        email={person.email}
        deleteHandler={() => deleteHandler(person.id)}
      />)}
    </div>
  )
}
