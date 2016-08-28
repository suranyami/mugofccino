window.onload = function() {
  var assetPath = $(document.body).data("image-path")
  var player
  var platforms
  var cursors
  var stars
  var score = 0
  var scoreText

  var game = new Phaser.Game(800, 600,
    Phaser.AUTO, 'screen',
    {
      preload: preload,
      create: create,
      update: update
    })

  function imageFor(name) {
    return assetPath + '/' + name + '.png'
  }

  function loadImage(name) {
    game.load.image(name, imageFor(name))
  }

  function preload () {
    loadImage('phaser')
    loadImage('sky')
    loadImage('platform')
    loadImage('star')
    game.load.spritesheet('dude', imageFor('dude'), 32, 48)
  }

  function create () {
    game.physics.startSystem(Phaser.Physics.ARCADE)
    game.add.sprite(0, 0, 'sky')
    platforms = game.add.group()
    platforms.enableBody = true
    ground = platforms.create(0, game.world.height - 64, 'platform')
    ground.scale.setTo(2, 2)
    ground.body.immovable = true

    var ledge1 = platforms.create(400, 400, 'platform')
      .body.immovable = true
    var ledge2 = platforms.create(-150, 250, 'platform')
      .body.immovable = true

    player = game.add.sprite(32, game.world.height - 150, 'dude')
    game.physics.arcade.enable(player)
    player.body.bounce.y = 0.2
    player.body.gravity.y = 500
    player.body.collideWorldBounds = true
    player.animations.add('left', [0, 1, 2, 3], 10, true)
    player.animations.add('right', [5, 6, 7, 8], 10, true)

    cursors = game.input.keyboard.createCursorKeys()

    stars = game.add.group()
    stars.enableBody = true
    for (var i = 0; i < 12; i++) {
      var star = stars.create(i * 70, 0, 'star')
      star.body.gravity.y = 20
      star.body.bounce.y = 0.7 + Math.random() * 0.2
    }
    scoreText = game.add.text(16, 16, 'Score: 0', {fontSize: '32px', fill: '#000'})
  }

  function collectStar(player, star) {
      star.kill()
      score += 10
      scoreText.text = 'Score: ' + score
  }

  function update() {
    game.physics.arcade.collide(player, platforms)
    game.physics.arcade.collide(stars, platforms)
    game.physics.arcade.overlap(player, stars, collectStar, null, this)
    player.body.velocity.x = 0
    if (cursors.left.isDown) {
      player.body.velocity.x = -150
      player.animations.play('left')
    } else if (cursors.right.isDown) {
      player.body.velocity.x = 150
      player.animations.play('right')
    } else {
      player.animations.stop()
      player.frame = 4
    }
    if (cursors.up.isDown && player.body.touching.down) {
        player.body.velocity.y = -550;
    }
  }
};
