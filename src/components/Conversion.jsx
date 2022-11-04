import styled from "@emotion/styled";

const Result = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 50px;
`;

const Text = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Price = styled.p`
  font-size: 26px;
  span {
    font-weight: 700;
  }
`;

const Image = styled.img`
display: block;
width: 150px;
`

const Conversion = ({ conversion }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    conversion;
  return (
    <Result>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Crypto Image" />
      <div>
        <Price>
          The Price is: <span>{PRICE}</span>
        </Price>
        <Text>
          The Highest Price of the day is: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          The Lowest Price of the day is: <span>{LOWDAY}</span>
        </Text>
        <Text>
          Last 24 Hours Variation: <span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Last Update: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </Result>
  );
};

export default Conversion;
