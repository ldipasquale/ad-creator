import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import modifiersValues from 'constants/modifiers'

import FontStyleHandler from '../handlers/FontStyleHandler'
import FontAlignHandler from '../handlers/FontAlignHandler'
import FontSettingsHandler from '../handlers/FontSettingsHandler'

const Wrapper = ({ children }) => children

const TextHandler = ({ onChangeModifiers, modifiers }) => (
  <Wrapper>
    <FontStyleHandler
      onChange={onChangeModifiers}
      value={{
        [modifiersValues.IS_FONT_BOLD]: modifiers[modifiersValues.IS_FONT_BOLD],
        [modifiersValues.IS_FONT_ITALIC]: modifiers[modifiersValues.IS_FONT_ITALIC],
        [modifiersValues.IS_FONT_UNDERLINE]: modifiers[modifiersValues.IS_FONT_UNDERLINE],
      }}
    />

    <FontAlignHandler
      onChange={value => onChangeModifiers({ [modifiersValues.FONT_ALIGN]: value })}
      value={modifiers[modifiersValues.FONT_ALIGN]}
    />

    <FontSettingsHandler
      onChange={onChangeModifiers}
      value={{
        [modifiersValues.FONT_COLOR]: modifiers[modifiersValues.FONT_COLOR],
        [modifiersValues.FONT_FAMILY]: modifiers[modifiersValues.FONT_FAMILY],
      }}
    />
  </Wrapper>
)

TextHandler.propTypes = {
  selectedClassName: PropTypes.string,
}

TextHandler.defaultProps = {
  selectedClassName: 'jampp__AdFieldHandler__Button--selected',
}

export default TextHandler