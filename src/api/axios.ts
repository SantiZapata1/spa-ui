// Importamos axios
import axios from 'axios'
// Obtenemos la URL base de las variables de entorno
// const baseUrl = process.env.BASE_URL
const baseUrl = "http://localhost:4000/api"
console.log(baseUrl)
// Creamos una instancia de axios con la URL base
const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true
})
// Exportamos la instancia
export default instance