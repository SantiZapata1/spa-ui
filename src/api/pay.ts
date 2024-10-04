import axios from "./axios";

// Método para crear una sesión de pago
export const postcreateSession = async ({ nombreServicio, precio, detalles }: { nombreServicio: string; precio: number; detalles: string; }) => {
    const response = await axios.post("/create-checkout-session", {
        nombreServicio,
        precio,
        detalles,
    });
    return response.data; // Devuelve la sesión creada
};

