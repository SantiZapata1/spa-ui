// hooks
import { useForm } from "react-hook-form";
import { useState, useEffect} from "react";
import { useAuth } from '../../../context/auth';

// componentes
import CommentList from "../Comment/CommentList";
import InputText from "../Inputs/InputText";
import InputTextArea from "../Inputs/InputTextArea";
// import FormComponent from "../FormComponent/FormComponent";

// controladores api
import {
    getCommentsFromUserRequest,
    createCommentRequest,
    getCommentRequest,
    getCommentsRequest,
    deleteCommentsRequest,
    updateCommentRequest,
} from "../../../api/comments";

function CardComentarios() {
    const { user, isAuthenticated, errorsAuth, isLoading } = useAuth();

    const [comentarios, setComentarios] = useState([]);
    const [mensajeError, setMensajeError] = useState("");

    // Función para obtener la lista de comentarios
    const listaComentarios = async () => {
        try {
            const response = await getCommentsFromUserRequest(user.id);
            setComentarios(response.data); // Guarda los comentarios en el estado
        } catch (error) {
            setMensajeError("No se pudieron cargar los comentarios.");
            console.error("Error al obtener los comentarios:", error);
        }
    };

    useEffect(() => {
        listaComentarios(); // Cargar comentarios cuando el componente se monta
    }, []);

    // Destructuramos useForm
    const { 
        register, 
        setValue,
        handleSubmit, 
        formState: { errors }
    } = useForm();

    // Función onSubmit
    const onSubmit = async (datos:any) => {
        console.log(errors)
        try {
            await createCommentRequest(datos);
            listaComentarios(); // Recargar los comentarios después de crear uno nuevo
        } catch (error) {
            console.error("Error al enviar el comentario:", error);
            setMensajeError("Hubo un problema al enviar el comentario.");
        }
    };

    return (
        <div className=" mb-5 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg md:w-6/10 p-4 mt-5">
            <h2 className="text-3xl font-medium">Tus comentarios</h2>

            <form 
                className="m-3 w-6/10 flex flex-col items-center justify-center p-2 rounded-md" 
                onSubmit={handleSubmit(onSubmit)}
            >
                {mensajeError && <p className="text-red-500">{mensajeError}</p>}

                {isAuthenticated && <InputText valor={user.id} type="hidden" campo="" nombre="user_id" register={register} setValue={setValue} errors={errors._id} placeholder="" /> }

                {/* Lista de servicios */}
                <div>
                    <label htmlFor="servicio">Elige una opción:</label>
                    <input
                    list="lista-servicio"
                    id="servicio"
                    className="p-1 m-1 font-bold"
                    {...register('servicio', { required: true })} 
                    />
                    <datalist id="lista-servicio">
                        <option value="belleza" />
                        <option value="masajes" />
                        <option value="tratamientos-corporales" />
                        <option value="tratamientos-faciales"/>
                    </datalist>
                    {errors.servicio && <p className="text-red-500">Este campo es requerido</p>}
                </div>

                <InputTextArea require type="text" placeholder="Comentario" register={register} setValue={setValue} campo="" nombre="comentario"  errors={errors.comentario}/>

                <button type="submit" className="p-3 mt-2 bg-green-900 w-96 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg">
                    Enviar
                </button>
            </form>

            <CommentList 
                comentarios={comentarios} 
                recargarComentarios={listaComentarios} 
            />


        </div>
    );
}

export default CardComentarios;
