import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import FontAlignHandlerButton from './Button'

import './styles.sass'

const FontAlignHandler = ({ style, value, onChange }) => {
  const handleChange = (modifier, value) => onChange({
    ...value,
    [modifier]: value,
  })

  return (
    <div className="jampp__AdFieldHandler__FontAlignHandler">
      <FontAlignHandlerButton
        type="left"
        selected={value.fontAlign === 'left'}
        onChange={value => handleChange('fontAlign', 'left')}
      />

      <FontAlignHandlerButton
        type="center"
        selected={value.fontAlign === 'center'}
        onChange={value => handleChange('fontAlign', 'center')}
      />

      <FontAlignHandlerButton
        type="right"
        selected={value.fontAlign === 'right'}
        onChange={value => handleChange('fontAlign', 'right')}
      />
    </div>
  )
}

FontAlignHandler.propTypes = {
}

FontAlignHandler.defaultProps = {
}

export default FontAlignHandler
