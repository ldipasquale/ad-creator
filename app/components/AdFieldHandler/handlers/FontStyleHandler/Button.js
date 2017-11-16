import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const typesContent = {
  bold: 'B',
  italic: 'I',
  underline: 'U',
}

const FontStyleHandler = ({ type, selected, onChange }) => (
  <div
    className={cx({
      jampp__AdFieldHandler__FontStyleHandler__Button: true,
      [`jampp__AdFieldHandler__FontStyleHandler__Button--type-${type}`]: true,
      'jampp__AdFieldHandler__FontStyleHandler__Button--selected': selected,
    })}
    onClick={() => onChange(!selected)}
  >
    {typesContent[type]}
  </div>
)

FontStyleHandler.propTypes = {
  type: PropTypes.string.isRequired,
  selected: PropTypes.bool,
}

FontStyleHandler.defaultProps = {
  selected: false,
}

export default FontStyleHandler
