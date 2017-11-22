import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AdFieldHandler from 'components/AdFieldHandler'

import Theme from 'services/Theme'

import { mapModifiersToStyle } from 'util/modifiers'

import 'css-scoper'
import './styles.sass'

class Ad extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleElementClick = this.handleElementClick.bind(this)
    this.handleModifierChange = this.handleModifierChange.bind(this)

    Theme.get().then(theme => this.availableFields = theme.fields)
  }

  componentDidMount() {
    this.adElementProperties = this.adElement.getBoundingClientRect()
  }

  handleElementClick(event) {
    event.preventDefault()

    let selectedElement = event.target
    let selectedField = this.availableFields.find(field => field.id === selectedElement.dataset.field)

    while (selectedElement.parentElement && !selectedField) {
      selectedElement = selectedElement.parentElement
      selectedField = this.availableFields.find(field => field.id === selectedElement.dataset.field)
    }

    if (selectedField === null || (this.props.selectedElement && this.props.selectedElement.id === selectedField.id)) {
      this.setState({ isEditingElement: false })
      return this.props.onCancelSelection()
    }

    this.setState({ isEditingElement: true })
    return this.props.onSelectElement(selectedField)
  }

  handleModifierChange(elementId, modifiers) {
    this.props.onChangeModifiers({
      ...this.props.modifiers,
      [elementId]: modifiers,
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

        this.setState({
          highlightedElement: {
            id: nextProps.selectedElement.id,
            blockOutside: nextProps.selectedElement.id !== 'container',
            style: {
              width: Math.floor(selectedElementProperties.width) + extraMargin,
              height: Math.ceil(selectedElementProperties.height) + extraMargin,
              top: Math.ceil(selectedElementProperties.top) - Math.floor(this.adElementProperties.top) - Math.ceil(extraMargin / 2),
              left: Math.floor(selectedElementProperties.left) - Math.floor(this.adElementProperties.left) - Math.ceil(extraMargin / 2),
              ...selectedElementBorderRadius && {
                borderRadius: `${selectedElementBorderRadius + extraBorderRadius}px`,
              },
            },
          },
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

        const elementStyle = mapModifiersToStyle(elementModifiers)

        Object.entries(elementStyle).forEach(([styleId, styleValue]) => {
          element.style[styleId] = styleValue
        })
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
            {this.state.isEditingElement && (
              <AdFieldHandler
                onChange={modifiers => this.handleModifierChange(this.state.highlightedElement.id, modifiers)}
                modifiers={this.props.modifiers[this.state.highlightedElement.id]}
                style={{
                  left: this.state.highlightedElement.style.left - 30,
                  top: this.state.highlightedElement.style.top + this.state.highlightedElement.style.height,
                  width: this.state.highlightedElement.style.width + 60,
                }}
              />
            )}

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
