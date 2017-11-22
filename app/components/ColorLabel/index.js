import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './styles.sass'

const ColorLabel = ({ className, value }) => (
  <span
    className={cx({
      jampp__ColorLabel: true,
      [className]: className !== null,
    })}
    style={{
      backgroundColor: value,
    }}
  />
)

ColorLabel.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
}

ColorLabel.defaultProps = {
  className: null,
  value: '#fff',
}

export default ColorLabel
