import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AdFieldHandlerButton from 'components/AdFieldHandler/Button'

const typesContent = {
  bold: 'B',
  italic: 'I',
  underline: 'U',
}

const FontStyleHandler = ({ type, selected, onChange }) => (
  <AdFieldHandlerButton
    className={cx({
      jampp__AdFieldHandler__FontStyleHandler__Button: true,
      [`jampp__AdFieldHandler__FontStyleHandler__Button--type-${type}`]: true,
      'jampp__AdFieldHandler__FontStyleHandler__Button--selected': selected,
    })}
    selected={selected}
    onClick={() => onChange(!selected)}
  >
    {typesContent[type]}
  </AdFieldHandlerButton>
)

FontStyleHandler.propTypes = {
  type: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

FontStyleHandler.defaultProps = {
  selected: false,
}

export default FontStyleHandler
