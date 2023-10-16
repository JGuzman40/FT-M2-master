import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import styledZoo from './Zoo.module.css';

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: [],
  });

  const handleInputChange = (event) => {
    setZoo({
      ...zoo,
      zooName: event.target.value,
    });
  };

  const handleSpecies = (specie) => {
    const speciesFiltered = zoo.allAnimals.filter(animal => animal.specie === specie);
    setZoo(prevZoo => ({
      ...prevZoo,
      animals: speciesFiltered,
    }));
  };

  const handleAllSpecies = () => {
    setZoo(prevZoo => ({
      ...prevZoo,
      animals: prevZoo.allAnimals
    }));
  };

  React.useEffect(() => {
    fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) => {
        setZoo(prevZoo => ({
          ...prevZoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        }))
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styledZoo.divContent}>
      <div className={styledZoo.divContentTitle}>
      <label className={styledZoo.title}>Zoo Name: </label>
      <input 
        className={styledZoo.input}
        type='text' 
        value={zoo.zooName} 
        onChange={handleInputChange} 
      />
      <h1 className={styledZoo.title}>{zoo.zooName}</h1>
      </div>
      <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies}/>
      <Animals animals={zoo.animals}/>
    </div>
  );
}
