import React from 'react'
import { useState } from 'react';


const Form = (props) => {

  const [inputData, setInputData] = useState({
      name: "",
      type: "",
      interesting:0
  })


  function handleSubmit (e) {
    e.preventDefault()
    props.setCurrentSports([...props.currentSports, inputData])
  }

  function handleChange(e) {
    setInputData({...inputData, [e.target.id]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
        <input type="text" value={inputData.name} id="name" placeholder="name" />
        <input type="text" value={inputData.type} id="type" placeholder="type"/>
        <input value={inputData.interesting} id="interesting"  type="number" placeholder="interesting"/>
        <button>Submit</button>
    </form>
  )
}

export default Form