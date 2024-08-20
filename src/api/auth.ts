import axios from './axios'

// Definimos las funciones que consumen los endpoints
export const registerRequest = (user: any) => axios.post(`/register`, user)

// Función para iniciar sesión
export const loginRequest = (user: any) => axios.post(`/login`, user, { withCredentials: true });

// Función para cerrar sesión
export const logoutRequest = () => axios.post(`/logout`)

// Función para verificar el token
// @ts-ignore
export const verifyToken = (token: string) => axios.get(`/verify`)

// Función para editar un usuario
export const editUser = (user: any) => axios.put(`/editar-usuario/${user.id}`, user)