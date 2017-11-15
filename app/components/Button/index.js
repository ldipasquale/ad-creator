import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './styles.sass'

const Button = ({ children, theme }) => (
  <div
    className={cx({
      jampp__Button: true,
      [`jampp__Button--theme-${theme}`]: true,
    })}
  >
    {children}
  </div>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['default', 'info', 'success', 'danger', 'link']),
}

Button.defaultProps = {
  theme: 'default',
}

export default Button
