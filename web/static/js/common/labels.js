const DEFAULT_STYLE = {
  font: '65px Carbon',
  fill: 'green',
  align: 'center'
}

// createLabel :: State -> String -> Object -> Sprite
export const createLabel = function (state, message, style = DEFAULT_STYLE) {
  const {centerX, centerY} = state.world
  let label = state.add.text(centerX, centerY, message, style)
  label.stroke = '#ffffff'
  label.strokeThickness = 2
  label.setShadow(4, 4, '#333333', 4, true, false)
  return label
}
