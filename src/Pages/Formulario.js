
import React,{useState} from 'react';

import {useForm} from 'react-hook-form';
import Input from '../Components/Input';
import {Button, Form} from 'react-bootstrap'
import firebase from '../Config/Firebase';


function Formulario (){
    const [mensaje,setMensaje]=useState('')
    const [ocultarMensaje,setOcultarmensaje]=useState(false)
   /// (react) const [form,setForm]=useState({nombre:'',apellido:'',correo:'', telefono:'',password:'',password2:''})
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [datos,setdata]=useState({})
  

   
            
     
    const cambiarMensaje =(nombre)=>{
       setMensaje('Gracias '+nombre+' por Registrarte')
          
        setOcultarmensaje(true)
        }

    const onSubmit= async(data)=>{
        console.log('from',data);
        setdata(data)
        ///aca creamos un nuevo usuario utilizando firebase///
      
        try {
            const responseUsser = await firebase.auth().createUserWithEmailAndPassword(data.correo,data.contrasena)
            console.log('responseUsser',responseUsser)
          ///aca guardamos nuestros documentos en la bd 
            if(responseUsser.additionalUserInfo.isNewUser){
               firebase.firestore().collection('usuarios')
               .add({
                   nombre:data.nombre,
                   apellido:data.apellido,
                   id:responseUsser.user.uid
               })
               cambiarMensaje(data.nombre)

           }
        } catch (error) {
            console.log(error)
        }
        
        ///enviar datos a firebase
        
      
        console.log(datos)
       
       
    }
    {/*const handleChange=(event)=>{
        const value = event.target.value
        const name = event.target.name

       
            setForm({...form,[name]:value})
        
            
        
    */}
    
    

   



   
   
   
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

            <Input label='apellido' placeholder='Apellido'  register={{...register('apellido',{required:true})}}/>
            {errors.apellido && <span>El campo apellido es obligatorio</span> }

            <Input label='Telefono' placeholder='Telefono'  register={{...register('telefono',{required:true})}}/>
            {errors.telefono && <span>El campo telefono es obligatorio</span> }
           
           <Input label='Correo' placeholder='E-mail'  register={{...register('correo',{required:true})}}/>
            {errors.correo && <span>El campo Correo es obligatorio</span> }

            <Input label='Contraseña' placeholder='Contraseña'  type="password"register={{...register('contrasena',{required:true})}}/>
            {errors.contrasena && <span>El campo contraseña es obligatorio</span> }

            <Input label='Repetir contraseña'placeholder='Repetir contraseña'  type="password"register={{...register('contrasena2',{required:true})}}/>
            {errors.contrasena2 && <span>El campo contraseña es obligatorio</span> }
       
            
            
            
            
            
           
           
            <Button  type="submit" variant="primary">Cargar</Button>

        </Form>
        
        </div>

           
   
        )
        }}


export default Formulario;



///implementacion de formularios con react sin form //\\ siempre utilizando el componente imput
 {/*  <>
          
            <form className='formulario' onSubmit={handleSubmit}>
            <Input label='Nombre' name='nombre' change={handleChange}/>
            <Input label='Apellido' name='apellido' change={handleChange}/>
            <Input label='Correo' type='e-mail' name='correo' change={handleChange}/>
            <Input label='Telefono' name='telefono' type="number"change={handleChange}/>
            <Input label='Contraseña' name='password' type='password 'change={handleChange}/>
            <Input label='Confirmar Contraseña' name='password2' type='password' change={handleChange}/>
        
                <p>{mensaje}</p>
                <label><button type="submit">Enviar</button></label>
                
            </form>
            
            <p>{mensaje}</p> 
            
    
            
        </>*/}