import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { CirclePicker } from 'react-color'

import './styles.sass'

const ColorPicker = ({ value, onChange }) => (
  <CirclePicker
    color={value}
    onChange={color => onChange(color.hex)}
  />
)

ColorPicker.propTypes = {
}

ColorPicker.defaultProps = {
}

export default ColorPicker
