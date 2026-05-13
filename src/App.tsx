//(useState) Sirve para manejar estados (datos que cambian en la app)
import { useState, useEffect, useCallback } from "react";
import {useRef} from "react"
//Importo los datos del catálogo (lista de juegos).
//import {catalogo} from "./utils/data"
//Importo dos componentes principales: CustomMain → contenido (cards); CustomHeader → (buscador + título)
import CustomMain from "./components/CustomMain"
import CustomHeader from "./components/CustomHeader";
import TagHistory from "./components/TagHistory";
import type {ItemCatalogo} from "./types/catalogo";
import { getPeliculas } from "./services/CatalogPeliServices"
import { getDetallePelicula} from "./services/detallePeliServices";

//Componente principal de toda la aplicación "App()".
function App() {

    const [busquedasPrevias, setBusquedasPrevias] = useState([
        "la momia", 
        "tiburon", 
        "king kong"
    ]);
    
    // ESTADO TIPADO 
    const [busqueda, setBusqueda] = useState<ItemCatalogo[]>([]);

    // LOADING
    const [loading, setLoading] = useState(false);


    // =========================
    // CARGA INICIAL
    // =========================
    const yaCargo = useRef(false);
    useEffect(() => {

        
        if (yaCargo.current) return;
        yaCargo.current = true;

        //prueva de la appi por id
        const probarDetalle = async () => {

            const pelicula = await getDetallePelicula("tt0372784");

            console.log(pelicula);
        };

        probarDetalle();







        const cargarInicial = async () => {

            try {

                setLoading(true);

                // BÚSQUEDA INICIAL
                const peliculas = await getPeliculas("batman");

                setBusqueda(peliculas);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);
            }
        };

        cargarInicial();

    }, []);


    // =========================
    // BUSCADOR
    // =========================
    //Función que: recibe texto del buscador; actualiza el estado busqueda.
    const handleBuscar = useCallback (async (texto:string) => {
    
    texto = texto.trim().toLocaleLowerCase();
    
    if (!texto) return;

      try {

        setLoading(true);

        const peliculas =
          await getPeliculas(texto);

        setBusqueda(peliculas);

        // HISTORIAL
        if (
          !busquedasPrevias.includes(
            texto
          )
        ) {

          setBusquedasPrevias(
            (prev) => [
              texto,
              ...prev.slice(0, 9)
            ]
          );
        }

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    },[busquedasPrevias]

);
    
    //Renderizado
    return (
        <>

        {/* Header(CustomHeader) le pasa 2 props= "onBuscar": Es la función que actualiza la búsqueda, se usa dentro del buscador; 
         "mesaje":  Si no hay búsqueda → muestra mensaje, si hay texto → no muestra nada*/}
        <CustomHeader onBuscar={handleBuscar} 
        mensaje={busqueda.length === 0 ? "Escribí algo para buscar..." : ""}
        />

        <TagHistory busquedasPrevias= {busquedasPrevias} onBuscar={handleBuscar}/>
        
        {/*Main(CustomMain) le pasa un props= "catalogo": Que es el catalogo ya filtrado */}
        <CustomMain catalogo={busqueda} loading={loading} 
        />


        </>
    )
  
}

export default App


