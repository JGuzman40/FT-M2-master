const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento, impar, async } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.querySelector('#valor');

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  let count = store.getState().contador;
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML = count;
}

// Ejecutamos la función 'renderContador':
renderContador();

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador);

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:

let btnIncre = document.querySelector('#incremento');
btnIncre.onclick = () => store.dispatch(incremento())

let btnDecre = document.querySelector('#decremento');
btnDecre.onclick = () => store.dispatch(decremento())

let btnImpar = document.querySelector('#incrementoImpar');
btnImpar.onclick = () => store.dispatch(impar())

let btnAsync = document.querySelector('#incrementoAsync');
btnAsync.onclick = () => setTimeout(() => {
  store.dispatch(async())
}, 1000)



{/* <button id="incremento">+</button>
<button id="decremento">-</button>
<button id="incrementoImpar">Incremento impar</button>
<button id="incrementoAsync">Incremento async</button> */}
