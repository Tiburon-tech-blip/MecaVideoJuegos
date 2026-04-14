import { useState } from "react";
import { useMemo } from "react";
//import { useEffect } from "react";
import {catalogo} from "./utils/data"
import CustomMain from "./components/CustomMain"
import CustomHeader from "./components/CustomHeader";


function App() {

    const [busqueda, setBusqueda] = useState("");

    const handleBuscar = (texto) => {
    setBusqueda(texto);
    };


    const catalogoFiltrado = useMemo(() => {
        return catalogo.filter(item =>
            item.titulo.toLowerCase().includes(busqueda.toLowerCase())
        );
    }, [busqueda]);

    
    
    return (
        <>
        <CustomHeader onBuscar={handleBuscar} 
        mensaje={busqueda === "" ? "Escribí algo para buscar..." : ""}
        />
        
        
        <CustomMain catalogo={catalogoFiltrado} />
        </>
    )
  
}

export default App
