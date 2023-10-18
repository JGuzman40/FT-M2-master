import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, incrementIfOdd, incrementAsync } from "../actions";
import styles from "./Counter.module.css";

class Counter extends Component {

  incrementIfOdd = () => {
    if (this.props.count % 2 !== 0) {
      this.props.increment();
    }
  };
  
  incrementAsync = () => {
    setTimeout(()=> {
      this.props.increment();
    }, 1000);
  };

  render() {
    const { count, increment, decrement, incrementIfOdd, incrementAsync } = this.props;
    return (
      <div className={styles.container}>

        <div className={styles.title}>
          How React-Redux works
        </div>

        <div className={styles.contButtons}>

          <div className={styles.inccountdec}>
            <button className={styles.button} onClick={increment}>
              ⬆
            </button>
          
            <button className={styles.button}>
              {count}
            </button>
       
            <button className={styles.button} onClick={decrement}>
              ⬇ 
            </button>
            </div>
      
        </div>

        <div className={styles.otrosBotones}>

          <button className={styles.oBoton} onClick={incrementIfOdd}>
            Impar ⬆
          </button>

          <button className={styles.oBoton} onClick={incrementAsync}>
            Un sec ⬆
          </button>

        </div>

        <span className={styles.jesu}>JGuzman40...</span>

      </div>
    );
  }
}

// La función mapStateToProps especifica qué porción del árbol de estados necesita recibir este componente.
// En este caso, dado que nuestro store de redux sólo almacena el valor del contador,
// este componente recibe el estado completo.
// Sin embargo, en una aplicación redux más compleja,
// recibiría sólo las partes relevantes que necesita del objeto de estado.
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

// Se llama a la función de connect para que este componente conozca el resto de la arquitectura de redux.
// Sin esto, este componente es sólo un componente tonto de React.
//Pasamos todas las funciones que dependen de Redux, junto con el propio componente,
// para que Redux se dé a conocer a este componente.
export default connect(mapStateToProps, { increment, decrement, incrementIfOdd, incrementAsync })(Counter);
