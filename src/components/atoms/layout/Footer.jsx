import styled from "styled-components";
export const Footer = () => {
  return <SFotter>&copy; 2021 rito </SFotter>;
};

const SFotter = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  margin-top: 10px;
  padding: 1px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
