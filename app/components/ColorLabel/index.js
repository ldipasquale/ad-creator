import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import backgroundGradients from 'constants/modifiers/backgroundGradients'

import './styles.sass'

const mapTypeToBackground = (type, from, to) => backgroundGradients[type](from, to)

const ColorLabel = ({
  onClick, className, value, valueTo, gradientType,
}) => (
  <div
    className={cx({
      jampp__ColorLabel: true,
      [className]: className !== null,
    })}
    onClick={onClick}
    style={{
      background: gradientType !== null ? mapTypeToBackground(gradientType, value, valueTo) : value,
    }}
  />
)

ColorLabel.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  valueTo: PropTypes.string,
  gradientType: PropTypes.string,
  onClick: PropTypes.func,
}

ColorLabel.defaultProps = {
  className: null,
  value: '#fff',
  valueTo: '#fff',
  gradientType: null,
  onClick: null,
}

export default ColorLabel
