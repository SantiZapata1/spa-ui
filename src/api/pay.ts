import axios from "./axios";

// Método para crear una sesión de pago
export const postcreateSession = async ({ nombreServicio, precio, detalles, idTurno }: { nombreServicio: string; precio: number; detalles: string, idTurno: String; }) => {
    
    const response = await axios.post("/create-checkout-session", {
        nombreServicio,
        precio,
        detalles,
        idTurno
    });
    
    return response.data; // Devuelve la sesión creada
};

