import React from 'react'

import Palette from 'components/Palette'

import ThemeService from 'services/Theme'
import PaletteService from 'services/Palette'

class PaletteContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: [],
      modifiers: [],
    }

    this.templates = []

    this.handleChangeModifiers = this.handleChangeModifiers.bind(this)
    this.handleChangeTag = this.handleChangeTag.bind(this)
  }

  componentDidMount() {
    ThemeService.get().then(theme => this.setState({
      fields: theme.fields,
    }))

    PaletteService.get().then(palette => {
      this.props.onChange(palette.modifiers)

      this.setState({
        modifiers: palette.modifiers,
      })
    })
  }

  handleChangeModifiers(modifiers) {
    this.setState({ modifiers })
  }

  handleChangeTag(templateId, tag) {
    const templates = [...this.templates]
    const templateIndex = templates.findIndex(template => template.id === templateId)

    if (templateIndex === -1) {
      templates.push({
        id: templateId,
        tag,
      })
    } else {
      templates[templateIndex].tag = tag
    }

    this.templates = templates
  }

  render() {
    return (
      <Palette
        fields={this.state.fields}
        modifiers={this.state.modifiers}
        onChangeModifiers={this.handleChangeModifiers}
        onChangeTag={this.handleChangeTag}
      />
    )
  }
}

export default PaletteContainer
