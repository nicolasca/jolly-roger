import React, { useRef, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Model from "./Ship";
import { Box, Cloud, Clouds, Loader, OrbitControls, PerspectiveCamera, Plane, Stage, useTexture } from "@react-three/drei";

const PirateScene = () => {
  return (
    <>
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[-20, 40, 30]} fov={20} />
          <ambientLight intensity={0.05} />
          <directionalLight
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={1}
            shadow-camera-far={50}
            shadow-camera-top={50}
            shadow-camera-right={50}
            shadow-camera-bottom={-50}
            shadow-camera-left={-50}
            castShadow
            position={[0, 7, 50]}
            intensity={2}
          />

          <Model rotation-y={Math.PI} />
          <Plane rotation={[-Math.PI / 2, 0, 0]} receiveShadow args={[100, 100, 16, 16]} material-color="#48C5CE" />
          <Clouds material={THREE.MeshBasicMaterial} position={[0, 10, 0]}>
            <Cloud castShadow segments={40} bounds={[40, 5, 40]} volume={5} color="white" concentrate="random" growth={3} />
            {/* <Cloud seed={1} scale={2} volume={5} color="white" fade={100} /> */}
          </Clouds>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default PirateScene;
