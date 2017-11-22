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
