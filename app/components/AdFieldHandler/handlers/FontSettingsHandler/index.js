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
        onChange={() => console.log('a')}
      />

      <FontFamilyHandler
        value={value[modifiers.FONT_FAMILY]}
        onChange={() => console.log('a')}
      />
    </span>
  )
}

FontSettingsHandler.propTypes = {
}

FontSettingsHandler.defaultProps = {
}

export default FontSettingsHandler
