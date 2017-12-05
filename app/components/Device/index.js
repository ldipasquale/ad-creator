import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './styles.sass'

const Device = ({ children, model, landscape }) => (
  <div
    className={cx({
      jampp__Device: true,
      'jampp__Device--landscape': landscape,
    })}
  >
    <div className="jampp__Device__Content">
      <div
        className={cx({
          jampp__Device__Model: true,
          [`jampp__Device__Model--${model}`]: true,
          [`jampp__Device__Model--${model}--landscape`]: landscape,
        })}
      >
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
  landscape: PropTypes.bool,
  model: PropTypes.node,
}

Device.defaultProps = {
  landscape: false,
  model: 'nexus5',
}

export default Device
