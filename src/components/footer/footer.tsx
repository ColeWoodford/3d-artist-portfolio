import styled from "styled-components";

function Footer() {
  return <FooterContainer>footer</FooterContainer>;
}

const FooterContainer = styled.footer`
  grid-area: footer;
  display: grid;
  align-items: center;
  justify-items: center;

  background: #ffffff;
  color: #000;
`;

export default Footer;
