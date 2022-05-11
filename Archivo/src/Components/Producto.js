import React,{useState} from "react"
import {Link} from 'react-router-dom'

function Producto(props){
 
    const {Datos} = props
    const mostrarproductosCantidad=Datos.order_backend
    const cantidadProductos = props.cantidadproductos;
    
  

    const styles ={
        img:{
            width:'100px',
            border:' 10px solid',
            margin:'20px'
        }
    }

   
   
    if (mostrarproductosCantidad<=cantidadProductos) {
        return(
            <><div>
                
                <img src={props.Datos.thumbnail} style={styles.img}></img>
                
            <p>{Datos.Nombre}</p>
                <p>{Datos.title}</p>
                <p>${Datos.price}</p>
               
                
                
                <Link to={'/producto/'+Datos.id}>detalle</Link>
                
               
                </div> </>
    
        )
                
    }
    
   
}
export default Producto
