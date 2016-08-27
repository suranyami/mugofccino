class @Ship2
  constructor: (@paper) ->
    @ship = @paper.polygon([5.1, 41.6, 19.1, 5.7, 33, 41.6, 18.9, 33.7, 5.1, 41])
    @ship.attr
      id: "ship"
      stroke: "black"
      "stroke-linejoin": "round"
      "stroke-width": "2px"
      fill: "white"

  setPos: (x, y, rot, duration) ->
    box = @ship.getBBox()
    cx = box.width / 2 + box.x
    cy = box.height / 2 + box.y
    trans =
      transform: "t#{x},#{y} r#{rot},#{cx},#{cy}"
    document.getElementById("x").innerHTML = x
    document.getElementById("y").innerHTML = y
    @ship.animate(trans, duration)
