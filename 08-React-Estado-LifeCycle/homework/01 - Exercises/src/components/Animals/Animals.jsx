import React from 'react';
import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styledAnimals.container}>
        {this.props.animals.map((animal, index) => (
          <div className={styledAnimals.containerAnimals} key={index}>
            <h5>{animal.name}</h5>
            <img
              src={animal.image}
              alt={animal.name}
              style={{width:"300px", height:"300px"}}
            />
            <span>{animal.specie}</span>
          </div>
        ))}
      </div>
    );
  }
}
