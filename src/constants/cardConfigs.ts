import { CardConfig } from "types/cardTypes";
import three_compass from "./imgs/three_compass.png";
import block_jump from "./imgs/block_jump.png";
import hanford_tank from "./imgs/hanford_tank.png";
import unity from "./imgs/unity.png";
// import code from "./imgs/code.png";
import shmups from "./imgs/shmups.png";

export const CARD_CONFIGS: CardConfig[] = [
  {
    title: "PLAY: Space Trader UI",
    image: unity,
    route: "https://tubular-naiad-609993.netlify.app/",
    description:
      "A web-based mmo game using a 3rd party API. This is a work in progress, but I am building a game that interacts with the Space Trader MMO API. Currently the user can manage their character and start the game. They can see the starting zone and move around the planets.",
    codeLink:
      "https://github.com/ColeWoodford/unity-space-trader",
  },
  {
    title: "PLAY: Clicky Crates",
    image: unity,
    route: "https://chic-taiyaki-e46dd6.netlify.app/",
    description:
      "A clicking game with a UI. Select what difficulty you want to play, then click the crates for points but avoid the skulls!",
    codeLink:
      "https://github.com/ColeWoodford/unityClickyCrates",
  },
  {
    title: "PLAY: Soccer Game",
    image: unity,
    route: "https://fluffy-daifuku-7caa16.netlify.app/",
    description:
      "Play a game of soccer against waves of enemies. At the end of each round the number of opponents increases by 1. Use the yellow powerup to send them flying!",
    codeLink:
      "https://github.com/ColeWoodford/unitySoccerWaves",
  },
  {
    title: "PLAY: Endless Runner",
    image: unity,
    route: "https://eloquent-pastelito-1806bc.netlify.app/",
    description:
      "Endless runner made with Unity. Press the spacebar to jump and double jump. Avoid obstacles while your character runs endlessly.",
    codeLink:
      "https://github.com/ColeWoodford/unityJumpScroller",
  },
  {
    title: "PLAY: Balloon Sidescroller",
    image: unity,
    route: "https://beautiful-cascaron-ddd262.netlify.app/",
    description:
      "Sidescroller game where the user controls a balloon. Press the space bar to bounce through the air. Collect money and avoid bombs or its game over!",
    codeLink:
      "https://github.com/ColeWoodford/unityBalloon",
  },
  {
    title: "DEMO: ThreeJS Compass Widget",
    image: three_compass,
    route: "/details/threeCompass",
    description:
      "Compass widget built with Three.js using targetted material indexes on separate faces. An orthographic camera follows the users control actions for movement. The renderer is split to show two scenes at once.",
    codeLink:
      "https://github.com/ColeWoodford/3d-artist-portfolio/blob/main/src/three/HUDOrthoScene.js",
  },
  {
    title: "DEMO: Blender Hanford Tank",
    image: hanford_tank,
    route: "/details/threeTanks",
    description:
      "A 3D model of a tank at the Hanford Nuclear Site. Created using Blender. Steps to create this model are documented below the rendered object.",
  },
  {
    title: "CODE: Multiplayer Block Jump",
    image: block_jump,
    // route: "https://powerful-tundra-37029.herokuapp.com/",
    route: "https://github.com/ColeWoodford/block-jump",
    description:
      "Using Three.js and Socket.io, this multiplayer game tracks users logged in and how high they can jump up the blocks. A leaderboard displays the highscores.",
    // strong:
    //   "Because this is hosted on heroku, please allow time for the app to spin up once clicked. ",
    // codeLink: "https://github.com/ColeWoodford/block-jump",
  },
  {
    title: "CODE: Oculus Quest 2 Project Configs",
    image: unity,
    route: "https://github.com/ColeWoodford/oculus-quest2-base",
    description:
      "Configuration settings for creating a Unity project for deployment to an Oculus Quest 2 VR headset. A convenient project boilerplate.",
  },
  // {
  //   title: "ThreeJS and Socket.io Example Project",
  //   image: code,
  //   route: "https://github.com/ColeWoodford/threesocket",
  //   description:
  //     "A multiplayer game created using Three.js and Socket.io. Players control an avatar and can explore a 3D world. They can also chat with each other.",
  // },
  {
    title: "CODE: Unity 2D Shoot 'em up",
    image: shmups,
    route: "https://github.com/ColeWoodford/DinnerForShmups",
    description:
      "This game was created for a 24-hour hack-a-thon in Seattle with 4 other developers. It is a 2-dimensional shoot 'em up where the player controls a ship and destroys programming bugs.",
  },
];
