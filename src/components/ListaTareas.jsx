import React from "react";

function ListaTareas({ tareas, toggleTarea }) {
    return (
        <ul>
            {tareas.map((tarea) => (
                <li
                    key={tarea.id}
                    onClick={() => toggleTarea(tarea.id)}
                    style={{
                        textDecoration: tarea.completada ? "line-through" : "none",
                        cursor: "pointer",
                    }}
                >
                    {tarea.texto}
                </li>
            ))}
        </ul>
    );
}

export default ListaTareas;
