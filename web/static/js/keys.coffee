class @Keys
  UP = 38
  DOWN = 40
  LEFT = 37
  RIGHT = 39
  SPACEBAR = 32
  HIGHLIGHT = 'red'
  DEFAULT = 'white'

  constructor: (updateFunc) ->
    @keys = [0, 0]
    $(document).keydown (e) =>
      key = e.which
      switch key
        when LEFT
          @keys[0] = -1
          $('.left').css(color: HIGHLIGHT)
        when RIGHT
          @keys[0] =  1
          $('.right').css(color: HIGHLIGHT)
        when UP
          @keys[1] =  1
          $('.up').css(color: HIGHLIGHT)
        when DOWN
          @keys[1] = -1
          $('.down').css(color: HIGHLIGHT)
        when SPACEBAR
          @keys = [0, 0]
          $('.arrows span').css(color: DEFAULT)
      updateFunc(@keys)
      return false

    $(document).keyup (e) =>
      key = e.which
      switch key
        when LEFT
          @keys[0] =  0
          $('.left').css(color: DEFAULT)
        when RIGHT
          @keys[0] =  0
          $('.right').css(color: DEFAULT)
        when UP
          @keys[1] =  0
          $('.up').css(color: DEFAULT)
        when DOWN
          @keys[1] =  0
          $('.down').css(color: DEFAULT)
      updateFunc(@keys)
      return false
