import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './styles.sass'

const Input = ({ label, value, width }) => (
  <div className="jampp__Input">
    <div className="jampp__Input__Label">
      {label}
    </div>

    <input
      className="jampp__Input__Control"
      {...width !== undefined && {
        style: {
          width: `${width}px`,
        },
      }}
    />
  </div>
)

Input.propTypes = {
}

Input.defaultProps = {
}

export default Input
