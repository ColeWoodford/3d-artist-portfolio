import { useState, useEffect } from "react";
import styled from "styled-components";
import { CardConfig } from "types/cardTypes";

interface Props {
  config: CardConfig;
}

function ArtCard(props: Props) {
  const { config } = props;
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedDetail) return;
    let newWindow = window.open(`${selectedDetail}`, "_self");
    newWindow?.focus();
    setSelectedDetail(null);
  }, [selectedDetail]);

  const handleClick = () => {
    setSelectedDetail(config.route);
  };

  return (
    <Glass onClick={handleClick}>
      <ImageContainer>
        <img src={config.image} alt="card thumbnail" />
      </ImageContainer>
      {config.title}
    </Glass>
  );
}

const Glass = styled.div`
  background: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-sizing: border-box;
  box-shadow: 0px 8px 32px rgba(186, 186, 186, 0.37);
  backdrop-filter: blur(17px);
  border-radius: 10px;

  cursor: pointer;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:
    15rem minmax(28px, 1.5rem) minmax(28px, 1rem) minmax(28px, 1.5rem)
    minmax(3rem, 1fr);
  grid-template-areas:
    "image"
    "icons"
    "title"
    "type"
    "description";

  overflow: hidden;
`;

export const ImageContainer = styled.div`
  grid-area: image;
  border-bottom: 1px solid #aaa;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
  }
`;

export default ArtCard;
