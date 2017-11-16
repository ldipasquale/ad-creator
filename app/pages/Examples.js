import React from 'react'

import Dashboard from 'components/Dashboard'
import Device from 'components/Device'
import Theme from 'components/Theme'
import { Tabs, TabsItem } from 'components/Tabs'

const Examples = () => (
  <div>
    <Dashboard>
      <Tabs>
        <TabsItem title="Work Mode">
          <Theme />
        </TabsItem>

        <TabsItem title="Preview Area">
          <Device model="nexus5">
            blabla
          </Device>
        </TabsItem>
      </Tabs>
    </Dashboard>
  </div>
)

export default Examples
