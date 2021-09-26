
export class Render {
  constructor({ engine, dom } = {}) {
    if (typeof dom === 'string')
      dom = document.querySelector(dom);
    this.domElement = dom || document.createElement('canvas');
    this.engine = engine;
    requestAnimationFrame(() => this.loop());
  }
  loop() { }
  setSize({ width, height } = {}) {
    this.domElement.width = width;
    this.domElement.height = height;
    return this;
  }
  setAnimationLoop(loop) {
    this.loop = loop;
    return this;
  }
  render() {
    const canvas = this.domElement;
    const { currentScene } = this.engine;
    currentScene.draw(canvas);
    return this;
  }
}