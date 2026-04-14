import { useState } from "react";

function Buscador({onBuscar}) {
  const [texto, setTexto] = useState("");

  const handleChange = (e) => {
    const valor = e.target.value;
    setTexto(valor);
    onBuscar(valor);
  };

  return (
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