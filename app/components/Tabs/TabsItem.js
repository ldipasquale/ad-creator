import React from 'react'
import PropTypes from 'prop-types'

const TabsItem = ({ children }) => (
  <div>{children}</div>
)

TabsItem.propTypes = {
  title: PropTypes.oneOfType([ // eslint-disable-line react/no-unused-prop-types
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
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
