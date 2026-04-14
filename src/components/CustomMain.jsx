import CardGrid from "./CardGrid"

//CustomMain recibe "catalogo" como prop desde App
const CustomMain = ({catalogo}) => {
  return (
    <main>
      <div className="conatenedor-subTexMain">
        <h1 className="subTexMain">Grandes Juegos de Play:</h1> 
      </div>

      {/* Muestra una esxprecion si no hay resulatdo en la Busqueda, y renderiza el componente CardGrid al cual se le pasa el catalogo */}
      {catalogo.length === 0 ? (
        <div className="contenedorMensajeBusqueda">
          <p className="mensajeBusqueda">No hay resultados</p>
        </div>
         ) : (<CardGrid catalogo={catalogo} />)
      }
        
    </main>
  )
}

export default CustomMain

