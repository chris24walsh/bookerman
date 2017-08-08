var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('background','assets/tall_grass_tile.png');
    game.load.spritesheet('player','assets/bookerman.png', 42, 50);
		game.load.spritesheet('paperplane','assets/paperplane.png', 35, 35);

}

var player;
var cursors;

function create() {

    game.add.tileSprite(0, 0, 1920, 1920, 'background');

    game.world.setBounds(0, 0, 1920, 1920);

    game.physics.startSystem(Phaser.Physics.P2JS);

    player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');

    game.physics.p2.enable(player);

		//  Our player animations, walking left, right, up and down.
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('right', [5, 6, 7, 8], 10, true);
		player.animations.add('up', [10, 11, 12, 13], 10, true);
    player.animations.add('down', [15, 16, 17, 18], 10, true);

		paperplane = game.add.sprite(game.world.centerX, game.world.centerY, 'paperplane');

		game.physics.p2.enable(paperplane);

		// Throwing paperplane animations
		//paperplane.animations.add('left', [0], 10, true);
		//paperplane.animations.add('right', [0], 10, true);
		//paperplane.animations.add('up', [0], 10, true);
    //paperplane.animations.add('down', [0], 10, true);

    cursors = game.input.keyboard.createCursorKeys();

		keys = game.input.keyboard;

    game.camera.follow(player);

}

var stopFrame = 19;

function update() {

    player.body.setZeroVelocity();

    if (cursors.up.isDown)
    {
        player.body.moveUp(300)
				player.animations.play('up');
				stopFrame = 14;
    }
    else if (cursors.down.isDown)
    {
        player.body.moveDown(300);
				player.animations.play('down');
				stopFrame = 19;
    }

    else if (cursors.left.isDown)
    {
        player.body.moveLeft(300);
				player.animations.play('left');
				stopFrame = 4;
    }
    else if (cursors.right.isDown)
    {
        player.body.moveRight(300);
				player.animations.play('right');
				stopFrame = 9;
    }
		else
    {
        player.animations.stop();

        player.frame = stopFrame;
    }
		if (keys.isDown(Phaser.Keyboard.SPACEBAR))
		{
			//paperplane.body.x = player.body.x;
			//paperplane.body.y = player.body.y;
			//paperplane.body.moveLeft(450);
		}

}

function render() {

    //game.debug.cameraInfo(game.camera, 32, 32);
    //game.debug.spriteCoords(player, 32, 500);

}
