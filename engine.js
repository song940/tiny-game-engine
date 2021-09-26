

export class Engine {
  constructor() {
    this.scenes = new Map();
  }
  addScene(name, scene) {
    this.scenes.set(name, scene);
  }
  setCurrentScene(scene) {
    this.currentScene = scene;
    return this;
  }
  switchToScene(name) {
    const scene = this.scenes.get(name);
    if (!scene) throw new Error(`scene ${name} not found`);
    this.setCurrentScene(scene);
    return this;
  }
}