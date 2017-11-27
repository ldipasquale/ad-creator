import React from 'react'

import Dashboard from 'components/Dashboard'
import Button from 'components/Button'
import Input from 'components/Input'
import Device from 'components/Device'
import { Tabs, TabsItem } from 'components/Tabs'

import PaletteContainer from 'containers/PaletteContainer'

class Editor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modifiers: null,
    }

    this.handleChangePalette = this.handleChangePalette.bind(this)
    this.handleSubmitPalette = this.handleSubmitPalette.bind(this)
  }

  handleChangePalette(palette) {
    this.setState({ palette })
  }

  handleSubmitPalette() {
    console.log(this.state.palette)
  }

  getEditorFooter() {
    return (
      <div>
        <Input
          label="Palette Name"
          value="OLX"
          width={300}
        />

        <div style={{ float: 'right', position: 'relative', top: '5px' }}>
          <div style={{ marginRight: '8px', display: 'inline-block' }}>
            <Button theme="danger">Discard Palette</Button>
          </div>

          <Button
            theme="success"
            onClick={this.handleSubmitPalette}
          >
            Save Palette
          </Button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Dashboard footerContent={this.getEditorFooter()}>
        <Tabs>
          <TabsItem title="Work Mode">
            <PaletteContainer
              onChange={this.handleChangePalette}
            />
          </TabsItem>

          <TabsItem title="Preview Area">
            <Device model="nexus5">
              blabla
            </Device>
          </TabsItem>
        </Tabs>
      </Dashboard>
    )
  }
}

export default Editor
