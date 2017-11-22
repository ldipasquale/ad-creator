import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import modifiers from 'constants/modifiers'

import FontColorHandler from './FontColorHandler'
import FontFamilyHandler from './FontFamilyHandler'

import './styles.sass'

const FontSettingsHandler = ({ value, onChange }) => {
  return (
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
}

FontSettingsHandler.propTypes = {
}

FontSettingsHandler.defaultProps = {
}

export default FontSettingsHandler
