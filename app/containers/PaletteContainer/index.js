import React from 'react'
import PropTypes from 'prop-types'

import Palette from 'components/Palette'

import ThemeService from 'services/Theme'
import PaletteService from 'services/Palette'

class PaletteContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      templates: [],
      fields: [],
      modifiers: {},
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
        templates: theme.templates,
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
        templates={this.state.templates}
        fields={this.state.fields}
        modifiers={this.state.modifiers}
        onChangeModifiers={this.handleChangeModifiers}
        onChangeTag={this.handleChangeTag}
      />
    )
  }
}

PaletteContainer.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default PaletteContainer
