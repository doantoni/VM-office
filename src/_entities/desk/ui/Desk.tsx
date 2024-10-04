/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { RigidBody } from '@react-three/rapier';

type GLTFResult = GLTF & {
  nodes: {
    Cube007: THREE.Mesh;
    Cube007_1: THREE.Mesh;
  };
  materials: {
    MetalBlack: THREE.MeshStandardMaterial;
    DeskWood: THREE.MeshStandardMaterial;
  };
};

export default function Desk(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF('./desk.gltf') as unknown as GLTFResult;
  return (
    <RigidBody colliders="trimesh" type="fixed" restitution={0} friction={0.7}>
      <group ref={group} position-y={-0.4} {...props} dispose={null}>
        <mesh
          castShadow
          geometry={nodes.Cube007.geometry}
          material={materials.MetalBlack}
        />
        <mesh
          castShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials.DeskWood}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload('./desk.gltf');
