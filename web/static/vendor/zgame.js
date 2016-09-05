// window.onload = function() {
//   var assetPath = document.body.dataset.assetPath
//   var imagePath = `${assetPath}images`
//   var soundPath = `${assetPath}sounds`
//   var player
//   var starfield
//   var cursors
//   var score = 0
//   var scoreText
//   var playerInfo
//   var screenWidth, screenHeight, midWidth, midHeight
//
//   var ACCLERATION = 600
//   var DRAG = 400
//   var MAXSPEED = 400
//   var BULLET_SPEED = 400;
//   var BULLET_FIRE_RATE = 250;
//
//   var bullet
//   var bullets
//   var bulletTime = 0
//
//   var aliens
//   var explosion
//   var explosions
//   var explosionSound
//   var blaster
//
//   var game = new Phaser.Game(800, 600,
//     Phaser.AUTO, 'screen',
//     {
//       preload: preload,
//       create: create,
//       update: update,
//       render: render
//     })
//
//     function imageFor(name) {
//       return imagePath + '/' + name + '.png'
//     }
//
//     function loadImage(name, filename = name) {
//       game.load.image(name, imageFor(filename))
//     }
//
//     function preload () {
//       loadImage('starfield')
//       loadImage('player')
//       loadImage('invader', 'enemy-blue')
//       loadImage('bullet')
//       game.load.spritesheet('explosion', imageFor('explode'), 128, 128)
//
//       game.load.audio('explosion', soundPath + '/explosion.mp3');
//       game.load.audio('blaster', soundPath + '/blaster.mp3');
//     }
//
//     function create () {
//       game.renderer.clearBeforeRender = false
//       game.renderer.roundPixels = true
//       game.physics.startSystem(Phaser.Physics.ARCADE)
//       screenWidth = game.world.width
//       screenHeight = game.world.height
//       midWidth = screenWidth / 2.0
//       midHeight = screenHeight / 2.0
//
//       starfield = game.add.tileSprite(0, 0, 800, 600, 'starfield')
//
//       aliens = game.add.group()
//       aliens.enableBody = true
//       aliens.physicsBodyType = Phaser.Physics.ARCADE
//
//       createAliens()
//
//       bullets = game.add.weapon(30, 'bullet')
//       bullets.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS
//       bullets.bulletSpeed = BULLET_SPEED
//       bullets.fireRate = BULLET_FIRE_RATE
//
//       explosionSound = game.add.audio('explosion')
//       blaster = game.add.audio('blaster')
//       game.sound.setDecodedCallback([explosion, blaster], start, this);
//
//       bullets.onFire.add(function() {
//         blaster.play()
//       })
//       game.physics.enable(bullets, Phaser.Physics.ARCADE)

//       player = game.add.sprite(midWidth, midHeight, 'player')
//       player.anchor.setTo(0.5, 0.5)
//       game.physics.enable(player, Phaser.Physics.ARCADE)
//
//       player.body.maxVelocity.setTo(MAXSPEED, MAXSPEED)
//       player.body.drag.setTo(DRAG, DRAG)
//
//       explosions = game.add.group()
//       explosions.createMultiple(30, 'explosion')
//       explosions.forEach(setupInvader, this)
//
//       cursors = game.input.keyboard.createCursorKeys()
//       game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR])
//
//       bullets.trackSprite(player, 0, 0, true)
//     }
//
//     function start() {
//       console.log("start called")
//       // Add stuff here for when after big files load, I guess?
//     }
//
//     function setupInvader (invader) {
//       invader.anchor.x = 0.5;
//       invader.anchor.y = 0.5;
//       invader.animations.add('explosion');
//     }
//
//     function createAliens () {
//       for (var x = 0; x < 4; x++) {
//         var alien = aliens.create(x * 100, 100, 'invader');
//         alien.anchor.setTo(0.5, 0.5)
//         alien.height = 75
//         alien.width = 60
//         alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
//         alien.play('fly');
//         alien.body.moves = false;
//       }
//     }
//
//     function update() {
//       if (cursors.up.isDown) {
//         game.physics.arcade.accelerationFromRotation(player.rotation, 300, player.body.acceleration)
//       } else {
//         player.body.acceleration.set(0)
//       }
//
//       if (cursors.left.isDown) {
//         player.body.angularVelocity = -300
//       } else if (cursors.right.isDown) {
//         player.body.angularVelocity = 300
//       } else {
//         player.body.angularVelocity = 0
//       }
//
//       if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
//         bullets.fire()
//       }
//
//       game.world.wrap(player, 16, true)
//       game.physics.arcade.overlap(bullets.bullets, aliens, collisionHandler, null, this);
//       game.physics.arcade.overlap(player, aliens, collisionHandler, null, this);
//   }
//
//   function collisionHandler (bullet, alien) {
//     //  When a bullet hits an alien we kill them both
//     bullet.kill();
//     alien.kill();
//
//     //  And create an explosion :)
//     explosion = explosions.getFirstExists(false);
//     explosion.reset(alien.body.x, alien.body.y);
//     explosion.play('explosion', 30, false, true);
//     explosionSound.play()
//   }
//
//   function render() {
//     game.debug.text(game.time.now, 32, 32)
//     // bullets.debug()
//     // for (var i = 0; i < aliens.length; i++) {
//     //     game.debug.body(aliens.children[i]);
//     // }
//   }
// }
