import { Link } from "react-router-dom";
import styled from "styled-components";
import { GithubOutlined, HomeOutlined } from "@ant-design/icons";

function Header() {
  return (
    <HeaderContainer>
      <HomeLink to={"/home"}>
        <HomeOutlined />
        <h2>Cole Woodford's Portfolio</h2>
      </HomeLink>
      <div style={{ flex: 1 }} />
      <NavBar>
        <IconContainer href="https://github.com/ColeWoodford">
          GitHub <GitHubLink />
        </IconContainer>
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

const HomeLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  & span {
    font-size: 1.5rem;
  }
  & h2 {
    margin-left: 0.5rem;
  }
`;

const IconContainer = styled.a`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const GitHubLink = styled(GithubOutlined)`
  margin-left: 0.5rem;
  font-size: 2rem;
`;

const HeaderContainer = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;

  padding: 0 6rem;

  background: #646464;
  border-bottom: 2px solid #ffffff;
  color: #000;

  height: 5rem;
`;

export default Header;
