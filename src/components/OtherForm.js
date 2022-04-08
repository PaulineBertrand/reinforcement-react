import React from 'react'
import { useState } from 'react';


const Form = (props) => {

    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [interesting, setInteresting] = useState(0)

  function handleSubmit (e) {
    e.preventDefault()
    const newSport = {
        name,
        type,
        interesting
    }
    props.setCurrentSports([...props.currentSports, newSport])
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="name" />
        <input type="text" value={type} onChange={(e) => {setType(e.target.value)}} placeholder="type"/>
        <input value={interesting} onChange={(e) => {setInteresting(e.target.value)}} type="number" placeholder="interesting"/>
        <button>Submit</button>
    </form>
  )
}

export default Form