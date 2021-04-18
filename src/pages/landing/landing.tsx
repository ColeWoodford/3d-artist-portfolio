import styled from "styled-components";
import ArtCard from "components/artCard/artCard";

function Landing() {
  const getCards = () => {
    const cardArray = [];

    //TODO: Replace this with info loaded from backend?
    for (let i = 0; i < 12; i++) {
      cardArray.push(<ArtCard detailId={i} />);
    }
    return cardArray;
  };

  return <LandingContainer>{getCards()}</LandingContainer>;
}

const LandingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 75px;
  grid-gap: 20px 10px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export default Landing;
