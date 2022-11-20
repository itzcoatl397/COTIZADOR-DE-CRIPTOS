import { useState } from "react";
import { BsCurrencyBitcoin } from "react-icons/all";
import styled from "@emotion/styled";

import ImagenCripto from "./img/imagen-criptos.png";
import { Formulario } from "./components/Formulario";
function App() {
  const Hedding = (styled.h1 = `
 font-fon
 `);

  return (
    <div className=" max-w-4xl w-11/12  mx-auto  lg:grid lg:grid-cols-2  lg:gap-x-8">
      <img
        className="max-w-md w-10/12 mt-28   mb-0 mr-auto block"
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
        <Formulario />
      </div>
    </div>
  );
}

export default App;
