import {useState} from "react";

const useSelectMonedas = (label, opciones) => {


    const [state,setSate]= useState('')
  const SelectMonedas = () => (
    <>
 
      <label className="block font-bold font-lato text-3xl my-2 text-white" >  {label} </label>
      <select 
      
      value={state}
      onChange={e=>setSate(e.target.value)}
      className="rounded-full w-full my-3 p-2 text-xl shadow-md  "
      >
        <option className="">Seleccione</option>
        {opciones.map(({ id, nombre }) => (
          <option key={id} value={id} className="">{nombre}</option>
        ))}
      </select>
    </>
  );
  return [state,SelectMonedas];
};

export default useSelectMonedas;
