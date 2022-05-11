
import React,{useState} from 'react';

import {useForm} from 'react-hook-form';
import Input from '../Components/Input';
import {Button, Form} from 'react-bootstrap'
import firebase from '../Config/Firebase';


function ProductosAlta (){
    const [mensaje,setMensaje]=useState('')
    const [ocultarMensaje,setOcultarmensaje]=useState(false)
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [datos,setdata]=useState({})
  

   
            
     
    const cambiarMensaje =(nombre)=>{
       setMensaje('Producto '+nombre+' cargado con exito')
          
        setOcultarmensaje(true)
        }

    const onSubmit= async(data)=>{
        console.log('from',data);
        setdata(data)
        ///creamos un nuevo producto utilizando firebase///
      
        try {
            const document =await firebase.firestore().collection('productos')
           
               .add({
                   nombre:data.nombre,
                   precio:data.precio,
                   descripcion:data.descripcion,
                   sku:data.sku
                   
               })
               cambiarMensaje(data.nombre)
               console.log('document',document)

           
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
        <Form className='formulario' onSubmit={handleSubmit(onSubmit)}>
           
            <Input label='Nombre' placeholder='Nombre' register={{...register('nombre',{required:true})}}/>
            {errors.nombre && <span>El campo nombre es obligatorio</span> }

            <Input label='Precio' placeholder='Precio'  type='number' register={{...register('precio',{required:true})}}/>
            {errors.precio && <span>El campo precio es obligatorio</span> }

            <Input label='Descripcion' placeholder='Descripcion'  register={{...register('descripcion',{required:true})}}/>
            {errors.descripcion && <span>El campo descripcion es obligatorio</span> }



            <Input label='Sku' placeholder='Sku'  register={{...register('sku',{required:true})}}/>
            {errors.sku && <span>El campo sku es obligatorio</span> }

            
       
            
            
            
            
            
           
           
            <Button  type="submit" variant="primary">Cargar</Button>

        </Form>
        
        </div>

           
   
        )
        }}

export default ProductosAlta;



