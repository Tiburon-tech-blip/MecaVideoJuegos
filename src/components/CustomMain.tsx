import CardGrid from "./CardGrid"
import type {ItemCatalogo} from "../types/catalogo"

// Tipado de props
type Props = {
  catalogo: ItemCatalogo[];
   loading: boolean;
};

//Componente CustomMain: Recibe una prop: catalogo → lista de juegos (ya filtrada desde App)
const CustomMain = ({catalogo, loading}: Props) => {
  
  if (loading) {
    return <h1>Cargando...</h1>;
  }
  
  
  return (
    <main>
      <div className="conatenedor-subTexMain">
        <h1 className="subTexMain">Catalogo Interactivo:</h1> 
      </div>

      {/* Operador ternario: ¿Si el catalogo esta vacio? Muestra una esxprecion si no hay resulatdo en la Busqueda, luego renderiza si ahi elementos el componente CardGrid al cual se le pasa el catalogo */}
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

