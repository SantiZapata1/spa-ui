"use client"

import "./globals.css"
import ContactoForm from "./contacto/page";
import HeroImage from "./components/HeroImage/Heroimage"
import ComentarioForm from "./components/Comment/ComentarioForm";
import Galeria from "./components/GaleriaFoto/Galeria";
import CommentList from "./components/Comment/CommentList";
import {getCommentsRequest} from "../api/comments"
import { useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import InputTextArea from "./components/Inputs/InputTextArea";
import { createCommentRequest } from "../api/comments";


// interfaz del comentario
type Comentario = {
  id: number;
  servicio: string;
  comentario: string;
};


export default function Home() {

  // estados
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [filtro, setFiltro] = useState<string>('ningun');
  const [mensajeError, setMensajeError] = useState("");

  // destructuramos useform
  const {
    register,
    handleSubmit,
    setValue,
    formState:{errors}
  } = useForm()

  const onSubmit= async(values:any)=>{
    try {
      const response = await createCommentRequest(values);
      
      // Opcional: Agregar el nuevo comentario directamente al estado local
      setComentarios((prevComentarios) => [
        ...prevComentarios,
        response.data, // Suponiendo que response.data es el nuevo comentario creado
      ]);
      
      setValue('comentario', ''); // Limpiar el campo de comentario después de enviar

    } catch (error) {
      console.error("Error al enviar el comentario:", error);
      setMensajeError("Hubo un problema al enviar el comentario.");
    }

  }

  const handleFiltroChange = (event:any) => {
    setFiltro(event.target.value);
  };


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

  // Filtrar los comentarios según el servicio seleccionado
  const comentariosFiltrados = filtro === 'ningun'
  ? comentarios
  : comentarios.filter(comentario => comentario.servicio === filtro);

  return (
    <main>
      
      <HeroImage
        titulo="SPA - Sentirse Bien"
        eslogan="Sumérgete en una experiencia de pura tranquilidad. Regálate el descanso que mereces y reserva hoy mismo tu momento de renovación total en nuestro spa. ¡Tu bienestar no puede esperar!"
        textoBoton="Quiero mi sesion"
      />

      <div className="secciones bg-beige">

        {/* quienes somos */}
        <section className="flex flex-col items-center justify-center min-h-screen p-8">

          <div className="text-center max-w-4xl">
            <h2 className="text-4xl font-bold mb-4">Quiénes Somos</h2>
            <h3 className="text-lg font-medium">
              Buscamos atraer la atención de nuestros clientes a través de experiencias inspiradas en la seducción de los sentidos. Adaptamos las propuestas con el objetivo de que logre desconectarse completamente de la rutina y disfrute de un momento de bienestar, en total armonía con la naturaleza.
            </h3>
          </div>
        </section>
        
        {/* servicios */}
        <section className="servicios">
          <h2>Servicios</h2>
        </section>

        {/* Galería */}
        <section className="galeria">
          {/* comento la galeria pq me tira problemas en la consola */}
          <Galeria /> 
        </section>

        {/* testimonios */}
        <section className="h-80vh mt-10 flex flex-col items-center">

          <h2>Comentarios</h2>

          <div className="flex flex-row justify-center h-9/10 ">

            <div className="">

              <form 
                className="m-3 w-6/10 p-2 rounded-md" 
                onSubmit={handleSubmit(onSubmit)}
                >
                {mensajeError && <p className="text-red-500">{mensajeError}</p>}

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

        {/* contacto */}
        <section className="flex flex-col md:flex-row justify-evenly p-5" id="contacto">
          <ContactoForm/>
          <iframe className="w-full md:w-4/10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.5827771761133!2d-58.981585523622684!3d-27.451110615916157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450cf0c80be0d3%3A0xc9f9278c74810912!2sUTN%20-%20Facultad%20Regional%20Resistencia!5e0!3m2!1ses-419!2sar!4v1723472004268!5m2!1ses-419!2sar" loading="lazy"></iframe>
        </section>

      </div>

      
    </main>
  );
}
