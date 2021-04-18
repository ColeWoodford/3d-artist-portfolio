import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <Link to={"/home"}>
        <h2>Cole Woodford's Portfolio</h2>
      </Link>
      <NavBar>
        <div>nav1</div>
        <div>nav2</div>
        <div>nav3</div>
        <div>nav4</div>
        <div>nav5</div>
      </NavBar>
    </HeaderContainer>
  );
}

const NavBar = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  padding: 10px;

  @media (max-width: 500px) {
    grid-auto-flow: row;
  }
`;

const HeaderContainer = styled.header`
  content-area: header;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  align-items: center;

  background: #ffffff;
  color: #000;
`;

export default Header;
