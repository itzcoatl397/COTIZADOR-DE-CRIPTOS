import { useEffect, useState } from "react";
import { monedas } from "../data/monedas";
import useSelectMonedas from "../hooks/useSelectMonedas";

export const Formulario = () => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);
  const [monedaCripto, SelectCriptos] = useSelectMonedas(
    "Elige tu Criptomoneda",
    criptos
  );
  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const response = await fetch(url);

      const respuesta = await response.json();

      const arrayCripto = respuesta.Data.map((cripto) => {
        const criptos = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };

        return criptos;
      });

      setCriptos(arrayCripto);
    };
    consultarApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, criptos].includes("")) {
      setError(true);
      return;
    }
  };

  return (
    <div>
      {error && (
        <div className="bg-red-600 w-7/6 p-2 mb-5 rounded-full">
        
        <h2 className="text-white font-bold text-center uppercase">Complete Los campos</h2>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptos />

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
    </div>
  );
};
