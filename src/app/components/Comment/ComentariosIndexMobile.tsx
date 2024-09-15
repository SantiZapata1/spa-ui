import Swal from 'sweetalert2';
// Hooks
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
// Backend
import { createCommentRequest, getCommentsRequest } from '../../../api/comments';
// Componentes
import SelectOptions from '../Select/SelectOptions';
import InputTextArea from '../Inputs/InputTextArea';
import CommentList from './CommentList';
import { button, h2 } from 'framer-motion/client';

type Comentario = {
    id: number;
    servicio: string;
    comentario: string;
};

export default function ComentariosIndex() {
    const [filtro, setFiltro] = useState<string>('ningun');
    const [comentarios, setComentarios] = useState<Comentario[]>([]);
    const [estaComentando, setEstaComentando]=useState(false)

    // Función para obtener los comentarios de la base de datos
    const listaComentarios = async () => {
        try {
            const response = await getCommentsRequest();
            setComentarios(response.data); // Guarda los comentarios en el estado
        } catch (error) {
            console.error('Error al obtener los comentarios:', error);
        }
    };

    // Cargar comentarios al montar el componente
    useEffect(() => {
        listaComentarios(); // Cargar comentarios cuando el componente se monta
    }, []);

    // Destructuramos useform
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const opcionesServicios = [
        { value: 'belleza', nombre: 'Belleza' },
        { value: 'masajes', nombre: 'Masajes' },
        { value: 'tratamientos-corporales', nombre: 'Tratamientos corporales' },
        { value: 'tratamientos-faciales', nombre: 'Tratamientos faciales' },
    ];

    // Filtrar los comentarios según el servicio seleccionado
    const comentariosFiltrados = filtro === 'ningun'
        ? comentarios
        : comentarios.filter(comentario => comentario.servicio === filtro);

    const onSubmit = async (values: any) => {
        Swal.fire({
            title: '¿Estás seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7BB263',
            cancelButtonColor: '#D8316C',
            confirmButtonText: 'Sí, enviar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // Aquí iría la conexión a la BD
                    const response = await createCommentRequest(values);

                    // Opcional: Agregar el nuevo comentario directamente al estado local
                    setComentarios((prevComentarios) => [
                        ...prevComentarios,
                        response.data, // Suponiendo que response.data es el nuevo comentario creado
                    ]);

                    setValue('comentario', ''); // Limpiar el campo de comentario después de enviar
                    setEstaComentando(false)


                    Swal.fire({
                        title: '¡Listo!',
                        text: '¡Tu mensaje ha sido enviado correctamente!',
                        icon: 'success',
                        confirmButtonText: 'Aceptar',
                        confirmButtonColor: '#7BB263',
                    });
                } catch (error) {
                    console.log(error);
                }
            }
        });
    };

    // Función para manejar el cambio de filtro
    const handleFiltroChange = (event: any) => {
        setFiltro(event.target.value);
    };

    return (
        <section className="min-h-screen flex flex-col items-center">
            <h2>Comentarios <span className="text-rose-700">{'(' + comentariosFiltrados.length + ')'}</span></h2>

            <div className="flex flex-col md:flex-row justify-center h-auto md:max-w-screen-2xl w-full px-4">
                {/* Lista de comentarios */}
                <div className="overflow-scroll mt-4 overflow-x-hidden max-h-30rem">
                    <div className="flex flex-col">
                        <label htmlFor="opciones" className="text-xl">Filtrar:</label>
                        <select className="border px-5 open-sans border-gray-200 rounded-md h-10 xl:h-8 2xl:h-10 my-2 xl:my-1 xl:m-2 m-4" id="opciones" name="opciones" value={filtro} onChange={handleFiltroChange}>
                            <option value="ningun">Sin filtro</option>
                            <option value="belleza">Belleza</option>
                            <option value="masajes">Masajes</option>
                            <option value="tratamientos-corporales">Tratamientos corporales</option>
                            <option value="tratamientos-faciales">Tratamientos faciales</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <CommentList comentarios={comentariosFiltrados} />
                    </div>
                </div>

                {estaComentando ?
                
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                    <form
                        className="flex flex-col p-2 rounded-md h-full justify-evenly w-full"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h3 className="text-3xl">¡Dejanos un comentario!</h3>
                        <SelectOptions
                            campo=""
                            nombre="servicio"
                            setValue={setValue}
                            error={errors.servicios}
                            opciones={opcionesServicios}
                        />
                        <InputTextArea
                            customSize="h-40"
                            require
                            type="text"
                            placeholder="Comentario"
                            register={register}
                            setValue={setValue}
                            campo=""
                            nombre="comentario"
                            errors={errors.comentario}
                        />
                        <button
                            type="submit"
                            className="p-3 mt-2 w-full bg-sage text-white font-bold rounded-lg shadow-lg"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
                :
                <button 
                className="p-3 mt-10 w-full bg-sage text-white font-bold rounded-lg shadow-lg"

                onClick={()=>{
                    setEstaComentando(true)
                }}>Comentar</button>
                }


                
            </div>
        </section>
    );
}
