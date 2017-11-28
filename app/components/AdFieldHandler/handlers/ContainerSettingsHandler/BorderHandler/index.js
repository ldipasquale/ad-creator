import React from 'react'
import PropTypes from 'prop-types'

import modifiers from 'constants/modifiers'

import AdFieldHandlerPaneledButton from 'components/AdFieldHandler/PaneledButton'
import ColorLabel from 'components/ColorLabel'
import ColorPicker from 'components/ColorPicker'
import InputRange from 'components/InputRange'

const BorderHandler = ({ value, onChange }) => (
  <AdFieldHandlerPaneledButton
    buttonProps={{
      children: (
        <ColorLabel
          className="jampp__AdFieldHandler__ContainerSettingsHandler__BorderHandler__Button"
        />
      ),
      selectedClassName: 'jampp__AdFieldHandler__ContainerSettingsHandler__BorderHandler__Button--selected',
    }}
  >
    <InputRange
      value={value[modifiers.BORDER_SIZE]}
      onChange={size => onChange({ [modifiers.BORDER_SIZE]: size })}
    />

    <ColorPicker
      color={value[modifiers.BORDER_COLOR]}
      onChange={color => onChange({ [modifiers.BORDER_COLOR]: color.hex })}
    />
  </AdFieldHandlerPaneledButton>
)

BorderHandler.propTypes = {
  value: PropTypes.shape({
    [modifiers.BORDER_COLOR]: PropTypes.string,
    [modifiers.BORDER_SIZE]: PropTypes.number,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default BorderHandler
