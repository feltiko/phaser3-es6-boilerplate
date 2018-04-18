import Phaser from 'phaser';

import BootScene from './Scenes/Boot';

import initConfig from './Config';

class Game extends Phaser.Game {
  constructor () {
    super (
      initConfig([
        new BootScene()
      ])
    );
  }
}

const game = new Game();
console.log(game);
