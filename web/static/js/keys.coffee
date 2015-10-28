class @Keys
  LEFT = 37
  UP = 38
  RIGHT = 39
  DOWN = 40
  SPACEBAR = 32
  HIGHLIGHT = 'red'
  DEFAULT = 'white'

  constructor: () ->
    @keys = [0, 0]
    $(document).keydown (e) =>
      key = e.which
      console.log @keys
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
      return false
      
    $(document).keyup (e) =>
      key = e.which
      console.log @keys
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
      return false
      