import Phaser from 'phaser'
import Preloader from './Preloader.js'
import MainMenu from './MainMenu.js'
import MainGame from './Game.js'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 'black',
  scene: [Preloader, MainMenu, MainGame],
}

let game = new Phaser.Game(config)
