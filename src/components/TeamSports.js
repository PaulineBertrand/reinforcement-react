import React from "react";

const TeamSports = ({ sports, currentSports, setCurrentSports }) => {


  function handleClick(index) {
    const copy = [...currentSports]
    copy.splice(index, 1)
    setCurrentSports(copy)
  }

  return (
    
    <ul>
      {
        currentSports.map((sport, index) => (
          <li key={sport.name}>
            <span>{sport.name} is a {sport.type} sport played with {sport.equipment}</span>
            {
              sport.isCollective && <span> 👩‍👩‍👦‍👦</span>
            }
            <button onClick={() => handleClick(index)} id={sport.name}>Delete</button>
          </li>
        ))
      }

    </ul>
  );
};

export default TeamSports;
