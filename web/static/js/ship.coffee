class @Ship
  TICK_SIZE = 0.1 # seconds
  ROT_PER_TICK = 10.0 # degrees
  THRUST_PER_TICK = 10.0
  ANGLE_CONVERSION = 180.0 * Math.PI
  THRUST_SCALE = 1.0

  constructor: (@paper) ->
    @makeShape()
    @location = new Vector 100.0, 100.0
    @velocity = new Vector 0.0, 0.0
    @tick = 0
    @rotation = 0.0
    @thrust = 0.0
    @rotThrust = 0.0
    @keys = new Keys (keys) =>
      @rotThrust = keys[0]
      @thrust = keys[1]
      # console.log("rotThrust = ", @rotThrust)
      # console.log("thrust = ", @thrust)
    # @steering = new Steering(this)
    # @thruster = new Thruster(this)

  render: (ship) =>
    ship.attr({x: @location.x, y: @location.y, rotate: @rotation})
    console.log(ship.attr())

  stop: ->
    @level()
    @idle()
    @velocity = new Vector 0, 0

  update: () =>
    @rotation += ROT_PER_TICK * @rotThrust
    @velocity = @thrustVector(@rotation, @thrust * THRUST_PER_TICK)
    @location.add @velocity
    console.log("thrust = ", @thrust)
    console.log("rotThrust = ", @rotThrust)
    console.log("rotation = ", @rotation)
    console.log("velocity = ", @velocity)
    console.log("location = ", @location)
    @render(@ship)

  format: (n) ->
    new Number(n).toFixed(2)

  radians: (degrees) ->
    (degrees + 90.0) / ANGLE_CONVERSION

  thrustVector: (angle, thrust) ->
    ang_rad = @radians(angle - 180)
    thrust = new Vector((thrust * Math.cos(ang_rad)), (thrust * Math.sin(ang_rad)))
    thrust.scale THRUST_SCALE

  makeShape: =>
    @ship = @paper.polygon([5.1, 41.6, 19.1, 5.7, 33, 41.6, 18.9, 33.7, 5.1, 41])
    @ship.attr
      id: "ship"
      stroke: "black"
      "stroke-linejoin": "round"
      "stroke-width": "2px"
      fill: "white"
