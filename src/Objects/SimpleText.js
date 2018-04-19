import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Text {
  constructor (config) {
    super(
      config.scene,
      config.x,
      config.y,
      config.text,
      config.styles,
    );

    this.dir = 1;
  }

  update (time, delta) {
    this.x += 20 / delta * this.dir;

    if (this.x > 300) this.dir = -1;
    else if (this.x < 50) this.dir = 1;
  }
}