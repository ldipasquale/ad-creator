import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { mapModifiersToStyle } from 'util/modifiers'

import 'css-scoper'
import './styles.sass'

class Ad extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      highlightedElement: null,
    }

    this.handleElementClick = this.handleElementClick.bind(this)
  }

  handleElementClick(event) {
    event.preventDefault()

    let selectedElement = event.target
    let selectedField = this.props.fields.find(field => field.id === selectedElement.dataset.field)

    while (selectedElement.parentElement && !selectedField) {
      selectedElement = selectedElement.parentElement
      selectedField = this.props.fields.find(field => field.id === selectedElement.dataset.field)
    }

    if (selectedField === null || (this.props.selectedElement && this.props.selectedElement.id === selectedField.id)) {
      return this.props.onCancelSelection()
    }

    const selectedElementProperties = selectedElement.getBoundingClientRect()
    const adElementProperties = this.adElement.getBoundingClientRect()

    return this.props.onSelectElement({
      ...selectedField,
      style: {
        width: Math.floor(selectedElementProperties.width),
        height: Math.ceil(selectedElementProperties.height),
      },
      handlerPosition: {
        top: Math.ceil(selectedElementProperties.top),
        left: Math.floor(selectedElementProperties.left),
      },
      adElementStyle: {
        top: Math.floor(adElementProperties.top),
        height: Math.floor(adElementProperties.height),
      },
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedElement) {
      let selectedElement = this.adElement.querySelector(`[data-field=${nextProps.selectedElement.id}`)

      let extraMargin = 10
      let extraBorderRadius = 5

      if (selectedElement) {
        if (nextProps.selectedElement.id === 'container') {
          selectedElement = selectedElement.childNodes[0]
        }

        if (nextProps.selectedElement.id.toLowerCase().includes('container')) {
          extraMargin = 0
          extraBorderRadius = -1
        }

        const selectedElementProperties = selectedElement.getBoundingClientRect()
        const selectedElementBorderRadius = parseInt(getComputedStyle(selectedElement).getPropertyValue('border-radius'))

        const adElementProperties = this.adElement.getBoundingClientRect()

        this.setState({
          highlightedElement: {
            id: nextProps.selectedElement.id,
            type: nextProps.selectedElement.type,
            blockOutside: nextProps.selectedElement.id !== 'container',
            style: {
              width: Math.floor(selectedElementProperties.width) + extraMargin,
              height: Math.ceil(selectedElementProperties.height) + extraMargin,
              top: Math.ceil(selectedElementProperties.top) - Math.floor(adElementProperties.top) - Math.ceil(extraMargin / 2),
              left: Math.floor(selectedElementProperties.left) - Math.floor(adElementProperties.left) - Math.ceil(extraMargin / 2),
              ...selectedElementBorderRadius && {
                borderRadius: `${selectedElementBorderRadius + extraBorderRadius}px`,
              },
            },
          },
        })
      } else {
        this.setState({
          highlightedElement: null,
        })
      }
    } else {
      this.setState({
        highlightedElement: null,
      })
    }

    if (nextProps.modifiers) {
      Object.entries(nextProps.modifiers).forEach(([elementId, elementModifiers]) => {
        const element = this.adElement.querySelector(`[data-field=${elementId}`)

        if (element) {
          const elementStyle = mapModifiersToStyle(elementModifiers)

          Object.entries(elementStyle).forEach(([styleId, styleValue]) => {
            element.style[styleId] = styleValue
          })
        }
      })
    }
  }

  render() {
    return (
      <div
        className="jampp__Ad"
        ref={element => this.adElement = element}
      >
        <div
          className="jampp__Ad__Content"
          style={{
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
          }}
          dangerouslySetInnerHTML={{
            __html: this.props.children,
          }}
          onClick={this.handleElementClick}
          ref={element => this.adContent = element}
        />

        {this.state.highlightedElement && this.props.modifiers[this.state.highlightedElement.id] && (
          <div className="jampp__Ad__Selection">
            <div
              className={cx({
                jampp__Ad__Selection__Overlay: true,
                'jampp__Ad__Selection__Overlay--internal': this.state.highlightedElement.blockOutside,
              })}
              style={this.state.highlightedElement.style}
              onClick={this.props.onCancelSelection}
            />
          </div>
        )}
      </div>
    )
  }
}

Ad.propTypes = {
  onSelectElement: PropTypes.func.isRequired,
  onCancelSelection: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default Ad
