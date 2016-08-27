s = Snap('#screen')
# ship = s.path("m5.1,41.6L19.1,5.7L33,41.6L18.9,33.7L5.1,41")
ship = s.polygon([5.1, 41.6, 19.1, 5.7, 33, 41.6, 18.9, 33.7, 5.1, 41, 5.1])
ship.attr
  id: "ship"
  stroke: "black"
  "stroke-linejoin": "round"
  "stroke-width": "2px"
  fill: "white"

transMat = (ship, x, y, rot) ->
  box = ship.getBBox()
  cx = box.width / 2 + box.x
  cy = box.height / 2 + box.y
  transform: "t#{x},#{y} r360,#{cx},#{cy}"

for z in [1..8]
  console.log(z)
  trans = transMat(ship, z * 10, z * 10, 360)
  ship.animate(trans, z * 1000, mina.easeIn)
