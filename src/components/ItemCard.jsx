import foto from "../assets/noDisponible.png"
import { useState } from "react";
import { useEffect } from "react";

function ItemCard({titulo, categoria, anio, destacado, imagen}) {

    const [vistaActual, setVistaActual] = useState("No Favorito");
    const esFavorito = vistaActual === "Favorito";

    useEffect(() => {
        const guardado = localStorage.getItem(titulo);
        if (guardado) {
            setVistaActual(guardado);
        }}, [titulo]);

    
    let icono="😂"
    if (destacado === true) {
        icono = "😍";
    } else if (destacado === false) {
        icono = "😂";
    }
   
    return (
        // Clase dinamica donde Si destacado === true  se aplica "card-destacado", Si no queda solo la clase "card"
        <div className={`card ${destacado ? "card-destacado" : ""} ${esFavorito ? "card-favorito" : ""}`}>
            <h3>{titulo}</h3>
            <p>Categoria: {categoria}</p> 
            <p>Año: {anio}</p>
            <p>Destacado: {icono}</p>

            <img src={imagen} alt={titulo} onError={(e) => e.target.src = foto} />


             <div className="buttons-container">               
                <button 
                    className="targeta-button"
                    onClick={() => {setVistaActual((prev) => {
                        const nuevoEstado = prev === "Favorito" ? "No Favorito" : "Favorito";
                        localStorage.setItem(titulo, nuevoEstado); //  guarda por titulo
                        return nuevoEstado;
                         });
                    }}
                    
                >
                        
                       {vistaActual === "Favorito" ? "Favorito" : "Marca Favorito"}
                </button>
                
            </div>            
        </div>
    );
}

export default ItemCard



/*function ItemCard({ titulo, categoria, anio, destacado, imagen }) {

    // Usamos UN solo estado (booleano)
    const [esFavorito, setEsFavorito] = useState(destacado || false);

    return (
        <div className="card">
            <h3>{titulo}</h3>
            <p>Categoria: {categoria}</p> 
            <p>Año: {anio}</p>

            <p>Destacado: {esFavorito ? "😍" : "😂"}</p>

            <img 
                src={imagen} 
                alt={titulo} 
                onError={(e) => e.target.src = foto} 
            />

            <div className="buttons-container">
                <button 
                    className="targeta-button"
                    onClick={() => setEsFavorito(prev => !prev)}
                >
                    {esFavorito ? "😍 Favorito" : "😂 No Favorito"}
                </button>
            </div>
        </div>
    );
}*/

/*export default ItemCard*/