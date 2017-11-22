import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import modifiersValues from 'constants/modifiers'

import ContainerSettingsHandler from '../handlers/ContainerSettingsHandler'

const Wrapper = ({ children }) => children

const TextHandler = ({ onChangeModifiers, modifiers }) => (
  <Wrapper>
    <ContainerSettingsHandler
      onChange={onChangeModifiers}
      value={{
        [modifiersValues.BACKGROUND_COLOR]: modifiers[modifiersValues.BACKGROUND_COLOR],
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
