//Importo el Componente Buscador, donde se encuentra el input donde el usuario escribe para buscar.
import Buscador from "./Buscador";

//componente CustomHeader: Recibe 2 props desde App.jsx; onBuscar → función para manejar la búsqueda; mensaje → texto que se muestra debajo del buscador.
function CustomHeader({onBuscar, mensaje}) {
  
    return (
    <header>
        <h1 className="titulo">La Meca de los Videos Juegos</h1>
        <h2>¡Todo lo que Queres Jugar, y Mas!</h2>

        {/*Renderiza el componente Buscador. Le pasa la función onBuscar: Cuando el usuario escribe; Buscador ejecuta esa función; Y se actualiza el estado en App*/}
        <Buscador onBuscar={onBuscar}/>

        {/*Esto es renderizado condicional. Si mensaje no esta vacio y existe el mensaje entonces no se renderiza nada; y si mensaje no esta vacio y exite el mensaje entonces se renderiza p */}        
        {mensaje !== "" && <p className="mensaje">{mensaje}</p>}

    </header>
    )
}

export default CustomHeader