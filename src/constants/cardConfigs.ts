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
    description:
      "Compass widget built with Three.js using targetted material indexes on separate faces. An orthographic camera follows the users control actions for movement. The renderer is split to show two scenes at once.",
  },
  {
    title: "Multiplayer Block Jump",
    image: block_jump,
    route: "https://powerful-tundra-37029.herokuapp.com/",
    description:
      "Using Three.js and Socket.io, this multiplayer game tracks users logged in and how high they can jump up the blocks. A leaderboard displays the highscores.",
    strong:
      "Because this is hosted on heroku, please allow time for the app to spin up once clicked. ",
  },
  {
    title: "Blender Hanford Tank",
    image: hanford_tank,
    route: "/details/threeTanks",
    description:
      "A 3D model of a tank at the Hanford Nuclear Site. Created using Blender. Steps to create this model are documented below the rendered object.",
  },
  {
    title: "Oculus Quest 2 Project Configs",
    image: unity,
    route: "https://github.com/ColeWoodford/oculus-quest2-base",
    description:
      "Configuration settings for creating a Unity project for deployment to an Oculus Quest 2 VR headset. A convenient project boilerplate.",
  },
  {
    title: "ThreeJS and Socket.io Example Project",
    image: code,
    route: "https://github.com/ColeWoodford/threesocket",
    description:
      "A multiplayer game created using Three.js and Socket.io. Players control an avatar and can explore a 3D world. They can also chat with each other.",
  },
  {
    title: "Unity 2D Shoot 'em up",
    image: shmups,
    route: "https://github.com/ColeWoodford/DinnerForShmups",
    description:
      "This game was created for a 24-hour hack-a-thon in Seattle with 4 other developers. It is a 2-dimensional shoot 'em up where the player controls a ship and destroys programming bugs.",
  },
];
