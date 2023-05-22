import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('Preloader')

    this.loadText
  }

  preload() {
    this.registry.set('highscore', 0)
    this.loadText = this.add.text(400, 360, 'Loading ...', {
      fontFamily: 'Arial',
      fontSize: 80,
      color: '#e3f2ed',
    })

    this.loadText.setOrigin(0.5)
    this.loadText.setStroke('#203c5b', 6)
    this.loadText.setShadow(2, 2, '#2d2d2d', 4, true, false)

    this.load.setPath('assets/')
    this.load.image(['red', 'background', 'space3', 'logo'])
    this.load.atlas('emojis', 'emojis.png', 'emojis.json')

    //  Audio ...
    this.load.setPath('assets/sounds/')

    this.load.audio('music', ['music.ogg', 'music.m4a', 'music.mp3'])
    this.load.audio('countdown', [
      'countdown.ogg',
      'countdown.m4a',
      'countdown.mp3',
    ])
    this.load.audio('match', ['match.ogg', 'match.m4a', 'match.mp3'])
  }

  create() {
    this.scene.start('MainMenu')
  }
}