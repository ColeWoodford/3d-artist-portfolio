import { CardConfig } from "types/cardTypes";
import three_compass from "./imgs/three_compass.png";
import block_jump from "./imgs/block_jump.png";

export const CARD_CONFIGS: CardConfig[] = [
  {
    title: "ThreeJS Compass Widget",
    image: three_compass,
    route: "/details/threeCompass",
  },
  {
    title: "Multiplayer Block Jump",
    image: block_jump,
    route: "https://powerful-tundra-37029.herokuapp.com/",
  },
];
