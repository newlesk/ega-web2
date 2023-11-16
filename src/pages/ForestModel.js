import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage, useGLTF, PresentationControls, OrbitControls } from '@react-three/drei';
import { withRouter } from "react-router";
import "./CSS/ForestModel.css"

function Model(props) {
    const { scene } = useGLTF("/Volkswagen_model/scene.gltf");
    
    return <primitive object={scene} {...props} />
  }

const ForestModel = ({ modelPath }) => {

    return (
        <div className="App">
        <h2>Forest Model</h2>
        <Canvas class = "3dmodel" dpr={[1,2]} shadows camera={{ fov: 45 }} style={{"position": "absolute"}}>
        <color attach="background" args={["#101010"]} />
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
            <Stage environment={"sunset"}>
            <Model scale={0.01} />
            </Stage>
        </PresentationControls>
        </Canvas>
        </div>
    );
  };

export default withRouter(ForestModel);