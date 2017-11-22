import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AdFieldHandlerPaneledButton from 'components/AdFieldHandler/PaneledButton'
import ColorPicker from 'components/ColorPicker'

const FontColorHandler = ({ value, onChange }) => (
  <AdFieldHandlerPaneledButton
    buttonProps={{
      className: "jampp__AdFieldHandler__FontSettingsHandler__FontColorHandler__Button",
      style: {
        backgroundColor: value,
      },
    }}
  >
    <ColorPicker
      value={value}
      onChange={onChange}
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
