
export class Position {
  constructor({ x, y, z }) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

export class Camera {
  constructor(position) {
    this.position = new Position(position);
  }
}