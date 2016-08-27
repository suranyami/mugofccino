getRandomInt = (min, max) ->
  min = Math.ceil(min)
  max = Math.floor(max)
  Math.floor(Math.random() * (max - min)) + min

s = Snap('#screen')
ship = new Ship(s)
setInterval ship.update, 100
