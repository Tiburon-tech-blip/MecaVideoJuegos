import ItemCard from "./ItemCard"
import type { ItemCatalogo } from "../types/catalogo"

interface ContenedorCartaProps {
  catalogo: ItemCatalogo[],
}

//Componente CardGrid: Recibe una prop: catalogo → array de juegos (ya filtrado desde CustomMain)
const CardGrid = ({catalogo}:ContenedorCartaProps) => {
  return (

    //map() recorre el array catalogo, por cada elemento (juego) crea una card (ItemCard)
    <div id="cards-container">
        {catalogo.map(pelicula => (
            <ItemCard 
                key={pelicula.imdbID}
                Title={pelicula.Title}
                Year={pelicula.Year}
                imdbID={pelicula.imdbID}  
                Type={pelicula.Type}
                Poster={pelicula.Poster}
                
            />
        ))}
    </div>
  )
}


export default CardGrid
