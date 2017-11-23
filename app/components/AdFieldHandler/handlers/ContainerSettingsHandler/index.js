import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import modifiers from 'constants/modifiers'

import BackgroundHandler from './BackgroundHandler'
import BorderHandler from './BorderHandler'
import ShadowHandler from './ShadowHandler'

import './styles.sass'

const ContainerSettingsHandler = ({ value, onChange }) => (
  <span
    className="jampp__AdFieldHandler__FontSettingsHandler"
  >
    <BackgroundHandler
      value={value[modifiers.BACKGROUND_COLOR]}
      onChange={background => onChange({ [modifiers.BACKGROUND_COLOR]: background })}
    />

    <BorderHandler
      value={{
        [modifiers.BORDER_COLOR]: value[modifiers.BORDER_COLOR],
        [modifiers.BORDER_SIZE]: value[modifiers.BORDER_SIZE] || 0,
      }}
      onChange={onChange}
    />

    <ShadowHandler
      value={{
        [modifiers.SHADOW_COLOR]: value[modifiers.SHADOW_COLOR],
        [modifiers.SHADOW_SIZE]: value[modifiers.SHADOW_SIZE] || 0,
      }}
      onChange={onChange}
    />
  </span>
)

ContainerSettingsHandler.propTypes = {
}

ContainerSettingsHandler.defaultProps = {
}

export default ContainerSettingsHandler
