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

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeModifiers = this.handleChangeModifiers.bind(this)
    this.handleChangeTag = this.handleChangeTag.bind(this)
  }

  componentDidMount() {
    Promise
      .all([
        ThemeService.get(),
        PaletteService.get(),
      ])
      .then(([theme, palette]) => this.setState({
        fields: theme.fields,
        modifiers: palette.modifiers,
      }, this.handleChange))
  }

  handleChange() {
    this.props.onChange({
      modifiers: this.state.modifiers,
      template: this.templates,
    })
  }

  handleChangeModifiers(modifiers) {
    this.setState({ modifiers }, this.handleChange)
  }

  handleChangeTag(templateId, tag) {
    const templateIndex = this.templates.findIndex(template => template.id === templateId)

    if (templateIndex !== -1) {
      this.templates[templateIndex].tag = tag
    } else {
      this.templates.push({
        id: templateId,
        tag,
      })
    }

    this.handleChange()
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
