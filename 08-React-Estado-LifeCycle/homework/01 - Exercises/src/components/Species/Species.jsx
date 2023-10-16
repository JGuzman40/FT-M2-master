import React from "react";
import styledSpecies from "./Species.module.css";

function Species(props) {
  return (
    
    <div className={styledSpecies.divContent}>

      <h2 className={styledSpecies.speciesTitle}>Species</h2>
      <div className={styledSpecies.buttonContainer}>
      {props.species.map((specie, index) => (
        <button
          className={styledSpecies.button}
          key={index}
          onClick={() => props.handleSpecies(specie)}
          value={specie}
        >
        {specie}  
        </button>
      ))}
      </div>
      <button 
      className={styledSpecies.divContent + " " + styledSpecies.button} 
      onClick={props.handleAllSpecies}>
        All Animals
      </button>
  </div>
  )
}

export default Species;