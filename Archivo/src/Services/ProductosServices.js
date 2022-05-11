
import axios from "../Config/Axios"

export async function getAllProductos(buscar){
    return axios.get('sites/MLA/search?q='+buscar)
}
export async function getByIdProductos(id){
    return axios.get('/items/'+id)
}