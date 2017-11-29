import React from 'react'

import Dashboard from 'components/Dashboard'
import Button from 'components/Button'
import Input from 'components/Input'
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
          originalTemplates: theme.templates,
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
    const templates = this.palette.templates.map(template => ({ ...template }))

    const templateIndex = templates.findIndex(template => template.id === templateId)

    if (templateIndex !== -1) {
      templates[templateIndex].tag = tag
    }

    this.palette.templates = templates
  }

  handleSubmitPalette() {
    const palette = {
      ...this.palette,
      modifiers: this.state.modifiers,
    }

    console.log(palette)
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
                templates={this.palette.originalTemplates}
                fields={this.palette.fields}
                modifiers={this.state.modifiers}
                onChangeModifiers={this.handleChangeModifiers}
                onChangeTag={this.handleChangeTag}
              />
            </TabsItem>

            <TabsItem title="Preview Area">
              <div>
                <Palette
                  templates={this.palette.originalTemplates}
                  fields={this.palette.fields}
                  modifiers={this.state.modifiers}
                  placeholders={{
                    headline: 'Uber',
                    promoText: 'Get this app now',
                    callToAction: 'Download Now',
                    media: 'https://s3.amazonaws.com/creatives.jampp.com/assets/99/1200x627_bHg_K4zBFpbdliQ2ULpGow.jpg',
                    icon: 'http://cdn.jampp.com/richmedia/HqJlrv5Y60B4aQEwGmMGYQ.jpg',
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
