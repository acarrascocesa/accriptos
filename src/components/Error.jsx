import styled from "@emotion/styled";

const Text = styled.div`
  background-color: red;
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  text-align: center;
  border-radius: 10px;
`;

const Error = ({ children }) => {
  return <Text>{children}</Text>;
};

export default Error;
