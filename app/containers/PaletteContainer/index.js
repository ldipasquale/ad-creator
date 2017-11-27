import React from 'react'

import Palette from 'components/Palette'

import ThemeService from 'services/Theme'
import PaletteService from 'services/Palette'

class PaletteContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleChangeModifiers = this.handleChangeModifiers.bind(this)
  }

  componentDidMount() {
    ThemeService.get().then(theme => this.setState({
      fields: theme.fields,
    }))

    PaletteService.get().then(palette => this.setState({
      modifiers: palette.modifiers,
    }))
  }

  handleChangeModifiers(modifiers) {
    this.setState({ modifiers })
  }

  render() {
    return (
      <Palette
        fields={this.state.fields}
        modifiers={this.state.modifiers}
        onChangeModifiers={this.handleChangeModifiers}
      />
    )
  }
}

export default PaletteContainer
