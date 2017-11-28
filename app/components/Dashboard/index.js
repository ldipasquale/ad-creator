import React from 'react'
import PropTypes from 'prop-types'

import Footer from './Footer'

import './styles.sass'

const Dashboard = ({ children, footerContent }) => (
  <div className="jampp__Dashboard">
    <div className="jampp__Dashboard__Wrapper">
      <Footer>
        {footerContent}
      </Footer>
    </div>

    <div className="jampp__Dashboard__Container">
      {children}
    </div>
  </div>
)

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
  footerContent: PropTypes.node.isRequired,
}

export default Dashboard
