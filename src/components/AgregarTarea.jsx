import React, { useState } from "react";

function AgregarTarea({ agregarTarea }) {
    const [nuevaTarea, setNuevaTarea] = useState("");

    const manejarEnvio = () => {
        agregarTarea(nuevaTarea);
        setNuevaTarea(""); // Limpiar input
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Nueva tarea..."
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
            />
            <button onClick={manejarEnvio}>Agregar</button>
        </div>
    );
}

export default AgregarTarea;
