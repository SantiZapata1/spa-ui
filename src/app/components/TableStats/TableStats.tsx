import React from 'react'

type TableStatsProps = {
    estadisticas: any
}


function TableStats({ estadisticas }: TableStatsProps) {
    return (
        <div>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Nombre</th>
                        <th className="px-4 py-2">Cantidad</th>
                        <th className="px-4 py-2">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {estadisticas.map((estadistica: any) => (
                        estadistica.nombre !== "Total" &&
                        <tr key={estadistica.nombre}>
                            <td className="border px-4 py-2">{estadistica.nombre}</td>
                            <td className="border px-4 py-2">{estadistica.cantidad}</td>
                            <td className="border px-4 py-2">${estadistica.precio}</td>
                        </tr>
                    ))}
                    {/* Haz que se muestre el campo de estadistica.nombre == "Total" ahora */}
                    {estadisticas
                        .filter((estadistica: any) => estadistica.nombre === "Total")
                        .map(({ nombre, cantidad, precio }: any) => (
                            <tr key={nombre}>
                                <td className="border px-4 py-2">{nombre}</td>
                                <td className="border px-4 py-2">{cantidad}</td>
                                <td className="border px-4 py-2">${precio}</td>
                            </tr>
                        ))}

                </tbody>

            </table>

        </div>
    )
}

export default TableStats