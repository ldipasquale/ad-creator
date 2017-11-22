import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AdFieldHandlerPaneledButton from 'components/AdFieldHandler/PaneledButton'
import ColorLabel from 'components/ColorLabel'
import ColorPicker from 'components/ColorPicker'

const FontColorHandler = ({ value, onChange }) => (
  <AdFieldHandlerPaneledButton
    buttonProps={{
      children: <ColorLabel value={value} />,
    }}
  >
    <ColorPicker
      color={value}
      onChange={color => onChange(color.hex)}
    />
  </AdFieldHandlerPaneledButton>
)

FontColorHandler.propTypes = {
  value: PropTypes.string,
}

FontColorHandler.defaultProps = {
  value: '#000',
}

export default FontColorHandler
