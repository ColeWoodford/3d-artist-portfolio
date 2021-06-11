import { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MainCamera } from "three/mainCamera";
import { setupHUDOrthoScene } from "three/HUDOrthoScene";

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

function ThreeCompass() {
  const rendererRef = useRef<any>();
  const mountRef = useRef<any>();
  const sceneRef = useRef<any>();
  const sceneOrthoRef = useRef<any>();
  const mainCameraRef = useRef<any>();
  const cameraOrthoRef = useRef<any>();
  const controlsRef = useRef<any>();
  const axisWidgetRef = useRef<any>();
  const axisWidgetLookAtMeshesRef = useRef<any>();
  const axisRaycasterRef = useRef<any>();

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
    scene.background = new THREE.Color(0x121212);

    mainCameraRef.current = new MainCamera({ width, height });
    mainCameraRef.current.getCamera().position.z = -5;

    setupHUDOrthoScene({
      sceneOrthoRef,
      axisWidgetRef,
      axisRaycasterRef,
      cameraOrthoRef,
      axisWidgetLookAtMeshesRef,
      width,
      height,
    });

    controlsRef.current = new OrbitControls(
      mainCameraRef.current.getCamera(),
      rendererRef.current.domElement
    );

    mount.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

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

    const cameraOrtho = cameraOrthoRef.current;
    const camera = mainCameraRef.current.getCamera();
    cameraOrtho.position.copy(camera.position); // Copy for rotation
    cameraOrtho.position.sub(controlsRef.current.target); // Corrects for pan
    cameraOrtho.position.setLength(300); // Corrects for zoom
    cameraOrtho.lookAt(axisWidgetRef.current.position);

    axisWidgetLookAtMeshesRef.current.forEach((lookAtMesh: any) => {
      lookAtMesh.quaternion.copy(cameraOrtho.quaternion);
    });

    renderer.clear();
    renderer.setScissorTest(true);
    renderer.setScissor(0, 0, width, height);
    renderer.setViewport(0, 0, width, height);
    renderer.render(sceneRef.current, mainCameraRef.current.getCamera());

    renderer.clearDepth();
    renderer.setScissorTest(true);

    const axisRenderX = 0;
    const axisRenderY = 0;

    const axisWidgetRatio = 4;

    const minAxis = Math.min(width, height);

    const axisRenderHeight = height / axisWidgetRatio;
    const axisRenderWidth = width / axisWidgetRatio;

    cameraOrtho.zoom = minAxis / 1000;
    cameraOrtho.left = width / -2;
    cameraOrtho.right = width / 2;
    cameraOrtho.top = height / 2;
    cameraOrtho.bottom = height / -2;
    cameraOrtho.updateProjectionMatrix();

    renderer.setScissor(
      axisRenderX,
      axisRenderY,
      axisRenderWidth,
      axisRenderHeight
    );
    renderer.setViewport(
      axisRenderX,
      axisRenderY,
      axisRenderWidth,
      axisRenderHeight
    );
    renderer.render(sceneOrthoRef.current, cameraOrthoRef.current);
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

  return <MountContainer ref={mountRef} />;
}

const MountContainer = styled.div`
  width: 100%;
  height: calc(100vh - 15rem);
`;

export default ThreeCompass;
