import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";
import useSelectCurrency from "../hooks/useSelectCurrency";
import Error from "./Error";

const InputSubmit = styled.input`
  background-color: #7a7dfe;
  border: none;
  width: 100%;
  border-radius: 15px;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 22px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9796fd;
    cursor: pointer;
  }
`;

const Form = ({setCoins}) => {
  const currency = [
    { id: "USD", name: "US Dollar" },
    { id: "DOP", name: "DO Peso" },
    { id: "EUR", name: "EURO" },
    { id: "GBP", name: "Great Britain Pound" },
  ];

  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);

  const [coin, SelectCurrency] = useSelectCurrency(
    "Select your Currency",
    currency
  );
  const [cryptoCurrency, SelectCryptoCurrency] = useSelectCurrency(
    "Select your CryptoCurrency",
    cryptos
  );

  useEffect(() => {
    const consultAPI = async () => {
      const URL =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD";
      const response = await fetch(URL);
      const result = await response.json();

      const arrayCryptos = result.Data.map((crypto) => {
        const obj = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };
        return obj;
      });
      setCryptos(arrayCryptos);
    };
    consultAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([coin, cryptoCurrency].includes("")) {
      setError(true);
      return;
    }
    setError(false)
    setCoins({
      coin,
      cryptoCurrency
    })
  };

  return (
    <>
      {error && <Error>All fields are required</Error>}
      <form onSubmit={handleSubmit}>
        <SelectCurrency />
        <SelectCryptoCurrency />
        <InputSubmit type="submit" value="Trade" />
      </form>
    </>
  );
};

export default Form;
