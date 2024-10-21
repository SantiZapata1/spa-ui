import axios from './axios'

export const setUserAdmin = async (nombre_de_usuario: string) => {
    return await axios.put(`/set-admin/${nombre_de_usuario}`);
}

export const removeAdmin = async (id: string) => {
    return await axios.put(`/remove-admin/${id}`);
}

export const getAdmins = async () => {
    try {
        const { data } = await axios.get('/admins');
        return data;
    } catch(error){
        console.log(error)
    }
}

export const buscarUsuarios = async (values: any) => {
    try {
        const { data } = await axios.get(`/buscar-usuario/${values.nombre_de_usuario ? values.nombre_de_usuario : "no_ingresado"}/${values.rol ? values.rol : "no_ingresado"}`);
        return data;
    } catch(error){
        console.log(error)
    }
}

export const getUsuarioPorId = async (id: string) => {
    try {
        const { data } = await axios.get(`/obtener-usuario/${id}`);
        return data;
    } catch(error){
        console.log(error)
    }
}


export const cambiarRol = async (values: any) => {

    const { data } = await axios.put(`/cambiar-rol/${values._id}`, values);
    return data;

}

export const getProfesionales = async () => {
    try {
        const { data } = await axios.get('/obtener-profesionales');
        return data;
    } catch(error){
        console.log(error)
    }
}
