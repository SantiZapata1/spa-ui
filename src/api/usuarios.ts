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