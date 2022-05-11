import React, {Component} from "react";
import Productos from "../Components/Productos";
import firebase from "../Config/Firebase";
function Home(){
    console.log('firebase',firebase)
    return(
        <>
        <div>
            
            <Productos />
            </div></>
    )
}
    
      
    

export default Home;
