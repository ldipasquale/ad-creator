import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const FontFamilyLabel = ({ children, selected, onClick }) => (
  <span
    className={cx({
      jampp__AdFieldHandler__FontSettingsHandler__FontFamilyHandler__Label: true,
      'jampp__AdFieldHandler__FontSettingsHandler__FontFamilyHandler__Label--selected': selected,
    })}
    style={{
      fontFamily: children,
    }}
    onClick={() => onClick(children)}
  >
    {children}
  </span>
)

FontFamilyLabel.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

FontFamilyLabel.defaultProps = {
  selected: false,
}

export default FontFamilyLabel
