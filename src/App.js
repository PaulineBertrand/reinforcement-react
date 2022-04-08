import './App.css';
import TeamSports from './components/TeamSports'
import Form from './components/Form'
import OtherForm from './components/OtherForm'

import { useState } from 'react';


function App() {
  const allSports = [
    {
      name: "Ice Hockey",
      type: "icy",
      equipment: ["shoulder pads, ", "puck, ", "stick"],
      isCollective: true,
      interesting: 90
    },
    {
      name: "Escrime",
      type: "duel",
      equipment: ["sword, ", "protective gear, ", "weird masks"],
      isCollective: false,
      interesting: 70
    },
    {
      name: "Soccer",
      type: "field",
      equipment: ["football"],
      isCollective: true,
      interesting: 35
    },
    {
      name: "Judo",
      type: "duel",
      equipment: ["kimono, ", "tatami"],
      isCollective: false,
      interesting: 75
    }
  ]
  const [currentSports, setCurrentSports] = useState(allSports)
  
  return (
    <div className="App">
      <TeamSports sports={allSports} currentSports={currentSports} setCurrentSports={setCurrentSports}/>
      <Form currentSports={currentSports} setCurrentSports={setCurrentSports} />
      <OtherForm currentSports={currentSports} setCurrentSports={setCurrentSports} />
      <Beer />
    </div>
  );
}

export default App;
