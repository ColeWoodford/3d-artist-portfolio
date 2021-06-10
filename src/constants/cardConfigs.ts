import { CardConfig } from "types/cardTypes";
import three_compass from "./imgs/three_compass.png";
import block_jump from "./imgs/block_jump.png";
import hanford_tank from "./imgs/hanford_tank.png";
import unity from "./imgs/unity.png";
import code from "./imgs/code.png";
import shmups from "./imgs/shmups.png";

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
  {
    title: "Blender Hanford Tank",
    image: hanford_tank,
    route: "/details/threeTanks",
  },
  {
    title: "Oculus Quest 2 Project Configs",
    image: unity,
    route: "https://github.com/ColeWoodford/oculus-quest2-base",
  },
  {
    title: "ThreeJS and Socket.io Example Project",
    image: code,
    route: "https://github.com/ColeWoodford/threesocket",
  },
  {
    title: "Unity 2D Shoot 'em up",
    image: shmups,
    route: "https://github.com/ColeWoodford/DinnerForShmups",
  },
];
