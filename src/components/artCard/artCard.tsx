import { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

interface Props {
  detailId: number;
}

function ArtCard(props: Props) {
  const { detailId } = props;
  const [selectedDetail, setSelectedDetail] = useState<number | null>(null);

  const handleClick = () => {
    setSelectedDetail(detailId);
  };

  if (selectedDetail) return <Redirect to={`/details/${selectedDetail}`} />;

  return <Glass onClick={handleClick}>Card</Glass>;
}

const Glass = styled.div`
  background: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-sizing: border-box;
  box-shadow: 0px 8px 32px rgba(186, 186, 186, 0.37);
  backdrop-filter: blur(17px);
  border-radius: 10px;

  cursor: pointer;
`;

export default ArtCard;
