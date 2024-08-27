import { useForm } from "react-hook-form";
import InputTextArea from "../Inputs/InputTextArea";
import { createCommentRequest } from "@/api/comments";

export default function CommentForm2(){

    // Destructuramos useForm
    const { 
        register, 
        setValue,
        handleSubmit, 
        formState: { errors }
    } = useForm();

    const onSubmit= async(datos:any)=>{
        
        try{
            await createCommentRequest(datos);

        }catch{

        }

    }


    return(
        <div>

            <form 
                className="flex flex-col items-center justify-center p-2 rounded-md" 
                onSubmit={onSubmit}
            >

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

        </div>
    );
}