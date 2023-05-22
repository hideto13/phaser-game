import Phaser from 'phaser'
export default class MainMenu extends Phaser.Scene {
  constructor() {
    super('MainMenu')

    this.music
  }

  create() {
    let background = this.add.image(400, 300, 'space3')

    this.tweens.add({
      targets: background,
      alpha: { from: 0, to: 1 },
      duration: 1000,
    })

    const fontStyle = {
      fontFamily: 'Arial',
      fontSize: 48,
      color: '#ffffff',
      fontStyle: 'bold',
      padding: 16,
      shadow: {
        color: '#000000',
        fill: true,
        offsetX: 2,
        offsetY: 2,
        blur: 4,
      },
    }

    this.add.text(
      20,
      20,
      'High Score: ' + this.registry.get('highscore'),
      fontStyle
    )

    var particles = this.add.particles('red')

    var emitter = particles.createEmitter({
      speed: 70,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    })

    let logo = this.add.image(400, -200, 'logo')

    emitter.startFollow(logo)
    logo.setInteractive({ cursor: 'pointer' })

    if (!this.music) {
      this.music = this.sound.play('music', { loop: true })
    }

    this.tweens.add({
      targets: logo,
      y: 300,
      ease: 'bounce.in',
      duration: 1200,
    })

    logo.on('pointerdown', () => {
      this.scene.start('MainGame')
    })
  }
}
