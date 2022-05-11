
import React,{useState,useEffect} from 'react';

import {useForm} from 'react-hook-form';
import Input from '../Components/Input';
import {Button, Form} from 'react-bootstrap'
import firebase from '../Config/Firebase';
import {useParams} from 'react-router-dom'
import { getByIdProductos,update } from '../Services/ProductosServices';


function ProductosModificar (){
    const {id} = useParams()
    const [mensaje,setMensaje]=useState('')
    const [ocultarMensaje,setOcultarmensaje]=useState(false)
   
    const { register, handleSubmit,setValue, formState: { errors } } = useForm();
    const [datos,setdata]=useState({})
    useEffect(
        ()=>{
            const request = async ()=>{
                try {
                    const response = await getByIdProductos(id)
                    console.log('response',response)

                    ////seteamos el valor del imput para traer los valores desde la id 
                    setValue('nombre',response.data().nombre)
                    setValue('precio',response.data().precio)
                    setValue('descripcion',response.data().descripcion)
                    setValue('sku',response.data().sku)
                    
                 
                    
                } catch (error) {
                    console.log(error)
                    
                }
            }
            request()
        },
        [id,setValue]
    )


  
    const handleDelate=async()=>{
        const document = await firebase.firestore().doc('productos/'+id)
        .delete()
        console.log('document',document)
    }
   
            
     
    const cambiarMensaje =(nombre)=>{
       setMensaje('Producto '+nombre+' cargado con exito')
          
        setOcultarmensaje(true)
        }

    const onSubmit= async(data)=>{
        console.log('from',data.nombre);
        setdata(data)
        cambiarMensaje(data.nombre)
        
        ///creamos un nuevo producto utilizando firebase///
      
        try {
            const document = await update(id,data)
            console.log(document)
            if(update){
                
                
            }
               
               
               
           
        } catch (error) {
            console.log(error)
        }
        
    }
   
    if(ocultarMensaje){
        return(
        <p>{mensaje}</p>
        )
        
    }else{
        return(
        <div>
             <Button  onClick={handleDelate} variant="primary">borrar</Button>
        <Form className='formulario' onSubmit={handleSubmit(onSubmit)}>
           
            <Input label='Nombre' placeholder='Nombre' register={{...register('nombre',{required:true})}}/>
            {errors.nombre && <span>El campo nombre es obligatorio</span> }

            <Input label='Precio' placeholder='Precio'  type='number' register={{...register('precio',{required:true})}}/>
            {errors.precio && <span>El campo precio es obligatorio</span> }

            <Input label='Descripcion' placeholder='Descripcion'  register={{...register('descripcion',{required:true})}}/>
            {errors.descripcion && <span>El campo descripcion es obligatorio</span> }



            <Input label='Sku' placeholder='Sku'  register={{...register('sku',{required:true})}}/>
            {errors.sku && <span>El campo sku es obligatorio</span> }

            
       
            
            
            
            
            
           
           
            <Button  type="submit" variant="primary">Guardar</Button>

        </Form>
        
        </div>

           
   
        )
        }}

export default ProductosModificar;



