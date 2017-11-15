import React from 'react'
import PropTypes from 'prop-types'

const TabsItem = ({ children }) => (
  <div>{children}</div>
)

TabsItem.propTypes = {
  title: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
  path: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  icon: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  headerClassName: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  children: PropTypes.node.isRequired,
}

TabsItem.defaultProps = {
  path: null,
  icon: null,
  headerClassName: null,
}

export default TabsItem
