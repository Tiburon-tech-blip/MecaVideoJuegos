import { useEffect, useState } from "react";

// Definimos el tipo de las props
type Props = {
  onBuscar: (texto: string) => void;
};

//Componente Buscador que recibe una prop: onBuscar → es una función que viene desde App.jsx, se usa para mandarle el texto al componente padre
const Buscador = ({onBuscar}: Props) => {

  //Estado local del componente: texto → lo que el usuario escribe; setTexto → función para actualizarlo; Empieza vacío.
  const [texto, setTexto] = useState<string>("");


  useEffect(() => {

    const timeIdOut= setTimeout(()=>{
      if (!texto.trim()) return;
      onBuscar(texto)
    },1000)
    

    return () => {
      clearTimeout(timeIdOut)
    }
    },[texto, onBuscar]);

  
    const handleKeyDownd = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onBuscar(texto)
        setTexto("")
      }
            
    };

  return (
    //"onChange={handleChange}" Cada vez que escribo se ejecuta handleChange, se actualiza el valor y se manda a la App.
    
    <section className="search-container">
      <input
        type="text"
        placeholder="Buscar..."
        value={texto}
        onKeyDown={handleKeyDownd}

        onChange={(e) => {
              //console.log(e.target.value)
              setTexto(e.target.value)           
        }}
        className="input-neon"
      />
      <button onClick={()=> {onBuscar(texto)}} className="btn-search">Buscar</button>
    </section>
  );
}

export default Buscador;