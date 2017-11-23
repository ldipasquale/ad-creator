import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AdFieldHandlerPaneledButton from 'components/AdFieldHandler/PaneledButton'
import ColorLabel from 'components/ColorLabel'
import ColorPicker from 'components/ColorPicker'
import GradientLabel from 'components/GradientLabel'
import GradientPicker from 'components/GradientPicker'
import { Tabs, TabsItem } from 'components/Tabs'

import modifiers from 'constants/modifiers'

const BackgroundHandler = ({ value, onChange }) => (
  <AdFieldHandlerPaneledButton
    buttonProps={{
      children: <ColorLabel value={value[modifiers.BACKGROUND_COLOR]} />,
    }}
  >
    <Tabs
      classNames={{
        header: 'jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__Tabs__Header',
        headerItem: 'jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__Tabs__Header__Item',
        headerActiveItem: 'jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__Tabs__Header__Item--active',
        body: 'jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__Tabs__Body',
      }}
    >
      <TabsItem title={(
        <ColorLabel
          value={value[modifiers.BACKGROUND_COLOR]}
          className="jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__ColorLabel"
        />
      )}>
        <ColorPicker
          color={value[modifiers.BACKGROUND_COLOR]}
          onChange={color => onChange({
            [modifiers.BACKGROUND_COLOR]: color.hex,
          })}
        />
      </TabsItem>

      <TabsItem title={(
        <GradientLabel
          className="jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__ColorLabel"
          from={value[modifiers.BACKGROUND_COLOR]}
          to={value[modifiers.BACKGROUND_COLOR_TO]}
          type="linear"
        />
      )}>
        <GradientPicker
          from={value[modifiers.BACKGROUND_COLOR]}
          to={value[modifiers.BACKGROUND_COLOR_TO]}
          onChange={(from, to) => onChange({
            [modifiers.BACKGROUND_COLOR]: from,
            [modifiers.BACKGROUND_COLOR_TO]: to,
          })}
        />
      </TabsItem>

      <TabsItem title={(
        <GradientLabel
          className="jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__ColorLabel"
          from={value[modifiers.BACKGROUND_COLOR]}
          to={value[modifiers.BACKGROUND_COLOR_TO]}
          type="radial"
        />
      )}>
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
}

BackgroundHandler.defaultProps = {
  value: {
    [modifiers.BACKGROUND_COLOR]: '#000',
    [modifiers.BACKGROUND_COLOR_TO]: '#fff',
  },
}

export default BackgroundHandler
