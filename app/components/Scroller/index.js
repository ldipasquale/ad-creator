import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './styles.sass'

const Scroller = ({ children, className }) => (
  <div
    className={cx({
      jampp__Scroller: true,
      [className]: className !== null,
    })}
  >
    {children}
  </div>
)

Scroller.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Scroller.defaultProps = {
  className: null,
}

export default Scroller
