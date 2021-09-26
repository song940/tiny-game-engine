
export class Context {
  constructor() {
    this.canvas = document.createElement('canvas');
  }
  getContext() {
    this.canvas.getContext('2d');
  }
}

export class Scene extends Context {
  constructor({ }) {
    this.components = [];

  }
  add(component) {
    this.components.push(component);
    return this;
  }
  loop() {
    const { canvas } = this;
    for (const component of this.components) {
      component.draw();
    }
  }
  draw() {

  }
}