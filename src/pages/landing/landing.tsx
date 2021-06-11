import styled from "styled-components";
import ArtCard from "components/artCard/artCard";
import { CARD_CONFIGS } from "constants/cardConfigs";

function Landing() {
  const getCards = () => {
    const cardArray: any = [];

    CARD_CONFIGS.forEach((config, index) => {
      cardArray.push(<ArtCard config={config} key={index} />);
    });
    return cardArray;
  };

  return <LandingContainer>{getCards()}</LandingContainer>;
}

const LandingContainer = styled.div`
  width: 100%;
  height: 100%;

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

  background: linear-gradient(-45deg,#1f1f1f, #c9c8c8);
  /* background: linear-gradient(-45deg,#1f1f1f, #c9c8c8, #6394ff, #103ffa); */
  /* background-size: 400% 400%; */
  /* animation: gradient 15s ease infinite; */
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export default Landing;
