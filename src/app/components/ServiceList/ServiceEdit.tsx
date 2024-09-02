import { useForm } from "react-hook-form";
import { updateServiceRequest } from "../../../api/servicios";

import InputText from "../Inputs/InputText";
import SelectOptions from "../Select/SelectOptions";
import { useEffect } from "react";

import Swal from "sweetalert2";
export default function ServiceEdit({ id, setIsEditing, obtenerListaServicios, service }: any) {

    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors } } = useForm({ defaultValues: service });

    // al enviar el form, se ejecuta en metodo axios para actualizar el servicio
    const onSubmit = async (values: any) => {
            // Aquí pondriamos la conexión a la BD para enviar los datos del formulario usando React Hook Form
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
                    Swal.fire({
                      title: '¡Listo!',
                      text: '¡Tu mensaje ha sido enviado correctamente!',
                      icon: 'success',
                      confirmButtonText: 'Aceptar',
                      confirmButtonColor: '#7BB263',
                    }).then(async (result) => {
                      if (result.isConfirmed) {
                        // Si se confirma, recargar la página
                        const response = await updateServiceRequest({ ...values, id: id });
                        setIsEditing(false);
                        obtenerListaServicios()
                        window.location.reload();
                      }
                    });
                  } catch (error) {
                    console.log(error)
                  }
                }
              });
    
            }

    
    const opcionesServicios = [
        { value: "belleza", nombre: "Belleza" },
        { value: "masajes", nombre: "Masajes" },
        { value: "tratamientos-corporales", nombre: "Tratamientos corporales" },
        { value: "tratamientos-faciales", nombre: "Tratamientos faciales" },
    ]

    const toUpperFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div>
            <form
                className="space-y-3 p-2 flex flex-col w-96"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <InputText campo="Nombre" nombre="nombre" type="text" register={register} setValue={setValue} valor={service.nombre} errors={errors.nombre} require={false} />
                </div>
                <div>
                    <SelectOptions campo="Tipo de servicio" nombre="tipo" setValue={setValue} error={errors.servicio} opciones={opcionesServicios} valor={toUpperFirstLetter(service.tipo)} isRequired={false} />
                </div>
                <div>
                    <InputText campo="Precio" nombre="precio" type="number" setValue={setValue} errors={errors.precio} register={register} require={false} />
                </div>
                <div>
                    <InputText campo="Detalles" nombre="detalles" type="text" register={register} setValue={setValue} errors={errors.detalles} valor={service.detalles} require={false} />
                </div>

                <div className="flex flex-col md:flex-row mt-2 justify-center">
                    <button
                        type="button"  // Cambiar tipo a "button"
                        className=" m-2 bg-red-600 hover:bg-red-700 text-white cursor-pointer py-2 px-4 rounded mt-2 md:mt-0"
                        onClick={setIsEditing}  // Desactivar el modo de edición
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="m-2 bg-green-600 hover:bg-green-700 text-white cursor-pointer py-2 px-4 rounded flex items-center justify-center mt-2 md:mt-0"
                    >
                        Guardar
                    </button>
                </div>

            </form>
        </div>
    );
}
