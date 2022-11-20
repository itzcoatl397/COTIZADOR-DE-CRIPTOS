import { useEffect } from "react";
import { monedas } from "../data/monedas";
import useSelectMonedas from "../hooks/useSelectMonedas";

export const Formulario = () => {
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);

  useEffect(() => {
    const consultarApi = async()=>{
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10tsym=USD";
        
        const response = await fetch(url)

        const respuesta = await response.json()
        console.log(respuesta);
    }
    consultarApi()
  }, []);

  return (
    <form>
      <SelectMonedas />
      {moneda}
      <input
        type="submit"
        value="Cotizar"
        className="bg-indigo-500 w-full p-2.5 rounded-full 
        cursor-pointer
        text-white font-bold uppercase text-2.5xl 
         hover:bg-indigo-700 
         transition duration-3s hover:text-white"
      />
    </form>
  );
};
