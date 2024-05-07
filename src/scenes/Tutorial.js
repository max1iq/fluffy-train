import Phaser from "phaser"

export default class Tutorial extends Phaser.Scene {

    preload() {
        this.load.image('player', 'player.png')
        this.load.image('particles', 'player.png')
    }

    create() {
        const text = this.add.text(400, 250, 'Tutorial', {fontSize: '50px'})
        text.setOrigin(0.5, 0.5)

        const circle = this.add.circle(400, 350, 10, 0xffffff, 1)
        this.physics.add.existing(circle)
        circle.body.setCollideWorldBounds(true, 1, 1)
        circle.body.setVelocity(150, 200)
        circle.body.setBounce(1, 1)

        const bigCircle = this.add.circle(300, 350, 20, 0xffffff, 1)
        this.physics.add.existing(bigCircle)
        bigCircle.body.setCollideWorldBounds(true, 1, 1)
        bigCircle.body.setVelocity(100, 150)
        bigCircle.body.setBounce(1, 1)

        this.player = this.physics.add.sprite(100, 100, 'player')
        this.player.body.setCollideWorldBounds(true, 1, 1)
        
        const particles = this.add.particles(0, 0, 'particles', {
            speed: 0.1,
            scale: {start: 1, end: 0.5},
            blendMode: 'ADD'
        })

        particles.startFollow(this.player)

        const rectangle = this.add.rectangle(400, 410, 10, 80, 0xffffff, 1)
        this.physics.add.existing(rectangle, true)

        this.physics.add.collider(rectangle, circle)
        this.physics.add.collider(rectangle, bigCircle)
        this.physics.add.collider(circle, bigCircle)
        this.physics.add.collider(rectangle, this.player)
        this.physics.add.collider(this.player, circle)
        this.physics.add.collider(this.player, bigCircle)

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setAccelerationX(-200)
        }
        else if (this.cursors.right.isDown) {
            this.player.setAccelerationX(200)
        }
        else {
            this.player.setAccelerationX(0)
        }
        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-300)
        }
    }
}