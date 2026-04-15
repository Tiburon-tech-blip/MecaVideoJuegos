import foto from "../assets/noDisponible.png"
import { useState } from "react";
//Para ejecuar codigo al cargar
import { useEffect } from "react";


//Componente ItemCard recibe props desde CardGrid
function ItemCard({titulo, categoria, anio, destacado, imagen, descripcion}) {

    //Estado que guarda si el juego es favorito o no.
    const [vistaActual, setVistaActual] = useState("No Favorito");

    //Variable booleana: true → si es favorito; false → si no
    const esFavorito = vistaActual === "Favorito";

    //Se ejecuta cuando el componente se monta; "const guardado = localStorage.getItem(titulo)" Busca en el navegador si este juego ya fue guardado, usa titulo como clave.
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

        //Clase Dinamica "card": si destacado → card-destacado; si favorito → card-favorito
        <div className={`card ${destacado ? "card-destacado" : ""} ${esFavorito ? "card-favorito" : ""}`}>
            <div className="face front">
                <img src={imagen} alt={titulo} onError={(e) => e.target.src = foto} />
                <h3>{titulo}</h3>
            </div>
            <div className="face back">
                <h3>{titulo}</h3>
                <p>Categoria: {categoria}</p> 
                <p>Año: {anio}</p>
                <p>Destacado: {icono}</p>
                <p id="descripcion">Descripcion: {descripcion}</p>
                <div className="buttons-container">               
                    <button 
                        //Clase dinamica "targeta-button":normal → targeta-button; favorito → agrega activo
                        className={`targeta-button ${esFavorito ? "activo" : ""}`}
                        onClick={() => {setVistaActual((prev) => {     // Actualiza el estado basado en el valor anterior
                        const nuevoEstado = prev === "Favorito" ? "No Favorito" : "Favorito";  //alterna entre estados
                        localStorage.setItem(titulo, nuevoEstado); //  guarda por titulo el estado
                        return nuevoEstado;       //Devuelve el nuevo estado
                            });
                        }}
                            
                        >
                            <span key={esFavorito ? "fav" : "no-fav"} className="icono">❤</span>  

                            {/*Texto dinamico: si es favorito → "Favorito"; si no → "Marca Favorito"*/} 
                            {vistaActual === "Favorito" ? "Favorito" : "Marca Favorito"} 
                       </button>
                </div>  
 
                            
            </div>            
        </div>
    
   
    );
}

export default ItemCard

