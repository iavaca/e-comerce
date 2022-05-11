import { useParams } from 'react-router-dom'
import { getByIdProductos } from '../Services/ProductosServices'
import Producto from '../Components/Producto'
import React, {useState,useEffect } from 'react'
import { Card, Button, Col } from 'react-bootstrap'





function Detalle() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const [imagene, setImagene] = useState()
    const {id} = useParams()
    const [mensaje,setMensaje]= useState('')
    
    console.log('id',id)

    const styles ={
        img:{
            width:'100px',
            height:'100px',
            border:' black 1px solid'
        }
    }
    
    
    
    useEffect(
        

        ()=>{
            const request = async ()=>{
                try{
                    setLoading(true)
                    const response = await getByIdProductos(id)
                    console.log('rresponse',response)
                    
                   
                    setProducto(response)
                    console.log('ga',producto)
                    setImagene(producto.pictures)
                    console.log('ppp',imagene)
                    
                    
                   setLoading(false)
                }catch(e){
                    console.log(e)
                   setLoading(false)
                }
              
                
               
                
            }
            request()

        },[id]
        )
        
    const ConfirmarCompra =()=>{
        setMensaje('Gracias por su compra')
    }

    if (loading) {
        return (
            <>
            <div>Cargando..</div>
            <p>Nombre{producto.nombre}</p>
            </>)
    } else {
        return (
            <div>
                <p>Nombre: {producto.data().nombre}</p>
                <p>Precio: {producto.data().precio}</p>
                <p>Descripcion: {producto.data().descripcion}</p>
             
                 <div><Col>{false && producto.pictures.map(fotos=><img src={fotos.url} style={styles.img} />)}</Col>
                 <p>{mensaje}</p>
                 <button onClick={ConfirmarCompra}>Comprar</button>
               
             
                 </div>
                
                
                 
                 
               
                 

           
              
               </div>
              
    
    
        )

    }



    
}
export default Detalle
