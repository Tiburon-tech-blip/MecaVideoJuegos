import Buscador from "./Buscador";


function CustomHeader({onBuscar, mensaje}) {
  
    return (
    <header>
        <h1 className="titulo">La Meca de los Videos Juegos</h1>
        <h2>¡Todo lo que Queres Jugar, y Mas!</h2>


        <Buscador onBuscar={onBuscar}/>
        
        {mensaje !== "" && <p className="mensaje">{mensaje}</p>}

    </header>
    )
}

export default CustomHeader