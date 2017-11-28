import React from 'react'
import PropTypes from 'prop-types'

import './styles.sass'

const Footer = ({ children }) => (
  <div className="jampp__Dashboard__Footer">
    {children}
  </div>
)

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Footer
