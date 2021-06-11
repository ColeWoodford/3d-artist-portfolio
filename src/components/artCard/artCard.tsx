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
      <ImageContainer style={{ height: "15rem" }}>
        <img src={config.image} alt="card thumbnail" />
      </ImageContainer>
      <TitleContainer>{config.title}</TitleContainer>

      <DescriptionContainer>
        {config.strong && <StrongContainer>{config.strong}</StrongContainer>}
        {config.description}
      </DescriptionContainer>
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

const TitleContainer = styled.h2`
  margin: 0;
  padding: 0 1rem;
`;

const DescriptionContainer = styled.div`
  padding: 0 1rem;
`;

const StrongContainer = styled.span`
  color: #506aff;
  font-weight: 700;
`;

export default ArtCard;
