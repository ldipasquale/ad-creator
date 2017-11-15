import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './styles.sass'

const Device = ({ children, model, small }) => (
  <div
    className={cx({
      jampp__Device: true,
      'jampp__Device--small': small,
    })}
  >
    <div className="jampp__Device__Content">
      <div className={`marvel-device ${model}`}>
        <div className="top-bar" />
        <div className="sleep" />
        <div className="volume" />
        <div className="camera" />
        <div className="sensor" />
        <div className="speaker" />
        <div className="screen">
          {children}
        </div>
        <div className="home" />
        <div className="bottom-bar" />
      </div>
    </div>
  </div>
)

Device.propTypes = {
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
  model: PropTypes.node,
}

Device.defaultProps = {
  small: false,
  model: 'nexus5',
}

export default Device
