import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import modifiers from 'constants/modifiers'

import BackgroundHandler from './BackgroundHandler'
import BorderHandler from './BorderHandler'

import './styles.sass'

const FontSettingsHandler = ({ value, onChange }) => (
  <span
    className="jampp__AdFieldHandler__FontSettingsHandler"
  >
    <BackgroundHandler
      value={value[modifiers.BACKGROUND_COLOR]}
      onChange={background => onChange({ [modifiers.BACKGROUND_COLOR]: background })}
    />

    <BorderHandler
      value={value[modifiers.BACKGROUND_COLOR]}
      onChange={background => onChange({ [modifiers.BACKGROUND_COLOR]: background })}
    />
  </span>
)

FontSettingsHandler.propTypes = {
}

FontSettingsHandler.defaultProps = {
}

export default FontSettingsHandler
