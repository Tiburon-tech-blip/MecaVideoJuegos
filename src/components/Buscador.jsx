import { useState } from "react";

//Componente Buscador que recibe una prop: onBuscar → es una función que viene desde App.jsx, se usa para mandarle el texto al componente padre
function Buscador({onBuscar}) {

  //Estado local del componente: texto → lo que el usuario escribe; setTexto → función para actualizarlo; Empieza vacío.
  const [texto, setTexto] = useState("");

  //"const handleChange = (e) => {"   Función que se ejecuta cada vez que el usuario escribe algo, e → es el evento del input.
  //"const valor = e.target.value;"   Obtiene el texto actual del input.
  const handleChange = (e) => {
    const valor = e.target.value;
    setTexto(valor);            //Actualiza el estado interno del componente.

    //Llama a la función que vino desde App. Envía el texto al componente padre, y Dispara el filtrado del catálogo.
    onBuscar(valor);           
  };

  return (
    //"onChange={handleChange}" Cada vez que escribo se ejecuta handleChange, se actualiza el valor y se manda a la App.
    <input
      type="text"
      placeholder="Buscar..."
      value={texto}
      onChange={handleChange}
      className="input-neon"
    />
  );
}

export default Buscador;