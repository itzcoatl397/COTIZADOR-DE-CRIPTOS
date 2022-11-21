import { useState } from "react";

const Resultado = ({ resultado }) => {
  const { HIGHDAY, CHANGEPCT24HOUR, PRICE, IMAGEURL, LOWDAY, LASTUPDATE } =
    resultado;
  return (
    <div className="container text-white   items-center   m-6 px-2 py-3    md:ml-auto lg:ml-20 ">

        <img 
        className="bg-slate-500 rounded-full  w-3/6 "
        src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
      <p className=" text-3xl mx-auto ">
        {" "}
        El Precio es de : <span>{PRICE}</span>
      </p>

      <p className=" text-xl ">
        {" "}
        Precio mas Alto del dia : <span className="font-bold">{HIGHDAY}</span>
      </p>
      <p className="text-xl">
        {" "}
        El Precio mas bajo del dia :{" "}
        <span className="font-bold ">{LOWDAY}</span>
      </p>
      <p className="text-xl">
        {" "}
        El cambio en las ultimas 24 Horas:{" "}
        <span className="font-bold">{CHANGEPCT24HOUR}</span>
      </p>
      <p className="text-xl">
        {" "}
        Ultima Actualizacion del dia :
        <span className="font-bold">{LASTUPDATE}</span>
      </p>
    </div>
  );
};

export default Resultado;
