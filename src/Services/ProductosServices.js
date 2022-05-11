
import { get } from "react-hook-form"
import axios from "../Config/Axios"
import firebase from "../Config/Firebase"

export async function getAllProductos(buscar){
    ///return axios.get('sites/MLA/search?q='+buscar)
    const querySnapshot = await firebase.firestore().collection('productos')
    .get()
    
    return querySnapshot.docs
    
}
export async function getByIdProductos(id){
    ///return axios.get('/items/'+id)
    return await firebase.firestore().doc('productos/'+id).get()
 
   
    
   
}
export async function update(id,data){
 
    return await firebase.firestore().doc('productos/'+id).set(data)
 
}

