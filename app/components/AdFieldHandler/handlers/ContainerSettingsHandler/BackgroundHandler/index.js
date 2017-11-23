import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AdFieldHandlerPaneledButton from 'components/AdFieldHandler/PaneledButton'
import ColorLabel from 'components/ColorLabel'
import ColorPicker from 'components/ColorPicker'
import { Tabs, TabsItem } from 'components/Tabs'

const BackgroundHandler = ({ value, onChange }) => (
  <AdFieldHandlerPaneledButton
    buttonProps={{
      children: <ColorLabel value={value} />,
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
          value="#f00000"
          className="jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__ColorLabel"
        />
      )}>
        <ColorPicker
          color="#f00000"
          onChange={color => onChange(color.hex)}
        />
      </TabsItem>

      <TabsItem title={(
        <ColorLabel
          value="#00ffff"
          className="jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__ColorLabel"
        />
      )}>
        <ColorPicker
          color="#00ffff"
          onChange={color => onChange(color.hex)}
        />
      </TabsItem>

      <TabsItem title={(
        <ColorLabel
          value="#00D061"
          className="jampp__AdFieldHandler__ContainerSettingsHandler__BackgroundHandler__ColorLabel"
        />
      )}>
        <ColorPicker
          color="#00D061"
          onChange={color => onChange(color.hex)}
        />
      </TabsItem>
    </Tabs>

  </AdFieldHandlerPaneledButton>
)

BackgroundHandler.propTypes = {
  value: PropTypes.string,
}

BackgroundHandler.defaultProps = {
  value: '#000',
}

export default BackgroundHandler
