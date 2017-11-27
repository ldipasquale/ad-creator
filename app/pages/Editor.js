import React from 'react'

import Dashboard from 'components/Dashboard'
import Device from 'components/Device'
import { Tabs, TabsItem } from 'components/Tabs'

import PaletteContainer from 'containers/PaletteContainer'

const Editor = () => (
  <Dashboard>
    <Tabs>
      <TabsItem title="Work Mode">
        <PaletteContainer />
      </TabsItem>

      <TabsItem title="Preview Area">
        <Device model="nexus5">
          blabla
        </Device>
      </TabsItem>
    </Tabs>
  </Dashboard>
)

export default Editor
