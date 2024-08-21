import {getCommentsRequest} from "../../../api/comments"
import Comment
 from "./Comment";
// Utiliza useState para almacenar los comentarios y useEffect para realizar la solicitud cuando el componente se monta.
import { useState, useEffect } from "react";

interface Comentario {
    _id: string;
    servicio: string;
    comentario: string;
    date: Date;
}

export default function CommentList() {

    const [comentarios, setComentarios] = useState<Comentario[]>([]);
    const [error, setError] = useState("");

    // Función para obtener la lista de comentarios
    const listaComentarios = async () => {
        try {
            const response = await getCommentsRequest();
            setComentarios(response.data); // Guarda los comentarios en el estado
        } catch (error) {
            setError("No se pudieron cargar los comentarios."); // Maneja el error
            console.error("Error al obtener los comentarios:", error);
        }
    };

    // Cargar comentarios cuando el componente se monta
    useEffect(() => {
        listaComentarios();
    }, []);


  return (
    <div>
        <h4>Lista de comentarios</h4>

            {error && <p className="text-red-500">{error}</p>} {/* Mostrar mensaje de error */}

            <ul>
                {comentarios.length > 0 ? (
                    comentarios.map((comentario) => (
                       
                        <li key={comentario._id} className="border-b py-2">
                            <Comment
                                servicio={comentario.servicio}
                                comentario={comentario.comentario}
                                date={comentario.date}
                            />      
                            
                        </li>
                    ))
                ) : (
                    <p>No hay comentarios disponibles.</p> // Mensaje cuando no hay comentarios
                )}
            </ul>



    </div>
  )
}
