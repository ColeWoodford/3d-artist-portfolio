import styled from "styled-components";
import ArtCard from "components/artCard/artCard";
import { CARD_CONFIGS } from "constants/cardConfigs";

function Landing() {
  const getCards = () => {
    const cardArray: any = [];

    CARD_CONFIGS.forEach((config, index) => {
      cardArray.push(<ArtCard config={config} />);
    });
    return cardArray;
  };

  return <LandingContainer>{getCards()}</LandingContainer>;
}

const LandingContainer = styled.div`
  padding: 1rem 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 20px 10px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export default Landing;
