import { connect } from 'react-redux';
import React from 'react';
import './products.css';
import Card from '../Card/Card'
import { getStoreName } from '../../redux/actions/actions';

export function Products({list, storeName, getStoreName}) {

React.useEffect (()=>{
   getStoreName()
}, [getStoreName]) 

   return (
      <>
         <div className='productsBg'>
            <h1 className='productsTl'>{storeName}</h1>

            <div className='productsList'>
               {/* ¡Renderiza aquí todas tus cards! */}
               {list?.map((product)=>(
               <Card
                  name={product.name}
                  price={product.price}
                  id={product.id}
                  key={product.id}
               />
               ))}
            </div>
         </div>
      </>
   );
}

export function mapStateToProps(state) {
   return {
      list: state.list,
      storeName: state.storeName,
      }
}

export function mapDispatchToProps(dispatch) {
   return {
      getStoreName: ()=>dispatch(getStoreName()),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
