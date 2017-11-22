import React from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'
import cx from 'classnames'

import './styles.sass'

const AdFieldHandlerPanel = ({ className, onRef, isOpen, children, style }) => (
  <div
    className={cx({
      jampp__AdFieldHandler__Panel: true,
      'jampp__AdFieldHandler__Panel--open': isOpen,
      [className]: className !== null,
    })}
    {...onRef && {
      ref: onRef,
    }}
    {...style && {
      style,
    }}
  >
    {children}
  </div>
)

AdFieldHandlerPanel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRef: PropTypes.func,
  style: stylePropType,
}

AdFieldHandlerPanel.defaultProps = {
  className: null,
  onRef: null,
  stylePropType: {},
}

export default AdFieldHandlerPanel
