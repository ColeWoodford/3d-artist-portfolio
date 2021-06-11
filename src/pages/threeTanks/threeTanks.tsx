import { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
//@ts-ignore
import tankModel from "../../constants/imgs/tank_v2.glb";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MainCamera } from "three/mainCamera";
import { INSTRUCTION_STEPS } from "constants/instructionSteps";

function ThreeTanks() {
  const rendererRef = useRef<any>();
  const mountRef = useRef<any>();
  const sceneRef = useRef<any>();
  const mainCameraRef = useRef<any>();
  const controlsRef = useRef<any>();

  function isWebglEnabled() {
    const canvasToTestWebGL = document.createElement("canvas");
    const isWebGLRenderingContext =
      canvasToTestWebGL.getContext("webgl") ||
      canvasToTestWebGL.getContext("experimental-webgl");
    return (
      isWebGLRenderingContext &&
      isWebGLRenderingContext instanceof WebGLRenderingContext
    );
  }

  useEffect(() => {
    if (isWebglEnabled()) {
      rendererRef.current = new THREE.WebGLRenderer({ antialias: false });
    } else {
      alert("WebGL is not enabled in this browser!");
      return;
    }
    const renderer = rendererRef.current;
    const mount = mountRef.current;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    sceneRef.current = new THREE.Scene();
    const scene = sceneRef.current;
    scene.background = new THREE.Color(0xaaaaaa);

    mainCameraRef.current = new MainCamera({ width, height });
    mainCameraRef.current.getCamera().position.z = 4;
    mainCameraRef.current.getCamera().position.y = 2;

    controlsRef.current = new OrbitControls(
      mainCameraRef.current.getCamera(),
      rendererRef.current.domElement
    );

    mount.appendChild(renderer.domElement);

    renderer.setSize(width, height);
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0);

    const ambLight = new THREE.AmbientLight(0x404040, 3);
    scene.add(ambLight);
    const dirLight = new THREE.DirectionalLight(0xffffcc, 1);
    dirLight.position.set(-30, 40, 40);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.left = -500;
    dirLight.shadow.camera.right = 500;
    dirLight.shadow.camera.top = 500;
    dirLight.shadow.camera.bottom = -500;
    dirLight.shadow.camera.near = 300;
    dirLight.shadow.camera.far = 1100;
    scene.add(dirLight);

    const dirLightBack = new THREE.DirectionalLight(0xffffcc, 0.3);
    dirLightBack.position.set(30, 0, -40);
    dirLightBack.castShadow = true;
    dirLightBack.shadow.mapSize.width = 2048;
    dirLightBack.shadow.mapSize.height = 2048;
    dirLightBack.shadow.camera.left = -500;
    dirLightBack.shadow.camera.right = 500;
    dirLightBack.shadow.camera.top = 500;
    dirLightBack.shadow.camera.bottom = -500;
    dirLightBack.shadow.camera.near = 300;
    dirLightBack.shadow.camera.far = 1100;
    scene.add(dirLightBack);

    const loader = new GLTFLoader();
    loader.load(tankModel, (gltf) => {
      const model = gltf.scene.children[0];
      model.name = "tank";
      scene.add(model);
    });

    handleCanvasResizeUpdates();
    renderer.setAnimationLoop(() => {
      handleCanvasResizeUpdates();
      animate();
    });
    return () => {
      rendererRef.current.setAnimationLoop(() => {});
      mountRef.current = null;
    };
  });

  const animate = () => {
    const renderer = rendererRef.current;
    const mount = mountRef.current;

    if (renderer == null || mount == null) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    renderer.clear();
    renderer.setScissorTest(true);
    renderer.setScissor(0, 0, width, height);
    renderer.setViewport(0, 0, width, height);
    renderer.render(sceneRef.current, mainCameraRef.current.getCamera());
  };

  const handleCanvasResizeUpdates = () => {
    if (rendererRef.current != null && mountRef.current != null) {
      const { clientWidth, clientHeight } = mountRef.current;

      const canvas = rendererRef.current.domElement;
      const canvasWidth = canvas.clientWidth;
      const canvasHeight = canvas.clientHeight;

      const canvasWidthNeedsUpdated = canvasWidth !== clientWidth;
      const canvasHeightNeedsUpdated = canvasHeight !== clientHeight;

      if (canvasWidthNeedsUpdated || canvasHeightNeedsUpdated) {
        const camera = mainCameraRef.current.getCamera();
        const aspect = clientWidth / clientHeight;
        camera.aspect = aspect;
        camera.updateProjectionMatrix();
        rendererRef.current.setPixelRatio(window.devicePixelRatio);
        rendererRef.current.setSize(clientWidth, clientHeight);
      }
    }
  };

  return (
    <PageContainer>
      <h1>End Result:</h1>
      <MountContainer ref={mountRef} />
      {INSTRUCTION_STEPS.map((step, index) => (
        <StepContainer key={`step-${index}`}>
          <h1>{`Step ${index + 1}`}</h1>
          <div>{step.instructions}</div>
          {step.images.map((img, imgIndex) => (
            <StyledImg
              key={`step${index}-${imgIndex}`}
              src={img}
              alt={`step ${index} image`}
            />
          ))}
        </StepContainer>
      ))}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 5rem;
`;

const StepContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledImg = styled.img`
  height: auto;
  width: 50%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const MountContainer = styled.div`
  width: 50%;
  height: calc(100vh - 15rem);
`;

export default ThreeTanks;
