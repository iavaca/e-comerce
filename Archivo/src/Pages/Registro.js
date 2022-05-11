import React,{ Component } from 'react';

class Formulario extends Component{

    constructor() {
        super()
        this.state = {
            
         Mensaje:'',
         ocultarMensaje:false
            
        }
    }
    cambiarMensaje =()=>{
        this.setState({
            Mensaje:'Bienvenido',
            ocultarMensaje:true,
        })
    }
    


render(){
    if(this.state.ocultarMensaje){
        return(
        <p>Bienvenido</p>
        )
        
    }else{
    return(
        <>
        <form className='formulario'>
           
            <label>Correo
                <input type='e-mail'/>
            </label>
            
            <label>Contraseña
                <input type='password'/>
            
            
            </label>
           
            
        </form>
        <label><button onClick={this.cambiarMensaje}>Enviar</button></label>
        
        </>
    )
}}
}

export default Formulario;