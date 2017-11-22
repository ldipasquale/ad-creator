import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AdFieldHandlerPaneledButton from 'components/AdFieldHandler/PaneledButton'
import ColorLabel from 'components/ColorLabel'
import ColorPicker from 'components/ColorPicker'

const BorderHandler = ({ value, onChange }) => (
  <AdFieldHandlerPaneledButton
    buttonProps={{
      children: (
        <ColorLabel
          className="jampp__AdFieldHandler__ContainerSettingsHandler__BorderHandler__Button"
        />
      ),
    }}
  >
    <ColorPicker
      color={value}
      onChange={color => onChange(color.hex)}
    />
  </AdFieldHandlerPaneledButton>
)

BorderHandler.propTypes = {
  value: PropTypes.string,
}

BorderHandler.defaultProps = {
  value: '#000',
}

export default BorderHandler
