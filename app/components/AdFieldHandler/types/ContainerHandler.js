import React from 'react'
import PropTypes from 'prop-types'

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
  modifiers: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default ContainerHandler
