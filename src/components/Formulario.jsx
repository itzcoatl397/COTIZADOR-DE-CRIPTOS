import { useEffect, useState } from "react";
import { monedas } from "../data/monedas";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { Alerta } from "./Alerta";

export const Formulario = ({setMonedas}) => {
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
    setError(false);
    setMonedas({
      moneda,monedaCripto
    })
  };

  return (
    <div>
      {error && <Alerta mensaje={"Todos Los campos Son obligatorios"} />}

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
