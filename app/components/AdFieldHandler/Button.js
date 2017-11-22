import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './styles.sass'

const AdFieldHandlerButton = ({
  className, onClick, children, style, selectedClassName, selected,
}) => (
  <span
    className={cx({
        jampp__AdFieldHandler__Button: true,
        [selectedClassName]: selected,
        [className]: true,
      })}
    onClick={onClick}
    style={style}
  >
    {children}
  </span>
)

AdFieldHandlerButton.propTypes = {
  selectedClassName: PropTypes.string,
}

AdFieldHandlerButton.defaultProps = {
  selectedClassName: 'jampp__AdFieldHandler__Button--selected',
}

export default AdFieldHandlerButton
