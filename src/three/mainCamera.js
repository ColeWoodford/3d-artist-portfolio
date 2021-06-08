import * as THREE from "three";

export class MainCamera {
  camera;

  constructor({ width, height }) {
    this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 20000);
    this.camera.rotation.order = "YXZ";
  }

  getCamera() {
    return this.camera;
  }

  /**
   * Update the camera rotation and rotation refs to new values
   */
  updateCameraRotation({
    xyRotRef,
    zRotRef,
    xyRotation,
    zRotation,
    controlsRef,
  }) {
    this.camera.rotation.y = xyRotation;
    this.camera.rotation.x = zRotation;
    xyRotRef.current = xyRotation;
    zRotRef.current = zRotation;
    controlsRef.current.update();
  }

  /**
   * Update the camera position and position refs to new values
   */
  updateCameraPosition({ cameraPositionRef, cameraPosition, controlsRef }) {
    this.camera.position.x = cameraPosition.x;
    this.camera.position.y = cameraPosition.y;
    this.camera.position.z = cameraPosition.z;
    cameraPositionRef.current = cameraPosition;
    controlsRef.current.update();
  }

  /**
   * Set the camera so that it frames a set of points.
   * Alternative: @SEE https://discourse.threejs.org/t/camera-zoom-to-fit-object/936/32
   * @param {Object} param0
   * @param {THREE.Vector3[]} param0.points Array of vertex data to fit camera to
   * @param {number} param0.offset Scalar to multiply position by to give the camera some padding
   * @param {*} param0.onSetViewportDefaultPosition
   * @param {*} param0.controlsRef Scene controls ref
   * @param {THREE.Scene} param0.scene Main scene the camera belongs to: used for debugging
   * @param {boolean} param0.debugMode Should the display show helpful elements to help with debugging
   */
  fitCameraToPoints({
    points,
    offset,
    onSetViewportDefaultPosition,
    controlsRef,
    scene,
    debugMode,
  }) {
    offset = offset || 1.25;

    const boundingBox = new THREE.Box3();
    const boundingSphere = new THREE.Sphere();

    //get bounding sphere of points - this will be used to setup camera
    boundingBox.setFromPoints(points);
    boundingBox.getBoundingSphere(boundingSphere);

    const center = boundingBox.getCenter();

    let cameraOffset = boundingSphere.radius;

    cameraOffset *= offset; //zoom out a little so that objects don't fill the entire screen

    // DEVELOPMENT HELPERS
    if (debugMode) {
      const centerGeo = new THREE.BoxGeometry(1, 1000, 1);
      const centerMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const centerHelperCube = new THREE.Mesh(centerGeo, centerMat);
      centerHelperCube.position.set(center.x, center.y, center.z);
      scene.add(centerHelperCube);
      const helper = new THREE.Box3Helper(
        boundingBox,
        new THREE.Color(0, 255, 0)
      );
      scene.add(helper);
    }

    this.camera.position.x = 0;
    this.camera.position.z = -cameraOffset; // Negative z points the camera North
    this.camera.position.y = cameraOffset;

    controlsRef.current.target.set(center.x, center.y, center.z);
    controlsRef.current.update();

    this.camera.lookAt(center);
    this.camera.updateProjectionMatrix();

    onSetViewportDefaultPosition({
      x: 0,
      y: cameraOffset,
      z: -cameraOffset,
    });
  }
}
