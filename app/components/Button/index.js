import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './styles.sass'

const Button = ({ children, theme, onClick }) => (
  <div
    className={cx({
      jampp__Button: true,
      [`jampp__Button--theme-${theme}`]: true,
    })}
    onClick={onClick}
  >
    {children}
  </div>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['default', 'info', 'success', 'danger', 'link']),
}

Button.defaultProps = {
  onClick: null,
  theme: 'default',
}

export default Button
