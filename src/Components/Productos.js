import React, { useState, useEffect } from "react";
import Producto from "./Producto";
import Input from "./Input";
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { getAllProductos } from "../Services/ProductosServices"



function Productos() {

    const [ListadoProductos, setListadoProductos] = useState([])
    const [buscador, setBuscador] = useState('')
    const [response, setResponse] = useState({})
    const [loading, setLoading] = useState(false)
    const [buscar, setBuscar] = useState('cama')
    const [mostrarproductos, setMostrarProductos] = useState(6)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [datos, setdata] = useState({})
  


    const onSubmit = (data) => {
       
    
        ///enviar datos a firebase
        console.log('from', data);
        
       setdata(data)
    
       if(data.buscar===''){
           setMostrarProductos(0)

       }else{
        
        setMostrarProductos(6)
        setBuscar(data.buscar)

       }
    
    }



{/** 
    const Buscador = (busqueda) => {
        setBuscar(busqueda)
        setListadoProductos(6)
        setBuscar(busqueda)
        if (buscar == '') {
            setMostrarProductos(5)
            setBuscar(busqueda)

        }
    

    }*/}
    useEffect(() => {
        const request = async () => {
            try {
                setLoading(true)
                const response = await getAllProductos(buscar)


                setListadoProductos(response)
                setResponse(response)
                setLoading(false)
                setResponse(response)
                console.log('response',response)
            } catch (e) {

            }

        }
        request()

    },
        [buscar]
    )


    ///acaseteamos motorola en  el busqueda
    const filtrar = () => {
        setBuscar('motorola')
        if (buscar == '') {
           /// setMostrarProductos(6)
            setBuscar('motorola')

        }


    }
 

    ///aca reseteamos
    const reset = () => {
        setBuscar('')
    ///    setMostrarProductos(0)
        if (buscar === '') {

        }
    }
    const mostrarProductos = () => {

        const productos = mostrarproductos
        const mostrarProductos = 6 + productos
        setMostrarProductos(mostrarProductos)
        if (mostrarproductos == 0) {
          ///  setMostrarProductos(5)
            setBuscar('ipod')
        }

    }
    const enter=(e)=>{
        console.log('metodo',e.keyCode)
        

    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          console.log('enter press here! ')
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
                    <h1>Listado de Productos</h1>
                    <Button onClick={filtrar}>filtrar</Button>
                    <Button onClick={reset}>Reset</Button>
                    

                    <Form onSubmit={handleSubmit(onSubmit)} >
                        <Input type='text' register={{ ...register('buscar') }} onKeyPress={handleKeyPress}  />
                        
                        <Button variant="primary"   type="submit"> buscar</Button>
                      
                    </Form>
                    
                    <h3>Cantidad de productos en pantalla {mostrarproductos}</h3>
                    <Row>
                        {ListadoProductos.map(listadoProducto => <Producto Datos={listadoProducto.data()} id={listadoProducto.id} />)}
                    </Row>

                    <Button variant="primary" onClick={mostrarProductos}>ver mas</Button>




                </div>
            </>

        )

    }



}
export default Productos;