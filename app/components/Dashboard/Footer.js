import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './styles.sass'

const Footer = ({ children }) => (
  <div className="jampp__Dashboard__Footer">
    {children}
  </div>
)

Footer.propTypes = {
}

Footer.defaultProps = {
}

export default Footer
