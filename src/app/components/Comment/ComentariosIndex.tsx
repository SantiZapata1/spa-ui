
import Swal from 'sweetalert2';
// Hooks
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react'
// Backend
import { createCommentRequest, getCommentsRequest } from '../../../api/comments'
// Componentes
import SelectOptions from '../Select/SelectOptions';
import InputTextArea from '../Inputs/InputTextArea';
import CommentList from './CommentList';

type Comentario = {
    id: number;
    servicio: string;
    comentario: string;
};

function ComentariosIndex() {
    const [filtro, setFiltro] = useState<string>('ningun');
    const [comentarios, setComentarios] = useState<Comentario[]>([]);

    const listaComentarios = async () => {
        try {
          const response = await getCommentsRequest();
          setComentarios(response.data); // Guarda los comentarios en el estado
    
        } catch (error) {
          console.error("Error al obtener los comentarios:", error);
        }
      }
    
      useEffect(() => {
        listaComentarios(); // Cargar comentarios cuando el componente se monta
      }, []);

    // destructuramos useform
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm()


    const opcionesServicios = [
        { value: "belleza", nombre: "Belleza" },
        { value: "masajes", nombre: "Masajes" },
        { value: "tratamientos-corporales", nombre: "Tratamientos corporales" },
        { value: "tratamientos-faciales", nombre: "Tratamientos faciales" },
    ]


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


    const handleFiltroChange = (event: any) => {
        setFiltro(event.target.value);
    };


    return (
        <section className="h-80vh mt-10 flex flex-col items-center p-5">
            <h2>Comentarios</h2>
            <div className="flex flex-row justify-center h-9/10 ">
                <div className="">
                    <form
                        className="flex flex-col p-2 rounded-md"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <SelectOptions campo="Servicios" nombre="servicio" setValue={setValue} error={errors.servicios} opciones={opcionesServicios} />
                        <InputTextArea require type="text" placeholder="Comentario" register={register} setValue={setValue} campo="" nombre="comentario" errors={errors.comentario} />
                        <button type="submit" className="p-3 mt-2 bg-green-900 w-96 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg">
                            Enviar
                        </button>
                    </form>

                </div>

                <div className="overflow-scroll m-5">
                    <div>
                        <label htmlFor="opciones" className="text-xl font-bold ">Filtrar:</label>
                        <select className="border open-sans border-gray-300 rounded-md h-10 xl:h-8 2xl:h-10 my-2 xl:my-1 xl:m-2 m-4 w-95/10" id="opciones" name="opciones" value={filtro} onChange={handleFiltroChange}>
                            <option value="ningun">Sin filtro</option>
                            <option value="belleza">Belleza</option>
                            <option value="masajes">Masajes</option>
                            <option value="tratamientos-corporales">Tratamientos corporales</option>
                            <option value="tratamientos-faciales">Tratamientos faciales</option>
                        </select>
                    </div>

                    <div>
                        <CommentList
                            comentarios={comentariosFiltrados}
                        />
                    </div>
                </div>

            </div>

        </section>

    )
}

export default ComentariosIndex