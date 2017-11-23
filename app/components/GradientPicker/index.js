import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ColorPicker from 'components/ColorPicker'

import './styles.sass'

const GradientPicker = ({ from, to, onChange }) => (
  <div>
    <ColorPicker
      color={from}
      onChange={color => onChange(color.hex, '#999')}
    />
  </div>
)

GradientPicker.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

GradientPicker.defaultProps = {
  from: '#000',
  to: '#fff',
}

export default GradientPicker
