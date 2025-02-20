import React from "react";

function Filtros({ setFiltro }) {
    return (
        <div>
            <button onClick={() => setFiltro("todas")}>Todas</button>
            <button onClick={() => setFiltro("completadas")}>Completadas</button>
            <button onClick={() => setFiltro("pendientes")}>Pendientes</button>
        </div>
    );
}

export default Filtros;
