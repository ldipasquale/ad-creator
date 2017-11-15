import React from 'react'
import { storiesOf } from '@storybook/react'

import { Tabs, TabsItem } from './'

storiesOf('Tabs', module)
  .add('Default', () => (
    <Tabs>
      <TabsItem title="First Tab">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec ac vehicula dolor, eget sodales diam.
          Ut ac urna a turpis volutpat sodales non a enim. Vivamus nec est dui.
          In porta lacus nec risus volutpat pharetra. Fusce eu est egestas purus viverra hendrerit.
          Praesent imperdiet, quam ac finibus feugiat, magna tortor luctus nibh, pellentesque.
        </div>
      </TabsItem>
      <TabsItem title="Second Tab">
        <div>
          Aliquam nibh ex, sodales id ornare sit amet, varius at eros.
          Vestibulum nec convallis mi, eu ultricies ligula.
          Maecenas mollis massa a magna rhoncus, eget feugiat mauris sodales.
        </div>
      </TabsItem>
    </Tabs>
  ))
