import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import fontAlignValues from 'constants/modifiers/fontAlign'

import FontAlignHandlerButton from './Button'

import './styles.sass'

const FontAlignHandler = ({ value, onChange }) => (
  <div className="jampp__AdFieldHandler__FontAlignHandler">
    <FontAlignHandlerButton
      type="left"
      selected={value === fontAlignValues.LEFT}
      onChange={() => onChange(fontAlignValues.LEFT)}
    />

    <FontAlignHandlerButton
      type="center"
      selected={value === fontAlignValues.CENTER}
      onChange={() => onChange(fontAlignValues.CENTER)}
    />

    <FontAlignHandlerButton
      type="right"
      selected={value === fontAlignValues.RIGHT}
      onChange={() => onChange(fontAlignValues.RIGHT)}
    />
  </div>
)

FontAlignHandler.propTypes = {
}

FontAlignHandler.defaultProps = {
}

export default FontAlignHandler
