import styled from "@emotion/styled";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Conversion from "./components/Conversion";
import Form from "./components/Form";
import Spinner from "./components/Spinner";
import ImageCrypto from "./img/imagen-criptos.png";

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  margin: 100px auto 0 auto;
  display: block;
  width: 80%;
`;

function App() { 

  const [coins, setCoins] = useState({})
  const [conversion, setConversion] = useState({})
  const [loanding, setLoading] = useState(false)



  useEffect(() => {
    if(Object.keys(coins).length > 0) {
      const tradeCrypto = async () => {
        setLoading(true)
        const {coin, cryptoCurrency} = coins
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${coin}`
        axios.get(URL)
        .then(res => {
          setConversion(res.data.DISPLAY[cryptoCurrency][coin])
          setLoading(false)
        })
        .catch(err => console.log(err))
      }
      tradeCrypto()
    }
  }, [coins])

  return (
    <Container>
      <Image src={ImageCrypto} />

      <div>
        <Heading>Trade Cryptocurrencies Instantly!!!</Heading>
        <Form 
        setCoins={setCoins}
        />

        {loanding && <Spinner />}
        {conversion.PRICE && <Conversion conversion={conversion}/>}
      </div>
    </Container>
  );
}

export default App;
