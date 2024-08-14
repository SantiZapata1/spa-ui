import axios from './axios'

// Definimos las funciones que consumen los endpoints
export const registerRequest = (user: any) => axios.post(`/register`, user)
