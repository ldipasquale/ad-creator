import React from 'react'
import PropTypes from 'prop-types'

import modifiers from 'constants/modifiers'

import FontColorHandler from './FontColorHandler'
import FontFamilyHandler from './FontFamilyHandler'

import './styles.sass'

const FontSettingsHandler = ({ value, onChange }) => (
  <span
    className="jampp__AdFieldHandler__FontSettingsHandler"
  >
    <FontColorHandler
      value={value[modifiers.FONT_COLOR]}
      onChange={color => onChange({ [modifiers.FONT_COLOR]: color })}
    />

    <FontFamilyHandler
      value={value[modifiers.FONT_FAMILY]}
      onChange={fontFamily => onChange({ [modifiers.FONT_FAMILY]: fontFamily })}
    />
  </span>
)

FontSettingsHandler.propTypes = {
  value: PropTypes.shape({
    [modifiers.FONT_COLOR]: PropTypes.string,
    [modifiers.FONT_FAMILY]: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FontSettingsHandler
