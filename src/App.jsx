//(useState) Sirve para manejar estados (datos que cambian en la app)
import { useState } from "react";
//(useMemo) Se usa para optimizar cálculos (en este caso, el filtrado del catálogo).
import { useMemo } from "react";
//Importo los datos del catálogo (lista de juegos).
import {catalogo} from "./utils/data"
//Importo dos componentes principales: CustomMain → contenido (cards); CustomHeader → (buscador + título)
import CustomMain from "./components/CustomMain"
import CustomHeader from "./components/CustomHeader";

//Componente principal de toda la aplicación "App()".
function App() {
    
    //Estado: busqueda → lo que escribe el usuario; setBusqueda → función para actualizarlo; Inicialmente está vacío "".
    const [busqueda, setBusqueda] = useState("");

    //Función que: recibe texto del buscador; actualiza el estado busqueda.
    const handleBuscar = (texto) => {
    setBusqueda(texto);
    };

    //FILTRO DEL CATÁLOGO: "useMemo()""                             evita recalcular el filtro innecesariamente; 
    // return catalogo.filter(item =>                               Recorre todos los juegos del catálogo;
    //item.titulo.toLowerCase().includes(busqueda.toLowerCase())    Filtra: Convierte todo a minúsculas; Busca coincidencias en el título que viene en "busqueda";
    //}, [busqueda]);                                               Recalcula cuando cambia busqueda.               
    const catalogoFiltrado = useMemo(() => {
        return catalogo.filter(item =>
            item.titulo.toLowerCase().includes(busqueda.toLowerCase())
        );
    }, [busqueda]);

    
    //Renderizado
    return (
        <>

        {/* Header(CustomHeader) le pasa 2 props= "onBuscar": Es la función que actualiza la búsqueda, se usa dentro del buscador; 
         "mesaje":  Si no hay búsqueda → muestra mensaje, si hay texto → no muestra nada*/}
        <CustomHeader onBuscar={handleBuscar} 
        mensaje={busqueda === "" ? "Escribí algo para buscar..." : ""}
        />
        
        {/*Main(CustomMain) le pasa un props= "catalogo": Que es el catalogo ya filtrado */}
        <CustomMain catalogo={catalogoFiltrado} 
        />


        </>
    )
  
}

export default App


/* -1) COMO SE CONECTA TODO: El usuario escribe en el componente Busacdor.jsx "onChange={handleChange}";
       Luego "onBuscar(valor)" manda el texto a App  */
// -2) La App actualiza estado con "setBusqueda(texto)"
// -3) Se filtra el catalogo con "catalogoFiltrado = catalogo.filter(...)"
// -4) Se renderiza CustomMain "<CustomMain catalogo={catalogoFiltrado} />"
// -5) Luego en el Componente CustomMain.jsx en la linea "catalogo.length === 0 ? "No hay resultados" : <CardGrid />" donde Si no hay resultados → mensaje;   Si hay → muestra cards
// -6) Luego en el componente CardGrid.jsx, Recorre el catálogo y crea una card por juego.
// -7) Por ultimo en el componete ItemCard.jsx, donde esta el estado favorito, el localStorage donde Guarda favoritos incluso al recargar, y las clase dinamicas que cambian el estado segun destacado y favorito.
