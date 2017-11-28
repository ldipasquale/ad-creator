import React from 'react'
import PropTypes from 'prop-types'

import modifiers from 'constants/modifiers'

import AdFieldHandlerPaneledButton from 'components/AdFieldHandler/PaneledButton'
import ColorLabel from 'components/ColorLabel'
import ColorPicker from 'components/ColorPicker'
import InputRange from 'components/InputRange'

const ShadowHandler = ({ value, onChange }) => (
  <AdFieldHandlerPaneledButton
    buttonProps={{
      children: (
        <ColorLabel
          className="jampp__AdFieldHandler__ContainerSettingsHandler__ShadowHandler__Button"
        />
      ),
      selectedClassName: 'jampp__AdFieldHandler__ContainerSettingsHandler__ShadowHandler__Button--selected',
    }}
  >
    <InputRange
      value={value[modifiers.SHADOW_SIZE]}
      onChange={size => onChange({ [modifiers.SHADOW_SIZE]: size })}
    />

    <ColorPicker
      color={value[modifiers.SHADOW_COLOR]}
      onChange={color => onChange({ [modifiers.SHADOW_COLOR]: color.hex })}
    />
  </AdFieldHandlerPaneledButton>
)

ShadowHandler.propTypes = {
  value: PropTypes.shape({
    [modifiers.SHADOW_COLOR]: PropTypes.string,
    [modifiers.SHADOW_SIZE]: PropTypes.number,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default ShadowHandler
