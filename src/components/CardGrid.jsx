import ItemCard from "./ItemCard"


const CardGrid = ({catalogo}) => {
  return (
    <div id="cards-container">
        {catalogo.map(pelicula => (
            <ItemCard 
                key={pelicula.id} 
                titulo={pelicula.titulo} 
                categoria={pelicula.categoria} 
                anio={pelicula.anio} 
                destacado={pelicula.destacado}
                imagen={pelicula.imagen} 
            />
        ))}
    </div>
  )
}


export default CardGrid
