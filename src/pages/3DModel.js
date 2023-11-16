import React, { useRef, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';

function Model({ modelPath }) {
  const [modelLoaded, setModelLoaded] = useState(false);
  const modelRef = useRef();

  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = window.THREE.PCFSoftShadowMap;
      }}
    >
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
      <mesh
        ref={modelRef}
        onPointerOver={() => setModelLoaded(true)}
        scale={modelLoaded ? [1, 1, 1] : [0.1, 0.1, 0.1]}
      >
        <primitive object={modelPath} dispose={null} />
      </mesh>
    </Canvas>
  );
}

export default Model;