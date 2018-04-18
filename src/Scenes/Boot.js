import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor () {
    super();
  }

  init () {
    console.log('init');
  }

  create () {
    console.log('create');
    const text = new Phaser.GameObjects.Text(this, 50, 50, 'test', {
      backgroundColor: '#f0f',
    });

    Phaser.GameObjects.BuildGameObject(this, text, null);
  }

  preload () {
    console.log('preload');
  }

  update(time, delta) {
  }

  render () {
    console.log('render');
  }
}
