import Phaser from "phaser"

import Title from './scenes/Title'
import Tutorial from "./scenes/Tutorial"

const config = {
    width: 800,
    height: 500,
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
game.scene.add('tutorial', Tutorial)

game.scene.start('title')