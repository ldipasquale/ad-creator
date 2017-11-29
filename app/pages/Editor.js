import React from 'react'

import Dashboard from 'components/Dashboard'
import Button from 'components/Button'
import Input from 'components/Input'
import Device from 'components/Device'
import { Tabs, TabsItem } from 'components/Tabs'
import Palette from 'components/Palette'

import ThemeService from 'services/Theme'
import PaletteService from 'services/Palette'

class Editor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: true,
      modifiers: {},
    }

    this.palette = {
      templates: [],
      fields: [],
    }

    this.handleChangeModifiers = this.handleChangeModifiers.bind(this)
    this.handleChangeTag = this.handleChangeTag.bind(this)
    this.handleSubmitPalette = this.handleSubmitPalette.bind(this)
  }

  componentDidMount() {
    Promise
      .all([
        ThemeService.get(),
        PaletteService.get(),
      ])
      .then(([theme, palette]) => {
        this.palette = {
          templates: theme.templates,
          fields: theme.fields,
        }

        this.setState({
          isFetching: false,
          modifiers: palette.modifiers,
        })
      })
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

  handleChangeModifiers(modifiers) {
    this.setState({ modifiers })
  }

  handleChangeTag(templateId, tag) {
    const templateIndex = this.palette.templates.findIndex(template => template.id === templateId)

    if (templateIndex !== -1) {
      this.palette.templates[templateIndex].tag = tag
    } else {
      this.palette.templates.push({
        id: templateId,
        tag,
      })
    }
  }

  handleSubmitPalette() {
    const palette = {
      ...this.palette,
      modifiers: this.state.modifiers,
    }
  }

  render() {
    return (
      <Dashboard footerContent={this.getEditorFooter()}>
        {this.state.isFetching ? (
          <span>...</span>
        ) : (
          <Tabs>
            <TabsItem title="Work Mode">
              <Palette
                templates={this.palette.templates}
                fields={this.palette.fields}
                modifiers={this.state.modifiers}
                onChangeModifiers={this.handleChangeModifiers}
                onChangeTag={this.handleChangeTag}
              />
            </TabsItem>

            <TabsItem title="Preview Area">
              <div>
                <Palette
                  templates={this.palette.templates}
                  fields={this.palette.fields}
                  modifiers={this.state.modifiers}
                  placeholders={{
                    headline: 'Uber',
                    promoText: 'Get this app now',
                    callToAction: 'Download Now',
                  }}
                />
              </div>
            </TabsItem>
          </Tabs>
        )}
      </Dashboard>
    )
  }
}

export default Editor
