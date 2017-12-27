import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { BarLoader } from 'react-spinners'

import './styles.sass'

const Button = ({
  children, theme, onClick, isLoading,
}) => (
  <div
    className={cx({
      jampp__Button: true,
      [`jampp__Button--theme-${theme}`]: true,
    })}
    onClick={onClick}
  >
    {isLoading ? (
      <div className="jampp__Button__Loader">
        <BarLoader
          color="#fff"
          width={100}
          height={2}
        />
      </div>
    ) : children}
  </div>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['default', 'info', 'success', 'danger', 'link']),
  isLoading: PropTypes.bool,
}

Button.defaultProps = {
  onClick: null,
  theme: 'default',
  isLoading: false,
}

export default Button
