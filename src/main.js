import Phaser from 'phaser'

import Title from './scenes/Title'
import LevelOne from './scenes/LevelOne'

const config = {
    width: 1200,
    height: 600,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 },
            debug: false
        }
    }
}

const game = new Phaser.Game(config)

game.scene.add('title', Title)
game.scene.add('levelOne', LevelOne)

game.scene.start('title')