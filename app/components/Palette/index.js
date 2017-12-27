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

    this.handleSelectElement = this.handleSelectElement.bind(this)
    this.handleCancelSelection = this.handleCancelSelection.bind(this)
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
        {this.state.highlightedElement !== null && this.props.modifiers[this.state.highlightedElement.field] && (
          <AdFieldHandler
            onChange={modifiers => this.props.onChangeModifiers({
              ...this.props.modifiers,
              [this.state.highlightedElement.field]: modifiers,
            })}
            type={this.state.highlightedElement.type}
            modifiers={this.props.modifiers[this.state.highlightedElement.field]}
            style={getHandlerPosition(this.state.highlightedElement)}
          />
        )}

        <Carousel onChange={() => this.setState({ highlightedElement: null })}>
          {this.props.templates.map(template => (
            <div key={template.id}>
              <Device
                model="nexus5"
                landscape={template.landscape}
              >
                <Ad
                  id={template.id}
                  width={template.creative_size.width}
                  height={template.creative_size.height}
                  fields={this.props.fields}
                  placeholders={this.props.placeholders}
                  {...this.props.onChangeModifiers !== null && {
                    onSelectElement: this.handleSelectElement,
                    onCancelSelection: this.handleCancelSelection,
                    selectedElement: this.state.highlightedElement,
                  }}
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
  onChangeModifiers: PropTypes.func,
  modifiers: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  fields: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  templates: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  placeholders: PropTypes.object, // eslint-disable-line react/forbid-prop-types
}

Palette.defaultProps = {
  onChangeModifiers: null,
  placeholders: {},
}

export default Palette
