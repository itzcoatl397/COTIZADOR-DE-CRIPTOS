import { useState, useEffect } from "react";

import styled from "@emotion/styled";

import ImagenCripto from "./img/imagen-criptos.png";
import { Formulario } from "./components/Formulario";
import Resultado from "./components/Resultado";
import { Loading } from "./components/Loading";
function App() {

  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length) {
      const cotizarCripto = async () => {
        setCargando(true)
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.monedaCripto}&tsyms=${monedas.moneda}`;

        const response = await fetch(url);
        const resp = await response.json();

        setResultado(resp.DISPLAY[monedas.monedaCripto][monedas.moneda]);
        setCargando(false)
      };
      cotizarCripto();
    }
  }, [monedas]);

  return (
    <div className=" max-w-4xl w-11/12  mx-auto  lg:grid lg:grid-cols-2  lg:gap-x-8">
      <img
        className="max-w-md w-10/12 mt-28   mb-0 mr-auto block mx-auto  lg:mx-auto"
        src={ImagenCripto}
        width={420}
      />

      <div className=" ">
        <h1
          className="
       after:container 
       after:mt-2.5 after:ml-auto after:mb-0 after:mr-auto
       after:w-full after:h-1.5  after:block after:bg-blue-800
       font-lato text-white  
        
      text-3xl mt-20  mb-11 uppercase text-center font-bold "
        >
          Cotizador Criptomonedas{" "}
        </h1>
        <Formulario setMonedas={setMonedas} />


      {cargando && <Loading/>  }
{ resultado.PRICE && <Resultado resultado={resultado} />}
        
      </div>
    </div>
  );
}

export default App;
