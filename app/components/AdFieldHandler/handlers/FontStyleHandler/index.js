import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import FontStyleHandlerButton from './Button'

import './styles.sass'

const FontStyleHandler = ({ style, value, onChange }) => {
  const handleChange = (modifier, value) => onChange({
    ...value,
    [modifier]: value,
  })

  return (
    <div className="jampp__AdFieldHandler__FontStyleHandler">
      <FontStyleHandlerButton
        type="bold"
        selected={value.fontBold}
        onChange={value => handleChange('fontBold', value)}
      />

      <FontStyleHandlerButton
        type="italic"
        selected={value.fontItalic}
        onChange={value => handleChange('fontItalic', value)}
      />

      <FontStyleHandlerButton
        type="underline"
        selected={value.fontUnderline}
        onChange={value => handleChange('fontUnderline', value)}
      />
    </div>
  )
}

FontStyleHandler.propTypes = {
}

FontStyleHandler.defaultProps = {
}

export default FontStyleHandler
