import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import modifiersValues from 'constants/modifiers'

import ContainerSettingsHandler from '../handlers/ContainerSettingsHandler'

const Wrapper = ({ children }) => children

const ContainerHandler = ({ onChangeModifiers, modifiers }) => (
  <Wrapper>
    <ContainerSettingsHandler
      onChange={onChangeModifiers}
      value={modifiers}
    />
  </Wrapper>
)

ContainerHandler.propTypes = {
  onChangeModifiers: PropTypes.func.isRequired,
  modifiers: PropTypes.object.isRequired,
}

export default ContainerHandler
