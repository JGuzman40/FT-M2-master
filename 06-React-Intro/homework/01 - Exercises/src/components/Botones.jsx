import React from "react";

// export default function Botones(props){
//     return (
//         <div>
//             <button onClick={() => alert('Aprobado')}>Módulo 1</button>
//             <button onClick={() => alert('En curso')}>Módulo 2</button>
//         </div>
//     )
// }

class Botones extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => alert('Aprobado')}>Módulo 1</button>
                <button onClick={() => alert('En curso')}>Módulo 2</button>
            </div>
        );
    }
}

export default Botones;