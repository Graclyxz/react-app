import React, { useState } from "react";
import ListaTareas from "../components/ListaTareas";
import AgregarTarea from "../components/AgregarTarea";
import Filtros from "../components/Filtros";

function View() {
    const [tareas, setTareas] = useState([]); // Lista de tareas
    const [filtro, setFiltro] = useState("todas"); // Estado del filtro

    // Agregar nueva tarea
    const agregarTarea = (texto) => {
        if (texto.trim() === "") return;
        const nueva = { id: Date.now(), texto, completada: false };
        setTareas([...tareas, nueva]);
    };

    // Marcar tarea como completada
    const toggleTarea = (id) => {
        setTareas(
            tareas.map((tarea) =>
                tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
            )
        );
    };

    // Filtrar tareas según el estado
    const tareasFiltradas = tareas.filter((tarea) => {
        if (filtro === "completadas") return tarea.completada;
        if (filtro === "pendientes") return !tarea.completada;
        return true;
    });

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
            <h2>Lista de Tareas</h2>
            <AgregarTarea agregarTarea={agregarTarea} />
            <Filtros setFiltro={setFiltro} />
            <ListaTareas tareas={tareasFiltradas} toggleTarea={toggleTarea} />
        </div>
    );
}

export default View;
