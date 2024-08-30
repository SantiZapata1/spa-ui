import { useForm } from "react-hook-form";
import { updateServiceRequest } from "../../../api/servicios";

export default function ServiceEdit({ id, setIsEditing, obtenerListaServicios, service}: any) {

    const { 
        handleSubmit, 
        register, 
        setValue, 
        formState: { errors } } = useForm({defaultValues:service});

    // al enviar el form, se ejecuta en metodo axios para actualizar el servicio
    const onSubmit = async (values: any) => {
        try {

            const response = await updateServiceRequest({ ...values, id: id });
            console.log(response.data);
            setIsEditing();  
            obtenerListaServicios()

        } catch (error) {
            console.log("Error al actualizar servicio", error);
        }
    };

    return (
        <div>
            <form
                className="space-y-3 p-2 flex flex-col w-96"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <label htmlFor="nombre" className="font-semibold">Nombre del servicio:</label>
                    <input 
                        type="text" 
                        id="nombre"
                        className="w-full"
                        {...register("nombre", { required: true })}
                    />
                    {errors.nombre && <p className="text-red-500">Este campo es requerido</p>}
                </div>

                <div>
                    <label htmlFor="servicio" className="font-semibold">Tipo de servicio:</label>
                    <input
                        list="lista-servicio"
                        id="tipo"
                        className="p-1 m-1 w-full"

                        {...register('tipo', { required: true })} 
                    />
                    <datalist id="lista-servicio">
                        <option value="belleza" />
                        <option value="masajes" />
                        <option value="tratamientos-corporales" />
                        <option value="tratamientos-faciales"/>
                    </datalist>
                    {errors.servicio && <p className="text-red-500">Este campo es requerido</p>}
                </div>

                <div>
                    <label htmlFor="precio" className="font-semibold">Precio: $</label>
                    <input 
                        type="number" 
                        id="precio"
                        className="p-1 mx-1 w-full"
                        {...register("precio", { required: true })}
                    />
                </div>

                <div>
                    <label htmlFor="detalles" className="font-semibold">Detalles:</label>
                    <input 
                        type="text" 
                        id="detalles"
                        className="w-full"
                        {...register("detalles", { required: true })}
                    />
                </div>

                <div className="flex flex-col md:flex-row mt-2">
                    <button 
                        type="button"  // Cambiar tipo a "button"
                        className="mr-2 bg-red-600 hover:bg-red-700 text-white cursor-pointer py-2 px-4 rounded mt-2 md:mt-0" 
                        onClick={setIsEditing}  // Desactivar el modo de edición
                    >
                        Cancelar
                    </button>
                    <button 
                        type="submit" 
                        className="bg-green-600 hover:bg-green-700 text-white cursor-pointer py-2 px-4 rounded flex items-center justify-center mt-2 md:mt-0"
                    >
                        Guardar
                    </button>
                </div>

            </form>
        </div>
    );
}
