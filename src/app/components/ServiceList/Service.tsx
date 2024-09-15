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
        <div className="w-full max-w-sm h-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-sage dark:border-gray-700">
            <h2 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{formatText(nombreServicio)}</h2>
            
            <div className="flex flex-col items-center text-gray-900 dark:text-white">
                <span className="text-4xl font-extrabold tracking-tight">${precio}</span>
            </div>

            <ul role="list" className="space-y-5 my-7">
                <li className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Tipo:</span> {formatText(tipo)}
                </li>
                <li className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Detalles:</span> {detalles}
                </li>
            </ul>

            <button
                onClick={openCardTurnos}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
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
