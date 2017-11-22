import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './styles.sass'

const AdFieldHandlerPanel = ({
  className, onRef, isOpen, children,
}) => (
  <div
    className={cx({
      jampp__AdFieldHandler__Panel: true,
      'jampp__AdFieldHandler__Panel--open': isOpen,
      [className]: className !== null,
    })}
    {...onRef && {
      ref: onRef,
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
}

AdFieldHandlerPanel.defaultProps = {
  className: null,
  onRef: null,
}

export default AdFieldHandlerPanel
