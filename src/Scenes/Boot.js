import Phaser from 'phaser';

import SimpleText from '../Objects/SimpleText';

export default class extends Phaser.Scene {
  constructor () {
    super();

    this.simpleText = null;
  }

  init () {
    console.log('init');
  }

  create () {
    this.simpleText = new SimpleText({
      scene: this,
      x: 60,
      y: 70,
      text: 'Simple text',
      styles: {
        backgroundColor: '#f0f',
      },
    });

    this.add.existing(this.simpleText);
  }

  preload () {
    console.log('preload');
  }

  update(time, delta) {
    this.simpleText.update(time, delta);
  }
}
