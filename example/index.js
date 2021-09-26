import { Engine, Scene, Render, Camera } from '../index.js';

const engine = new Engine();

const camera = new Camera({ x: 1, y: 1, z: 1 });

const scene1 = new Scene();
const scene2 = new Scene();

scene1.add();

engine.addScene('s1', scene1);
engine.addScene('s2', scene2);

const render = new Render({
  dom: '#app',
  engine,
  camera,
});

engine.switchToScene('s1');

render.setSize({
  width: window.innerWidth,
  height: window.innerHeight,
});

render.setAnimationLoop(animation);

function animation() {
  render.render();
}