import React from 'react'
import PropTypes from 'prop-types'

import './styles.sass'

const Input = ({
  label,
  width,
  value,
  onChange,
}) => (
  <div className="jampp__Input">
    <div className="jampp__Input__Label">
      {label}
    </div>

    <input
      className="jampp__Input__Control"
      value={value}
      onChange={e => onChange(e.value)}
      {...width !== -1 && {
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
  value: PropTypes.string,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  width: -1,
  value: null,
  onChange: null,
}

export default Input
