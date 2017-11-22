import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const FontFamilyLabel = ({ children, selected, onClick }) => (
  <div
    className={cx({
      jampp__AdFieldHandler__FontSettingsHandler__FontFamilyHandler__Label: true,
      "jampp__AdFieldHandler__FontSettingsHandler__FontFamilyHandler__Label--selected": selected,
    })}
    style={{
      fontFamily: children,
    }}
    onClick={() => onClick(children)}
  >
    {children}
  </div>
)

FontFamilyLabel.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default FontFamilyLabel
