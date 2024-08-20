"use client"

// Hooks de React para crear y gestionar contextos, estados y efectos secundarios.
import { createContext, ReactNode, useState, useContext, useEffect } from 'react';

// Funciones de la API para manejar la autenticación
import { logoutRequest, loginRequest, verifyToken, editUser } from '../api/auth'

// Una librería para manejar cookies en el navegador.
import Cookies from 'js-cookie'


type AuthContextType = {
    signUp: (user: any) => Promise<void>; 
    signIn: (user: any) => Promise<void>;
    logOut: () => Promise<void>;
    editProfile: (user: any) => any;
    user: any;
    isAuthenticated: boolean;
    errorsAuth: any;
    isLoading: boolean;
};


// Se crea un contexto llamado AuthContext que se inicializa como undefined y luego es utilizado para compartir el estado y funciones de autenticación en toda la aplicación.
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
// Se definen el uso de childrens dentro de AuthProvider
type AuthProviderProps = {
    children: ReactNode;
};

// Un custom hook que permite acceder al contexto de autenticación desde cualquier componente. Si useAuth se llama fuera de un AuthProvider, lanza un error.
export const useAuth = () => {
    const context = useContext(AuthContext);
    // Si el contexto no existe, se lanza un error
    if (!context) {
        throw new Error('useAuth tiene que ser utilizado con un AuthProvider');
    }
    // Se retorna el contexto
    return context
}



// Se exporta AuthProvider para poder ser utilizado en el resto de la aplicación
export const AuthProvider = ({ children }: AuthProviderProps) => {

    // Se definen los estados de usuario, autenticación, errores y carga
    const [user, setUser] = useState(null)//Almacena los datos del usuario autenticado.
    const [isAuthenticated, setIsAuthenticated] = useState(false)//Indica si el usuario está autenticado.
    const [errorsAuth, setErrors] = useState(null)//Maneja posibles errores relacionados con la autenticación.
    const [isLoading, setIsLoading] = useState(true)// Indica si la autenticación está en proceso de carga.

    
    //Registro
    const signUp = async (user: any) => {
        try {
            // Se establece al usuario en el estado
            setUser(user.data)
            // Se establece la autenticación en true
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
        }
    }

    //Login
    const signIn = async (user: any) => {
        try {
            // Se realiza la petición de login
            const res = await loginRequest(user)
            // Se establece al usuario en el estado
            setUser(res.data);
            // Guarda el token en las cookies
            // Cookies.set('token', res.data.token );            // Se establece la autenticación en true
            setIsAuthenticated(true);
        } catch (error: any) {
            console.log(error)
            setErrors(error.response.data.message);
        }
    }

    // Logout de usuarios
    const logOut = async () => {
        try {
            // Se realiza la petición de logout
            await logoutRequest();
            // Se establece la autenticación en false
            setIsAuthenticated(false);
            // Se establece al usuario en null
            // Cookies.set('token', "" );            // Se establece la autenticación en true
            setUser(null);
        } catch (error) {
            console.log(error)
        }
    }

    // Editar perfil
    const editProfile = async (user: any) => {
        try {
            // Se hace la petición para editar el usuario
            const res = await editUser(user)
            // Se establece al usuario en el estado
            setUser(res.data)
            // Se retorna la respuesta de la petición
            return res
        } catch (error) {
            console.log(error)
        }
    }

    // Un efecto que borra los errores de autenticación después de 3 segundos.
    useEffect(() => {
        // Se establece un temporizador para los errores
        if (errorsAuth) {
            // Se establece un temporizador para los errores
            const timer = setTimeout(() => {
                setErrors(null)
            }, 3000)
            // Se limpia el temporizador
            return () => clearTimeout(timer)
        }
    }, [errorsAuth])

    // Otro efecto que verifica si el usuario está autenticado al cargar la aplicación, usando el token almacenado en las cookies.
    useEffect(() => {
        // Se verifica si el usuario está logueado
        const checkLogin = async () => {
            // Se obtienen las cookies
            const cookies = Cookies.get();
            if (!cookies.token) {
                // Si no hay token, se establece la autenticación en false
                setIsAuthenticated(false);
                // Se establece la carga en false
                setIsLoading(false);
                return;
            }

            try {
                // Se verifica el token
                const res = await verifyToken(cookies.token);
                // Si no hay respuesta, se establece la autenticación en false
                if (!res.data) return setIsAuthenticated(false);
                // Se establece la autenticación en true
                setIsAuthenticated(true);
                // Se establece al usuario en el estado
                setUser(res.data);
                // Se establece la carga en false
                setIsLoading(false);
            } catch (error) {
                // Si hay un error, se establece la autenticación en false
                setIsAuthenticated(false);
                // Se establece la carga en false
                setIsLoading(false);
            }
        };
        // Se llama a la función checkLogin
        checkLogin();
    }, []);

    // Se retorna el contexto de autenticación
    return (
        <AuthContext.Provider value={{
            signUp,
            signIn,
            logOut,
            editProfile,
            user,
            isAuthenticated,
            errorsAuth,
            isLoading,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
