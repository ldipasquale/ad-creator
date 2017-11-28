import React from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'
import cx from 'classnames'

import './styles.sass'

const AdFieldHandlerButton = ({
  className, selectedClassName, onClick, children, style, selected,
}) => (
  <span
    className={cx({
        jampp__AdFieldHandler__Button: true,
        [selectedClassName]: selected,
        [className]: className !== null,
      })}
    onClick={onClick}
    style={style}
  >
    {children}
  </span>
)

AdFieldHandlerButton.propTypes = {
  className: PropTypes.string,
  selectedClassName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  style: stylePropType,
  selected: PropTypes.bool,
}

AdFieldHandlerButton.defaultProps = {
  className: null,
  selectedClassName: 'jampp__AdFieldHandler__Button--selected',
  style: {},
  selected: false,
}

export default AdFieldHandlerButton
