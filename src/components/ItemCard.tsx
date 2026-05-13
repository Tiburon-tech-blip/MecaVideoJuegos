import foto from "../assets/noDisponible.png"
import { useState } from "react";
//Para ejecuar codigo al cargar
import { useEffect } from "react";
import type {ItemCatalogo} from "../types/catalogo"




//Componente ItemCard recibe props desde CardGrid
function ItemCard({Title, Year, imdbID, Type, Poster}: ItemCatalogo) {

    //Estado que guarda si el juego es favorito o no.
    const [vistaActual, setVistaActual] = useState("No Favorito");

    //Variable booleana: true → si es favorito; false → si no
    const esFavorito = vistaActual === "Favorito";

    //Se ejecuta cuando el componente se monta; "const guardado = localStorage.getItem(titulo)" Busca en el navegador si este juego ya fue guardado, usa titulo como clave.
    useEffect(() => {
        const guardado = localStorage.getItem(Title);
        if (guardado) {
            setVistaActual(guardado);
        }}, [Title]);

    let AwardsEstado = true

    if (typeof Year === 'string') {   
        AwardsEstado = true;
    }     
    if (typeof Year !== 'string' || Year.trim().length === 0) {
        AwardsEstado = false;
    }

    let icono="😂"
    if (AwardsEstado === true) {
        icono = "😍";
    } else if (AwardsEstado === false) {
        icono = "😂";
    }
   
    return (

        //Clase Dinamica "card": si destacado → card-destacado; si favorito → card-favorito
        <div className={`card ${AwardsEstado ? "card-destacado" : ""} ${esFavorito ? "card-favorito" : ""}`} >
            <div className="face front">
                <img src={Poster !== "N/A" ? Poster : foto}
                    alt={Title}
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        e.currentTarget.src = foto;
                    }}
                />
                <h3>{Title}</h3>
            </div>
            <div className="face back">
                <h3>{Title}</h3>
                <p>Identificacion: {imdbID}</p> 
                <p>Año: {Year}</p>
                <p>Tipo: {Type}</p>
                <p>Destacado: {icono}</p>
               {/* <p id="descripcion">Descripcion: {Plot}</p> */}
                <div className="buttons-container">               
                    <button 
                        //Clase dinamica "targeta-button":normal → targeta-button; favorito → agrega activo
                        className={`targeta-button ${esFavorito ? "activo" : ""}`}
                        onClick={() => {setVistaActual((prev) => {     // Actualiza el estado basado en el valor anterior
                        const nuevoEstado = prev === "Favorito" ? "No Favorito" : "Favorito";  //alterna entre estados
                        localStorage.setItem(Title, nuevoEstado); //  guarda por titulo el estado
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

