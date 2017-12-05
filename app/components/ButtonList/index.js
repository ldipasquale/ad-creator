import React from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'

import './styles.sass'

const ButtonList = ({ children, style }) => (
  <div
    className="jampp__ButtonList"
    style={style}
  >
    {children}
  </div>
)

ButtonList.propTypes = {
  children: PropTypes.node.isRequired,
  style: stylePropType,
}

ButtonList.defaultProps = {
  style: {},
}

export default ButtonList
