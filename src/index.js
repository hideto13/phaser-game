import Phaser from 'phaser'
import logoImg from './assets/logo.png'
import background from './assets/space3.png'
import red from './assets/red.png'

class MyGame extends Phaser.Scene {
  constructor() {
    super()
  }

  preload() {
    this.load.image('sky', background)
    this.load.image('red', red)
    this.load.image('logo', logoImg)
  }

  create() {
    this.add.image(400, 300, 'sky')
    var particles = this.add.particles('red')

    var emitter = particles.createEmitter({
      speed: 70,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    })

    const logo = this.add.image(400, 150, 'logo')

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1,
    })

    emitter.startFollow(logo)
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: MyGame,
}

const game = new Phaser.Game(config)
