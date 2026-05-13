//Importo el Componente Buscador, donde se encuentra el input donde el usuario escribe para buscar.
import Buscador from "./Buscador";

// Tipado de props
type CustomHeaderProps = {
  onBuscar: (texto: string) => void;
  mensaje: string;
};

//componente CustomHeader: Recibe 2 props desde App.jsx; onBuscar → función para manejar la búsqueda; mensaje → texto que se muestra debajo del buscador.
function CustomHeader({onBuscar, mensaje}: CustomHeaderProps) {
  
    return (
    <header>
        <h1 className="titulo">Super Mega Video</h1>
        <h2>¡Todas las Pelis que Queres Ver, y Mas!</h2>

        {/*Renderiza el componente Buscador. Le pasa la función onBuscar: Cuando el usuario escribe; Buscador ejecuta esa función; Y se actualiza el estado en App*/}
        <Buscador onBuscar={onBuscar}/>

        {/*Esto es renderizado condicional. Si mensaje no esta vacio y existe el mensaje entonces no se renderiza nada; y si mensaje no esta vacio y exite el mensaje entonces se renderiza p */}        
        {mensaje !== "" && <p className="mensaje">{mensaje}</p>}

    </header>
    )
}

export default CustomHeader