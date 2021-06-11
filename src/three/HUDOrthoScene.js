import * as THREE from "three";

const axisWidgetMainColor = 0x3399ff;
const axisWidgetLetterColor = 0x80c1ff;

/**
 * Setup orthographic scene used for HUD elements.
 * @param {*} param0
 */
export const setupHUDOrthoScene = ({
  sceneOrthoRef,
  axisWidgetRef,
  axisRaycasterRef,
  cameraOrthoRef,
  axisWidgetLookAtMeshesRef,
  width,
  height,
}) => {
  sceneOrthoRef.current = new THREE.Scene();
  sceneOrthoRef.current.background = new THREE.Color(0x121212);
  axisWidgetRef.current = new THREE.Group();

  setupOrthoCamera(cameraOrthoRef, width, height);
  setupAxisWidget(axisWidgetRef, sceneOrthoRef, axisWidgetLookAtMeshesRef);
  axisRaycasterRef.current = new THREE.Raycaster();
};

const setupOrthoCamera = (cameraOrthoRef, width, height) => {
  cameraOrthoRef.current = new THREE.OrthographicCamera(
    width / -2,
    width / 2,
    height / 2,
    height / -2,
    1,
    20000
  );
  const cameraOrtho = cameraOrthoRef.current;
  cameraOrtho.rotation.order = "YXZ";
};

const setupAxisWidget = (
  axisWidgetRef,
  sceneOrthoRef,
  axisWidgetLookAtMeshesRef
) => {
  const sceneOrtho = sceneOrthoRef.current;
  axisWidgetLookAtMeshesRef.current = [];

  let geometry = new THREE.SphereGeometry(200, 32, 32);
  const backgroundGeometry = new THREE.TorusGeometry(200, 7, 32, 32);
  const solidDoubleSideMaterial = new THREE.MeshBasicMaterial({
    color: axisWidgetMainColor,
    vertexColors: THREE.FaceColors,
    side: THREE.DoubleSide,
  });
  const solidOneSideMaterial = new THREE.MeshBasicMaterial({
    color: axisWidgetMainColor,
    vertexColors: THREE.FaceColors,
  });
  const solidBackSideMaterial = new THREE.MeshBasicMaterial({
    color: axisWidgetMainColor,
    vertexColors: THREE.FaceColors,
    side: THREE.BackSide,
  });
  const opaqueMaterial = new THREE.MeshBasicMaterial({
    opacity: 0.2,
    color: 0x414141,
    transparent: true,
  });

  // Iterate through faces in middle ring to create solid and dashed line
  for (let i = 992; i < 1056; i++) {
    if (i % 4 === 0) {
      geometry.faces[i].materialIndex = 2;
      geometry.faces[i + 1].materialIndex = 2;
    } else {
      if (geometry.faces[i].materialIndex !== 2)
        geometry.faces[i].materialIndex = 1;
    }
  }

  // Spheres containing compass
  let shapeGeometry = new THREE.Mesh(geometry, [
    opaqueMaterial,
    solidDoubleSideMaterial,
    solidOneSideMaterial,
  ]);

  let backgroundRing = new THREE.Mesh(
    backgroundGeometry,
    solidBackSideMaterial
  );
  backgroundRing.scale.set(1.03, 1.03, 1.03);
  axisWidgetLookAtMeshesRef.current.push(backgroundRing);
  shapeGeometry.geometry.colorsNeedUpdate = true;
  shapeGeometry.name = "axisContainer";

  sceneOrthoRef.current.add(shapeGeometry);
  sceneOrthoRef.current.add(backgroundRing);

  // Top cone y-axis
  geometry = new THREE.ConeGeometry(20, 40, 32);
  let material = new THREE.MeshBasicMaterial({ color: axisWidgetMainColor });
  shapeGeometry = new THREE.Mesh(geometry, material);
  shapeGeometry.rotateX(Math.PI);
  shapeGeometry.name = "yCone";
  axisWidgetRef.current.add(shapeGeometry);
  shapeGeometry.position.y = 235;

  // Compass needles
  const needleGeometry = new THREE.ConeGeometry(40, 175, 3);
  const redNeedleMaterial = new THREE.MeshBasicMaterial({ color: 0xff3333 });
  const redNeedle = new THREE.Mesh(needleGeometry, redNeedleMaterial);
  redNeedle.name = "redNeedle";
  redNeedle.rotateX(Math.PI / 2);
  redNeedle.rotateY(Math.PI);
  redNeedle.position.set(0, 0, 87.5);
  axisWidgetRef.current.add(redNeedle);

  const whiteNeedleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const whiteNeedle = new THREE.Mesh(needleGeometry, whiteNeedleMaterial);
  whiteNeedle.name = "whiteNeedle";
  whiteNeedle.rotateX(-Math.PI / 2);
  whiteNeedle.position.set(0, 0, -87.5);
  axisWidgetRef.current.add(whiteNeedle);

  // Direction text
  let loader = new THREE.FontLoader();
  loader.load(
    "https://cdn.rawgit.com/mrdoob/three.js/master/examples/fonts/helvetiker_regular.typeface.json",
    function (font) {
      geometry = new THREE.TextGeometry("N", {
        font: font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 4,
        bevelSegments: 5,
      });

      const northMaterial = new THREE.MeshBasicMaterial({
        color: axisWidgetLetterColor,
      });
      let mesh = new THREE.Mesh(geometry, northMaterial);
      mesh.position.set(0, 0, 250);
      mesh.scale.multiplyScalar(0.5);
      mesh.name = "nText";
      axisWidgetRef.current.add(mesh);
      axisWidgetLookAtMeshesRef.current.push(mesh);

      geometry = new THREE.TextGeometry("S", {
        font: font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 4,
        bevelSegments: 5,
      });

      const southMaterial = new THREE.MeshBasicMaterial({
        color: axisWidgetLetterColor,
      });

      mesh = new THREE.Mesh(geometry, southMaterial);
      mesh.position.set(0, 0, -250);
      mesh.scale.multiplyScalar(0.5);
      mesh.name = "sText";
      axisWidgetRef.current.add(mesh);
      axisWidgetLookAtMeshesRef.current.push(mesh);

      geometry = new THREE.TextGeometry("W", {
        font: font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 4,
        bevelSegments: 5,
      });

      const westMaterial = new THREE.MeshBasicMaterial({
        color: axisWidgetLetterColor,
      });

      mesh = new THREE.Mesh(geometry, westMaterial);
      mesh.position.set(250, 0, 0);
      mesh.scale.multiplyScalar(0.5);
      mesh.name = "wText";
      axisWidgetRef.current.add(mesh);
      axisWidgetLookAtMeshesRef.current.push(mesh);

      geometry = new THREE.TextGeometry("E", {
        font: font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 4,
        bevelSegments: 5,
      });

      const eastMaterial = new THREE.MeshBasicMaterial({
        color: axisWidgetLetterColor,
      });

      mesh = new THREE.Mesh(geometry, eastMaterial);
      mesh.position.set(-250, 0, 0);
      mesh.scale.multiplyScalar(0.5);
      mesh.name = "eText";
      axisWidgetRef.current.add(mesh);
      axisWidgetLookAtMeshesRef.current.push(mesh);
    }
  );

  sceneOrtho.add(axisWidgetRef.current);
};
