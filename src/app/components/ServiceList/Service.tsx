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
        return text.charAt(0).toUpperCase() + text.slice(1).replace(/-/g, ' ');
    }

    return (
        <div className="w-full max-w-sm h-full p-4  border rounded-lg shadow-sm sm:p-8 bg-sage border-gray-700">
            <h2 className="mb-4 text-xl font-medium text-gray-200">{formatText(nombreServicio)}</h2>
            
            <div className="flex flex-col items-center text-white">
                <span className="text-4xl font-extrabold tracking-tight">${precio}</span>
            </div>

            <ul role="list" className="space-y-5 my-7">
                <li className="text-base font-normal leading-tight text-gray-200 ">
                    <span className="font-semibold">Tipo:</span> {formatText(tipo)}
                </li>
                <li className="text-base font-normal leading-tight text-gray-200">
                    <span className="font-semibold">Detalles:</span> {detalles}
                </li>
            </ul>

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
