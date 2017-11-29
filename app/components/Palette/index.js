import React from 'react'
import PropTypes from 'prop-types'

import Device from 'components/Device'
import Ad from 'components/Ad'
import Carousel from 'components/Carousel'
import AdFieldHandler from 'components/AdFieldHandler'

import { getHandlerPosition } from 'util/handlerPosition'

import './styles.sass'

class Palette extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      highlightedElement: null,
    }

    this.handleChangeTag = this.handleChangeTag.bind(this)
    this.handleChangeModifiers = this.handleChangeModifiers.bind(this)
    this.handleSelectElement = this.handleSelectElement.bind(this)
    this.handleCancelSelection = this.handleCancelSelection.bind(this)
  }

  handleChangeTag(templateId, tag) {
    if (this.props.onChangeTag !== null) {
      this.props.onChangeTag(templateId, tag)
    }
  }

  handleChangeModifiers(elementId, modifiers) {
    this.props.onChangeModifiers({
      ...this.props.modifiers,
      [elementId]: modifiers,
    })
  }

  handleSelectElement(element) {
    this.setState({
      highlightedElement: element,
    })
  }

  handleCancelSelection() {
    this.setState({
      highlightedElement: null,
    })
  }

  render() {
    return (
      <div>
        {this.state.highlightedElement !== null && this.props.modifiers[this.state.highlightedElement.id] && (
          <AdFieldHandler
            onChange={modifiers => this.props.onChangeModifiers({
              ...this.props.modifiers,
              [this.state.highlightedElement.id]: modifiers,
            })}
            type={this.state.highlightedElement.type}
            modifiers={this.props.modifiers[this.state.highlightedElement.id]}
            style={getHandlerPosition(this.state.highlightedElement)}
          />
        )}

        <Carousel onChange={() => this.setState({ highlightedElement: null })}>
          {this.props.templates.map(template => (
            <div key={template.id}>
              <Device model="nexus5">
                <Ad
                  id={template.id}
                  width={template.width}
                  height={template.height}
                  modifiers={this.props.modifiers}
                  fields={this.props.fields}
                  {...this.props.onChangeTag !== null && this.props.onChangeModifiers !== null && {
                    onSelectElement: this.handleSelectElement,
                    onCancelSelection: this.handleCancelSelection,
                    onChangeTag: tag => this.handleChangeTag(template.id, tag),
                    selectedElement: this.state.highlightedElement,
                  }}
                  placeholders={this.props.placeholders}
                >
                  {template.tag}
                </Ad>
              </Device>
            </div>
          ))}
        </Carousel>
      </div>
    )
  }
}

Palette.propTypes = {
  onChangeTag: PropTypes.func,
  onChangeModifiers: PropTypes.func,
  modifiers: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  fields: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  templates: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  placeholders: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

Palette.defaultProps = {
  onChangeTag: null,
  onChangeModifiers: null,
  placeholders: {},
}

export default Palette
