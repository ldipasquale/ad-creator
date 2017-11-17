import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import FontStyleHandlerButton from './Button'

import modifiers from 'constants/modifiers'

import './styles.sass'

const FontStyleHandler = ({ value, onChange }) => {
  const handleChange = (modifier, value) => onChange({
    ...value,
    [modifier]: value,
  })

  return (
    <div className="jampp__AdFieldHandler__FontStyleHandler">
      <FontStyleHandlerButton
        type="bold"
        selected={value[modifiers.IS_FONT_BOLD]}
        onChange={value => handleChange(modifiers.IS_FONT_BOLD, value)}
      />

      <FontStyleHandlerButton
        type="italic"
        selected={value[modifiers.IS_FONT_ITALIC]}
        onChange={value => handleChange(modifiers.IS_FONT_ITALIC, value)}
      />

      <FontStyleHandlerButton
        type="underline"
        selected={value[modifiers.IS_FONT_UNDERLINE]}
        onChange={value => handleChange(modifiers.IS_FONT_UNDERLINE, value)}
      />
    </div>
  )
}

FontStyleHandler.propTypes = {
}

FontStyleHandler.defaultProps = {
}

export default FontStyleHandler
