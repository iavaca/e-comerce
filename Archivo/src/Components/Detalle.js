import { useParams } from 'react-router-dom'
import { getByIdProductos } from '../Services/ProductosServices'
import Producto from '../Components/Producto'
import React, {useState,useEffect } from 'react'




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
                    console.log('response',response.data.pictures)
                    
                    console.log('gato',producto)
                    setProducto(response.data)
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
            <div>Cargando..</div>)
    } else {
        return (
            <div>
                <p>Nombre{producto.title}</p>
                 <p>{producto.condition}</p>
                 <p>${producto.price}</p>
                 <div>{producto.pictures.map(fotos=><img src={fotos.url} style={styles.img} />)}
                 <p>{mensaje}</p>
                 <button onClick={ConfirmarCompra}>Comprar</button>
               
             
                 </div>
                
                
                 
                 
               
                 

           
              
               </div>
              
    
    
        )

    }



    
}
export default Detalle
