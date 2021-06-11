import styled from "styled-components";

function Footer() {
  return <FooterContainer></FooterContainer>;
}

const FooterContainer = styled.footer`
  grid-area: footer;
  display: grid;
  align-items: center;
  justify-items: center;
  align-self: end;

  background: #414141;
  border-top: 2px solid #ffffff;
  color: #000;

  height: 5rem;
`;

export default Footer;
