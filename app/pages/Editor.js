import React from 'react'

import Dashboard from 'components/Dashboard'
import Button from 'components/Button'
import Input from 'components/Input'
import { Tabs, TabsItem } from 'components/Tabs'
import Palette from 'components/Palette'
import ButtonList from 'components/ButtonList'

import { processModifiers } from 'util/tags'
import { debounce } from 'util/timing'

import PaletteService from 'services/Palette'

class Editor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: true,
      name: 'OLX',
      modifiers: {},
      templates: [],
      fields: [],
    }

    this.handleChangeModifiers = this.handleChangeModifiers.bind(this)
    this.handleSubmitPalette = this.handleSubmitPalette.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
  }

  componentDidMount() {
    const [, urlType, urlParam] = window.location.pathname.split('/')

    if (urlType === 'palette') {
      PaletteService.get(parseInt(urlParam, 10)).then(palette => this.setState({
        isFetching: false,
        modifiers: palette.modifiers,
        originalTemplates: palette.templates,
        templates: palette.templates,
        fields: palette.fields,
      }))
    }
  }

  getEditorFooter() {
    return (
      <div>
        <Input
          label="Palette Name"
          value={this.state.name}
          onChange={this.handleChangeName}
          width={300}
        />

        <ButtonList style={{ float: 'right', position: 'relative', top: '5px' }}>
          <Button
            theme="danger"
            onClick={() => window.close()}
          >
            Discard Palette
          </Button>

          <Button
            theme="success"
            onClick={this.handleSubmitPalette}
          >
            Save Palette
          </Button>
        </ButtonList>
      </div>
    )
  }

  handleChangeModifiers(modifiers) {
    this.setState({
      modifiers,
    }, debounce(() => this.setState({
      templates: this.state.originalTemplates.map(originalTemplate => ({
        ...originalTemplate,
        tag: processModifiers(originalTemplate.tag, modifiers),
      })),
    }), 75))
  }

  handleChangeName(name) {
    this.setState({ name })
  }

  handleSubmitPalette() {
    return PaletteService.save({
      name: this.state.name,
      modifiers: this.state.modifiers,
      fields: this.state.fields,
      templates: this.state.templates,
    }).then(() => window.close())
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
                templates={this.state.templates.map(template => ({ ...template }))}
                fields={this.state.fields}
                modifiers={this.state.modifiers}
                placeholders={{
                  icon: 'http://cdn.jampp.com/richmedia/HqJlrv5Y60B4aQEwGmMGYQ.jpg',
                  media: 'http://cdn.jampp.com/richmedia/P2MFnhOtVTUIyuO6J1Sm9A.jpg',
                }}
                onChangeModifiers={this.handleChangeModifiers}
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
