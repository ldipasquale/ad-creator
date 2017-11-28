import modifiers from 'constants/modifiers'
import fontAlignValues from 'constants/modifiers/fontAlign'

function get() {
  return Promise.resolve({
    modifiers: {
      container: {
        [modifiers.BACKGROUND_COLOR]: '#333',
        [modifiers.BORDER_COLOR]: '#000',
      },
      adContainer: {
        [modifiers.BACKGROUND_COLOR]: '#fff',
        [modifiers.BORDER_COLOR]: '#000',
      },
      headline: {
        [modifiers.FONT_FAMILY]: 'Helvetica Neue',
        [modifiers.FONT_COLOR]: '#000',
        [modifiers.IS_FONT_BOLD]: true,
        [modifiers.FONT_ALIGN]: fontAlignValues.LEFT,
      },
      promoText: {
        [modifiers.FONT_FAMILY]: 'Helvetica Neue',
        [modifiers.FONT_COLOR]: '#566650',
        [modifiers.IS_FONT_BOLD]: false,
        [modifiers.FONT_ALIGN]: fontAlignValues.LEFT,
      },
      callToAction: {
        [modifiers.FONT_FAMILY]: 'Helvetica Neue',
        [modifiers.FONT_COLOR]: '#fff',
        [modifiers.BACKGROUND_COLOR]: '#00D061',
        [modifiers.IS_FONT_BOLD]: true,
        [modifiers.FONT_ALIGN]: fontAlignValues.CENTER,
        [modifiers.BORDER_COLOR]: '#000',
      },
    },
  })
}

export default {
  get,
}
