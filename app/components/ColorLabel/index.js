import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './styles.sass'

const ColorLabel = ({ value }) => (
  <span
    className="jampp__ColorLabel"
    style={{
      backgroundColor: value,
    }}
  />
)

ColorLabel.propTypes = {
}

ColorLabel.defaultProps = {
}

export default ColorLabel
