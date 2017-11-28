import React from 'react'
import PropTypes from 'prop-types'

import AdFieldHandlerPaneledButton from 'components/AdFieldHandler/PaneledButton'
import ColorLabel from 'components/ColorLabel'
import ColorPicker from 'components/ColorPicker'
import GradientPicker from 'components/GradientPicker'
import { Tabs, TabsItem } from 'components/Tabs'

import modifiers from 'constants/modifiers'

const BackgroundHandler = ({ value, onChange }) => (
  <AdFieldHandlerPaneledButton
    buttonProps={{
      children: (
        <ColorLabel
          className="jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__Button"
          value={value[modifiers.BACKGROUND_COLOR]}
          valueTo={value[modifiers.BACKGROUND_COLOR_TO]}
          gradientType={value[modifiers.BACKGROUND_GRADIENT_TYPE]}
        />
      ),
    }}
  >
    <Tabs
      classNames={{
        header: 'jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__Tabs__Header',
        headerItem: 'jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__Tabs__Header__Item',
        headerActiveItem: 'jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__Tabs__Header__Item--active',
        body: 'jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__Tabs__Body',
      }}
      selectedTabPath={value[modifiers.BACKGROUND_GRADIENT_TYPE] || 'none'}
    >
      <TabsItem
        path="none"
        title={(
          <ColorLabel
            value={value[modifiers.BACKGROUND_COLOR]}
            className="jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__ColorLabel"
            onClick={() => onChange({
              [modifiers.BACKGROUND_GRADIENT_TYPE]: undefined,
            })}
          />
        )}
      >
        <ColorPicker
          color={value[modifiers.BACKGROUND_COLOR]}
          onChange={color => onChange({
            [modifiers.BACKGROUND_COLOR]: color.hex,
          })}
        />
      </TabsItem>

      <TabsItem
        path="linear"
        title={(
          <ColorLabel
            className="jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__ColorLabel"
            value={value[modifiers.BACKGROUND_COLOR]}
            valueTo={value[modifiers.BACKGROUND_COLOR_TO]}
            gradientType="linear"
            onClick={() => onChange({
              [modifiers.BACKGROUND_GRADIENT_TYPE]: 'linear',
            })}
          />
        )}
      >
        <GradientPicker
          from={value[modifiers.BACKGROUND_COLOR]}
          to={value[modifiers.BACKGROUND_COLOR_TO]}
          onChange={(from, to) => onChange({
            [modifiers.BACKGROUND_COLOR]: from,
            [modifiers.BACKGROUND_COLOR_TO]: to,
          })}
        />
      </TabsItem>

      <TabsItem
        path="radial"
        title={(
          <ColorLabel
            className="jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__ColorLabel"
            value={value[modifiers.BACKGROUND_COLOR]}
            valueTo={value[modifiers.BACKGROUND_COLOR_TO]}
            gradientType="radial"
            onClick={() => onChange({
              [modifiers.BACKGROUND_GRADIENT_TYPE]: 'radial',
            })}
          />
        )}
      >
        <GradientPicker
          from={value[modifiers.BACKGROUND_COLOR]}
          to={value[modifiers.BACKGROUND_COLOR_TO]}
          onChange={(from, to) => onChange({
            [modifiers.BACKGROUND_COLOR]: from,
            [modifiers.BACKGROUND_COLOR_TO]: to,
          })}
        />
      </TabsItem>
    </Tabs>
  </AdFieldHandlerPaneledButton>
)

BackgroundHandler.propTypes = {
  value: PropTypes.shape({
    [modifiers.BACKGROUND_COLOR]: PropTypes.string,
    [modifiers.BACKGROUND_COLOR_TO]: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
}

BackgroundHandler.defaultProps = {
  value: {
    [modifiers.BACKGROUND_COLOR]: '#000',
    [modifiers.BACKGROUND_COLOR_TO]: '#fff',
  },
}

export default BackgroundHandler
