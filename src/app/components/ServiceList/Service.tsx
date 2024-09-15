import { useState } from "react";
import CardModalTurnos from "../Turnos/CardModalTurnos";
import { useAuth } from "@/context/auth";
import { useRouter } from 'next/navigation';

export default function Service({ nombreServicio, tipo, precio, detalles }: any) {
    const { user } = useAuth();
    const [isCardTurnosOpen, setCardTurnosOpen] = useState(false);
    const router = useRouter();

    const openCardTurnos = () => {
        if (!user) {
            router.push('/login');
        } else {
            setCardTurnosOpen(true);
        }
    };

    const closeCardTurnos = () => {
        setCardTurnosOpen(false);
    };

    // Remplaza la primer letra por mayúscula y los - por espacios
    const formatText = (text: string) => {
        return text.toUpperCase().replace(/-/g, ' ');
    }

    return (
        <div className="w-full max-w-sm flex flex-col justify-between h-full border rounded-lg shadow-xl bg-sage border-gray-700">

            <div className="p-5 rounded-lg">
                <h2 className=" text-lg text-left font-semibold text-gray-100">{formatText(nombreServicio)}</h2>

            </div>


            <div className="p-5">

                <ul role="list" className="space-y-1">
                    <span className="text-xl font-light tracking-tight text-white">${precio}</span>

                    {/* <li className="text-base font-normal leading-tight text-gray-200 ">
                        {formatText(tipo)}
                    </li> */}
                    <li className="text-base font-normal leading-tight text-gray-200 text-pretty">
                        <span className="font-semibold">Detalles:</span> {detalles}
                    </li>
                </ul>
                
            </div>
            
            <button
                onClick={openCardTurnos}
                className="text-white bg-sage-hover hover:bg-sage-light focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
                Pedir turno
            </button>
            

            

            <CardModalTurnos
                isOpen={isCardTurnosOpen}
                onClose={closeCardTurnos}
                nombreServicio={nombreServicio}
            />
        </div>
    );
}
