import React from 'react'
import PropTypes from 'prop-types'

import modifiers from 'constants/modifiers'

import FontStyleHandlerButton from './Button'

import './styles.sass'

const FontStyleHandler = ({ value, onChange }) => {
  const handleChange = (modifier, modifierValue) => onChange({
    ...value,
    [modifier]: modifierValue,
  })

  return (
    <div className="jampp__AdFieldHandler__FontStyleHandler">
      <FontStyleHandlerButton
        type="bold"
        selected={value[modifiers.IS_FONT_BOLD]}
        onChange={isFontBold => handleChange(modifiers.IS_FONT_BOLD, isFontBold)}
      />

      <FontStyleHandlerButton
        type="italic"
        selected={value[modifiers.IS_FONT_ITALIC]}
        onChange={isFontItalic => handleChange(modifiers.IS_FONT_ITALIC, isFontItalic)}
      />

      <FontStyleHandlerButton
        type="underline"
        selected={value[modifiers.IS_FONT_UNDERLINE]}
        onChange={isFontUnderline => handleChange(modifiers.IS_FONT_UNDERLINE, isFontUnderline)}
      />
    </div>
  )
}

FontStyleHandler.propTypes = {
  value: PropTypes.shape({
    [modifiers.IS_FONT_BOLD]: PropTypes.bool,
    [modifiers.IS_FONT_ITALIC]: PropTypes.bool,
    [modifiers.IS_FONT_UNDERLINE]: PropTypes.bool,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FontStyleHandler
