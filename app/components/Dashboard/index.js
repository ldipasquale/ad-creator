import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from 'components/Button'
import Input from 'components/Input'
import Footer from './Footer'

import './styles.sass'

const Dashboard = ({ children }) => (
  <div className="jampp__Dashboard">
    <div className="jampp__Dashboard__Wrapper">
      <Footer>
        <Input
          label="Palette Name"
          value="OLX"
          width={300}
        />

        <div style={{ float: 'right', position: 'relative', top: '5px' }}>
          <div style={{ marginRight: '8px', display: 'inline-block' }}>
            <Button theme="danger">Discard Palette</Button>
          </div>

          <Button theme="success">Save Palette</Button>
        </div>
      </Footer>
    </div>

    <div className="jampp__Dashboard__Container">
      {children}
    </div>
  </div>
)

Dashboard.propTypes = {
}

Dashboard.defaultProps = {
}

export default Dashboard
