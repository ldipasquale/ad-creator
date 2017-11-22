import modifiers from 'constants/modifiers'

function mapModifiersToStyle(modifiersValues) {
  const style = {}

  Object.entries(modifiersValues).forEach(([modifierId, modifierValue]) => {
    let styleId,
      styleValue

    switch (modifierId) {
      case modifiers.FONT_COLOR:
        styleId = 'color'
        break;

      case modifiers.FONT_FAMILY:
        styleId = 'fontFamily'
        break;

      case modifiers.FONT_ALIGN:
        styleId = 'textAlign'
        break;

      case modifiers.BACKGROUND_COLOR:
        styleId = 'background'
        break;

      case modifiers.IS_FONT_BOLD:
        styleId = 'fontWeight'
        styleValue = modifierValue ? 600 : 400
        break;

      case modifiers.IS_FONT_ITALIC:
        styleId = 'fontStyle'
        styleValue = modifierValue ? 'italic' : 'normal'
        break;

      case modifiers.IS_FONT_UNDERLINE:
        styleId = 'textDecoration'
        styleValue = modifierValue ? 'underline' : 'none'
        break;
    }

    if (styleId) {
      style[styleId] = styleValue || modifierValue
    }
  })

  return style
}

export {
  mapModifiersToStyle,
}
