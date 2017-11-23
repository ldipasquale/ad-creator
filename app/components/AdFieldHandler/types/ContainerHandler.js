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
      value={modifiers}
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
