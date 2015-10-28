require './keys'

window.Game = class @Game
  constructor: () ->

window.onload = ->
  paper = Raphael('screen', 600, 400)
  paper.clear()
    
  circle = paper.circle(300, 200, 60)
  params = 
    fill: "blue",
    stroke: "white",
    "stroke-width": 80,
    "stroke-opacity": 0.5
    
  circle.animate params, 2000
  
  keys = new Keys()


# class @Game
#   DECAY_AMOUNT = 0.9
#   HEIGHT = 600
#   WIDTH  = 800
# 
#   constructor: () ->
#     @connect()
#     @setupKeyHandling()
#     @space = Raphael("space", WIDTH, HEIGHT)
#     @ship = new Ship @space
#     @tick = 0
# 
#   ARROWS = {left: 37, up: 38, right: 39, down: 40}
# 
#   setupKeyHandling: () ->
#     $(document).keydown (e) =>
#       key = e.which
#       console.log key
#       switch key
#         when ARROWS['left']  then @ship.steering.leftDown()
#         when ARROWS['right'] then @ship.steering.rightDown()
#         when ARROWS['up']    then @ship.thruster.thrustDown()
#         when ARROWS['down']  then @ship.thruster.backDown()
#         when 32              then @ship.thruster.stop()
#       false
# 
#     $(document).keyup (e) =>
#       key = e.which
#       console.log key
#       switch key
#         when ARROWS['left']  then @ship.steering.leftUp()
#         when ARROWS['right'] then @ship.steering.rightUp()
#         when ARROWS['up']    then @ship.thruster.thrustUp()
#         when ARROWS['down']  then @ship.thruster.backUp()
#       false
# 
#       # @socket.send char
# 
#   connect: ->
#     @socket = new WebSocket("ws://localhost:8080")
#     @socket.onopen = () ->
#     @socket.onmessage = (mess) ->
#       if mess
#         $("#last_sent").text mess.data
# 
#   update: ->
#     @tick += 1
#     @ship.update(@tick)
#     @wrap()
# 
#   grid: ->
#     @
# 
#   wrap: ->
#     @ship.location.x = @ship.location.x - WIDTH if @ship.location.x > WIDTH
#     @ship.location.x = @ship.location.x + WIDTH if @ship.location.x < 0
# 
#     @ship.location.y = @ship.location.y - HEIGHT if @ship.location.y > HEIGHT
#     @ship.location.y = @ship.location.y + HEIGHT if @ship.location.y < 0
# 
# $(document).ready ->
#   window.game = new Game
#   window.game.update()
#   setInterval((-> window.game.update()), 10)
