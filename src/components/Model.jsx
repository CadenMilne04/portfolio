/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/model.glb");
  return (
    <group ref={props.innerRef} {...props} dispose={null}>
      <group position={[1.23, -0.652, 0.622]} scale={0.24}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.018}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group
              position={[-282.878, -66.332, -142.962]}
              rotation={[-Math.PI / 2, 0, 0.878]}
              scale={100}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard_1_Material001_0.geometry}
                material={materials["Material.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard_1_Material006_0.geometry}
                material={materials["Material.006"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard_1_Material007_0.geometry}
                material={materials["Material.007"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard_1_Material002_0.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard_1_Material004_0.geometry}
                material={materials["Material.004"]}
              />
            </group>
            <group
              position={[-217.089, 316.787, -225.179]}
              rotation={[-Math.PI / 2, 0, 0.878]}
              scale={100}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.monitor_1_Material001_0.geometry}
                material={materials["Material.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.monitor_1_Material006_0.geometry}
                material={materials["Material.006"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.monitor_1_Material007_0.geometry}
                material={materials["Material.007"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.monitor_1_Material009_0.geometry}
                material={materials["Material.009"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.monitor_1_Material002_0.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.monitor_1_Material004_0.geometry}
                material={materials["Material.004"]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/model.glb");