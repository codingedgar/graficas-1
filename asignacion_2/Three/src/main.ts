import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const geometry = new THREE.BufferGeometry();
const sqrt3 = Math.sqrt(3) / 2;
const vertices = new Float32Array([
  // Vertice 1
  0.0,
  1.0,
  0.0,
  // Vertice 2
  -sqrt3,
  -0.5,
  0.0,
  // Vertice 3
  sqrt3,
  -0.5,
  0.0,
]);
geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

const colors = new Float32Array([
  // Color 1
  1.0, 0.0, 0.0,
  // Color 2
  0.0, 1.0, 0.0,
  // Color 3
  0.0, 0.0, 1.0,
]);
geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

const material = new THREE.MeshBasicMaterial({
  vertexColors: true,
  side: THREE.DoubleSide,
});
const triangle = new THREE.Mesh(geometry, material);
scene.add(triangle);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);
