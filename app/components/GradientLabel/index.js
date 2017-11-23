import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './styles.sass'

const backgroundTypes = {
  linear: (from, to) => `linear-gradient(0, ${from}, ${to})`,
  radial: (from, to) => `radial-gradient(circle at center, ${from}, ${to})`,
}

const mapTypeToBackground = (type, from, to) => backgroundTypes[type](from, to)

const GradientLabel = ({ className, from, to, type }) => (
  <span
    className={cx({
      jampp__GradientLabel: true,
      [className]: className !== null,
    })}
    style={{
      background: mapTypeToBackground(type, from, to),
    }}
  />
)

GradientLabel.propTypes = {
  className: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
}

GradientLabel.defaultProps = {
  className: null,
  from: '#000',
  to: '#fff',
  type: 'linear',
}

export default GradientLabel
