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
            Mensaje:'Gracias por Registrarse',
            ocultarMensaje:true,
        })
    }
    
    
   


render(){
   
   
   
    if(this.state.ocultarMensaje){
        return(
        <p>Gracias por registrarte</p>
        )
        
    }else{
        return(
            <>
            <form className='formulario'>
                <label>Nombre
                    <input type='Text'/>
                </label>
                <label>Apellido
                    <input type='Text'/>
                </label>
                <label>Correo
                    <input type='e-mail'/>
                </label>
                <label>Telefono
                    <input type='number'/>
                </label>
                <label>Contraseña
                    <input type='password'/>
                </label>
                <label>Confirmar Contraseña
                    <input type='password'/>
                </label>
                <p>{this.state.Mensaje}</p>
                
            </form>
            <label><button onClick={this.cambiarMensaje}>Enviar</button></label>
            <p>{this.state.Mensaje}</p> 
            
    
            
            </>

    
   
    )

}}}

export default Formulario;