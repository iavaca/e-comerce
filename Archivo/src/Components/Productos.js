import React, { useState, useEffect } from "react";
import Producto from "./Producto";


import {getAllProductos} from "../Services/ProductosServices"


 

function Productos() {

    const [ListadoProductos, setListadoProductos] = useState([])
    const [titulo, setTitulo] = useState('Listado de productos')
    const [response,setResponse]=useState({})
    const [loading, setLoading] = useState(false)
    const [buscar,setBuscar]= useState('cama')
    const [mostrarproductos,setMostrarProductos]=useState(5)
    
  
  



  


    ///component did mount
    /* useEffect(()=>{
         fetch('https://api.mercadolibre.com/sites/MLA/search?q=%22ipod#json')
         .then(res=>res.json())
         .then(data=>{
             console.log('data',data)
             setListadoProductos(data.results)
             setLoading(false)
         })
         .catch(error=>{
             console.log(error)
         })
     },
     []
         )  */

    useEffect(() => {
        const request = async () => {
            try {
                setLoading(true)
                const response = await getAllProductos(buscar)
               
                
                setListadoProductos(response.data.results)
                setResponse(response.data)
                setLoading(false)
                setResponse(response.data)
            } catch (e) {
                
            } 
            
        }
        request()

    },
     [buscar]
     )


///acaseteamos motorola en  el busqueda
    const filtrar =()=>{
        setBuscar('motorola')
        if(buscar==''){
            setMostrarProductos(5)
            setBuscar('motorola')

        }


    }

///aca reseteamos
    const reset =()=>{
    setBuscar('')
    setMostrarProductos(0)
    if (buscar==='') {
        
    }
}
const mostrarProductos=()=>{
    
    const productos =mostrarproductos
    const mostrarProductos= 5+productos
    setMostrarProductos(mostrarProductos)
    if(mostrarproductos==0){
        setMostrarProductos(5)
        setBuscar('ipod')
    }

}

    if (loading) {
        return (
            <div>Cargando...</div>
        )

    } else {
        return (
            <>
                <div>
                    <button onClick={filtrar}>filtrar</button>
                    <button onClick={reset}>Reset</button>
                    <h1>{titulo}</h1>
                    <h3>Cantidad de productos en pantalla {mostrarproductos}</h3>

                    {ListadoProductos.map(listadoProducto => <Producto Datos={listadoProducto} cantidadproductos={mostrarproductos}/>)}
                    <button onClick={mostrarProductos}>vermas</button>
                    



                </div>
            </>

        )

    }



}
export default Productos;