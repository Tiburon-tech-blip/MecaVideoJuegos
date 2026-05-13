interface Props {
    busquedasPrevias: string[];
    onBuscar: (texto: string) => void;
}

const TagHistory = ({busquedasPrevias, onBuscar}:Props ) => {


  return (
    <section className="history-container">
        <h2 className="titu-historial">Historial de Busqueda</h2>
        <ul className="history-tags">
            {busquedasPrevias.map((busquedaPrev) => {
                return (
                    <li className="tag" key={busquedaPrev}
                    onClick={() => onBuscar(busquedaPrev)}
                    >{busquedaPrev}</li>
                )
            }
            
            )}            
        </ul>
    </section>
  )
}

export default TagHistory