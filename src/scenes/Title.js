import Phaser from "phaser"

export default class Title extends Phaser.Scene {

    preload() {

    }

    create() {
        const text = this.add.text(600, 250, 'fluffy train', {fontSize: '50px'})
        text.setOrigin(0.5, 0.5)

        const button = this.add.text(600, 350, 'Play', {fontSize: '25px'})
            .setInteractive()
            .on('pointerdown', () => this.scene.start('tutorial'))
        button.setOrigin(0.5, 0.5)
    }
}