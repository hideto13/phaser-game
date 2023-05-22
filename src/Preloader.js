import Phaser from 'phaser'
import red from '../assets/red.png'
import background from '../assets/background.png'
import logo from '../assets/logo.png'
import space3 from '../assets/space3.png'
import emojis from '../assets/emojis.png'
import emojisJson from '../assets/emojis.json'

import musicOgg from '../assets/sounds/music.ogg'
import musicMp3 from '../assets/sounds/music.mp3'
import musicM4a from '../assets/sounds/music.m4a'

import countdownOgg from '../assets/sounds/countdown.ogg'
import countdownMp3 from '../assets/sounds/countdown.mp3'
import countdownM4a from '../assets/sounds/countdown.m4a'

import matchOgg from '../assets/sounds/match.ogg'
import matchMp3 from '../assets/sounds/match.mp3'
import matchM4a from '../assets/sounds/match.m4a'

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

    this.load.image('red', red)
    this.load.image('background', background)
    this.load.image('logo', logo)
    this.load.image('space3', space3)
    this.load.atlas('emojis', emojis, emojisJson)

    //  Audio ...

    this.load.audio('music', [musicOgg, musicM4a, musicMp3])
    this.load.audio('countdown', [countdownOgg, countdownM4a, countdownMp3])
    this.load.audio('match', [matchOgg, matchM4a, matchMp3])
  }

  create() {
    this.scene.start('MainMenu')
  }
}
