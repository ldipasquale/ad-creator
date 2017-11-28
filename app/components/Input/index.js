import React from 'react'
import PropTypes from 'prop-types'

import './styles.sass'

const Input = ({ label, width }) => (
  <div className="jampp__Input">
    <div className="jampp__Input__Label">
      {label}
    </div>

    <input
      className="jampp__Input__Control"
      {...width !== 0 && {
        style: {
          width: `${width}px`,
        },
      }}
    />
  </div>
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
  width: PropTypes.number,
}

Input.defaultProps = {
  width: 0,
}

export default Input
