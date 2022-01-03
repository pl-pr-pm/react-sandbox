import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container_>
      <p>Styled Components</p>
      <button>FIGHT</button>
    </Container_>
  );
};

const Container_ = styled.div`
  background-color: green;
  border: solid;
  border-radius: 15px;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
