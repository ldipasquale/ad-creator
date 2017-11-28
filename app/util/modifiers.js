import modifiers from 'constants/modifiers'
import backgroundGradients from 'constants/modifiers/backgroundGradients'

function mapModifiersToStyle(modifiersValues) {
  const style = {}
  const borderStyle = {}
  const shadowStyle = {}
  const gradientStyle = {}

  Object.entries(modifiersValues).forEach(([modifierId, modifierValue]) => {
    let styleId,
      styleValue

    switch (modifierId) {
      case modifiers.BORDER_COLOR:
        borderStyle.color = modifierValue
        break;

      case modifiers.BORDER_SIZE:
        borderStyle.size = parseInt(modifierValue, 10)
        break;

      case modifiers.SHADOW_COLOR:
        shadowStyle.color = modifierValue
        break;

      case modifiers.SHADOW_SIZE:
        shadowStyle.size = modifierValue
        break;

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

      case modifiers.BACKGROUND_GRADIENT_TYPE:
        gradientStyle.type = modifierValue
        gradientStyle.from = modifiersValues[modifiers.BACKGROUND_COLOR]
        gradientStyle.to = modifiersValues[modifiers.BACKGROUND_COLOR_TO] || '#fff'
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

  if (borderStyle.size > 0 && borderStyle.color !== undefined) {
    style.border = `${borderStyle.size}px solid ${borderStyle.color}`
    style.transform = `translateY(${borderStyle.size}px)`
  } else {
    style.border = 'none'
    style.transform = 'none'
  }

  if (shadowStyle.size > 0 && shadowStyle.color !== undefined) {
    style.boxShadow = `0 ${shadowStyle.size}px 0 ${shadowStyle.color}`
  }

  if (gradientStyle.type) {
    style.background = backgroundGradients[gradientStyle.type](gradientStyle.from, gradientStyle.to)
  }

  return style
}

export {
  mapModifiersToStyle,
}
