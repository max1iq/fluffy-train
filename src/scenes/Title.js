import Phaser from "phaser"

export default class Title extends Phaser.Scene {

    preload() {

    }

    create() {
        const text = this.add.text(600, 250, 'fluffy train', {fontSize: '50px'})
        text.setOrigin(0.5, 0.5)

        const button = this.add.text(600, 350, 'Play', {fontSize: '25px'})
            .setInteractive()
            .on('pointerdown', () => this.scene.start('levelOne'))
        button.setOrigin(0.5, 0.5)

        this.player = this.physics.add.sprite(Math.random()*1200, Math.random()*600, 'player')
        this.player.body.setAllowGravity(false)
        this.player.body.setCollideWorldBounds(true)
        this.player.body.setBounce(1, 1)
        let startanglex = Math.random()
        let startangley = Math.random()
        if(startanglex > 0.5) {
            this.player.body.setVelocityX(300)
        }else{
            this.player.body.setVelocityX(-300)
        }
        if(startangley > 0.5) {
            this.player.body.setVelocityY(300)
        }else{
            this.player.body.setVelocityY(-300)
        }
    }
}
