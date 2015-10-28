class @Ship
  TICK_SIZE = 0.1 # seconds
  ROT_PER_TICK = 10.0 # degrees
  ANGLE_CONVERSION = 180.0 * Math.PI
  THRUST_SCALE = 0.1

  constructor: (@space) ->
    @idle()
    @level()
    @location = new Vector 100.0, 100.0
    @velocity = new Vector 0.0, 0.0
    @tick = 0
    @rotation = 0.0
    @thrust = 0.0
    @steering = new Steering(this)
    @thruster = new Thruster(this)
    @appearance = @lineAt(@location, @velocity)
    @appearance.attr("stroke", "red")
    @appearance.attr("width", "1")

  level: ->   @rotThrust =  0.0
  spinCW: ->  @rotThrust =  1.0
  spinCCW: -> @rotThrust = -1.0

  lineAt: (origin, direction) ->
    @space.path("M#{@location.x},#{@location.y}l#{@velocity.x},#{@velocity.y}z")

  stop: ->
    @level()
    @idle()
    @velocity = new Vector 0, 0

  idle: ->      @thrust =  0
  forward: ->   @thrust =  1
  backward: ->  @thrust = -1

  update: (newTick) ->
    ticks = (newTick - @tick) * TICK_SIZE
    $("#tick").text(newTick)
    rotAmount = ROT_PER_TICK * ticks
    $("#rotAmount").text(rotAmount)
    @rotation += rotAmount * @rotThrust
    @flames.show() if @thrust != 0
    @flames.hide() if @thrust == 0
    @velocity.add @thrustVector(@rotation + 180, @thrust * ticks)

    @location.add @velocity
    @appearance = @lineAt(@location, @velocity)

    $("#location").text "#{@format @location.x}, #{@format @location.y}"
    $("#velocity").text "#{@format @velocity.x}, #{@format @velocity.y}"
    $("#rotation").text "#{@format @rotation}°"
    @tick = newTick

  format: (n) ->
    new Number(n).toFixed(2)

  radians: (degrees) ->
    (degrees + 90.0) / ANGLE_CONVERSION

  thrustVector: (angle, thrust) ->
    ang_rad = @radians(angle)
    thrust = new Vector((thrust * Math.cos(ang_rad)), (thrust * Math.sin(ang_rad)))
    thrust.scale THRUST_SCALE
