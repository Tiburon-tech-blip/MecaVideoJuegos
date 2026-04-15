import ItemCard from "./ItemCard"

//Componente CardGrid: Recibe una prop: catalogo → array de juegos (ya filtrado desde CustomMain)
const CardGrid = ({catalogo}) => {
  return (

    //map() recorre el array catalogo, por cada elemento (juego) crea una card (ItemCard)
    <div id="cards-container">
        {catalogo.map(juego => (
            <ItemCard 
                key={juego.id} 
                titulo={juego.titulo} 
                categoria={juego.categoria} 
                anio={juego.anio} 
                destacado={juego.destacado}
                imagen={juego.imagen}
                descripcion={juego.descripcion} 
            />
        ))}
    </div>
  )
}


export default CardGrid
