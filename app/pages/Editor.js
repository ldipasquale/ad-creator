import React from 'react'

import Dashboard from 'components/Dashboard'
import Button from 'components/Button'
import Input from 'components/Input'
import { Tabs, TabsItem } from 'components/Tabs'
import Palette from 'components/Palette'

import { processModifiers } from 'util/tags'
import { debounce } from 'util/timing'

import ThemeService from 'services/Theme'
import PaletteService from 'services/Palette'

class Editor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: true,
      modifiers: {},
      templates: [],
      fields: [],
    }

    this.handleChangeModifiers = this.handleChangeModifiers.bind(this)
    this.handleSubmitPalette = this.handleSubmitPalette.bind(this)
  }

  componentDidMount() {
    Promise
      .all([
        ThemeService.get(),
        PaletteService.get(),
      ])
      .then(([theme, palette]) => {
        this.setState({
          isFetching: false,
          modifiers: palette.modifiers,
          originalTemplates: theme.templates,
          templates: theme.templates,
          fields: theme.fields,
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
    this.setState({
      modifiers,
    }, debounce(() => {
      this.setState({
        templates: this.state.originalTemplates.map(originalTemplate => ({
          ...originalTemplate,
          tag: processModifiers(originalTemplate.tag, modifiers),
        })),
      })
    }, 75))
  }

  handleSubmitPalette() {
    const palette = {
      modifiers: this.state.modifiers,
      templates: this.state.templates,
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
                templates={this.state.templates}
                fields={this.state.fields}
                modifiers={this.state.modifiers}
                onChangeModifiers={this.handleChangeModifiers}
                placeholders={{
                  icon: 'http://cdn.jampp.com/richmedia/HqJlrv5Y60B4aQEwGmMGYQ.jpg',
                  media: 'http://cdn.jampp.com/richmedia/P2MFnhOtVTUIyuO6J1Sm9A.jpg',
                }}
              />
            </TabsItem>

            <TabsItem title="Preview Area">
              <div>
                <Palette
                  templates={this.state.templates}
                  fields={this.state.fields}
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
