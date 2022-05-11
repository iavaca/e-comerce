import React, { useState } from 'react';

import {Form,Button} from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import Input from '../Components/Input';
import firebase from '../Config/Firebase'

function Registro() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [datos, setdata] = useState({})
    const [mensaje, setMensaje] = useState()
    const [ocultarmensaje, setOcultarmensaje] = useState()


    const onSubmit = async(data) => {

        ///enviar datos a firebase
        console.log('from', data);
        setdata(data)
        try {
            const responseUsser= await firebase.auth().signInWithEmailAndPassword(data.correo,data.contrasena)
            console.log("response,user",responseUsser)
            if(responseUsser.additionalUserInfo){
                cambiarMensaje(data.correo)
            console.log('ostia')}
        } catch (error) {
             ///cambiarMensaje(data.correo)
            
        }
        
    }




    const cambiarMensaje = (c) => {
        setMensaje('Bienvenido ' + c)
        setOcultarmensaje(true)
        ///cambiarMensaje(data.correo)

    }





    if (ocultarmensaje) {
        return (
            <p>{mensaje}</p>
        )

    } else {
        return (
            <>
                <Form className='formulario' onSubmit={handleSubmit(onSubmit)} >
                    <Input label='Correo' placeholder='Correo' type="e-mail" register={{ ...register('correo', { required: true }) }} />
                    {errors.correo && <span>El campo correo es obligatorio</span>}

                    <Input label='Contraseña' placeholder='Ingrese Contraseña' type="password" register={{ ...register('contrasena', { required: true }) }} />
                    {errors.contrasena && <span>El campo contraseña es obligatorio</span>}

                    <Button type="submit" variant="primary">Enviar</Button>

                </Form>
              
            </>
        )
    }
}

export default Registro;