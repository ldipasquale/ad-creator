import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { mapModifiersToStyle } from 'util/modifiers'

import 'util/cssScoper'
import './styles.sass'

class Ad extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      highlightedElement: null,
      originalTag: props.children,
      tag: props.children,
    }

    this.handleElementClick = this.handleElementClick.bind(this)
  }

  componentDidMount() {
    const scoperStyles = []

    setTimeout(() => {
      let parentElement = this.adContent.parentElement

      while (parentElement.id.includes('scoper')) {
        const scoperStyle = document.querySelector(`style[data-scoper=${parentElement.id}]`)

        if (scoperStyle) {
          const scoperStyleCSS = scoperStyle.innerHTML.replace(RegExp(`#${parentElement.id} `, 'g'), '')

          scoperStyles.push(scoperStyleCSS)
        }

        parentElement = parentElement.parentElement
      }

      this.styleTag = `<style>${scoperStyles.reverse().join('</style><style>')}</style>`
    }, 100)
  }

  componentWillReceiveProps(nextProps) {
    const newPlaceholders = Object.entries(nextProps.placeholders)

    /* TO-DO
    if (newPlaceholders.length > 0) {
      let tag = this.state.originalTag

      newPlaceholders.forEach(([placeholder, placeholderValue]) => {
        tag = tag.replace(`{{${placeholder}}}`, placeholderValue)
      })

      this.setState({ tag })
    } else {
      const oldPlaceholders = Object.entries(nextProps.placeholders)

      if (oldPlaceholders.length > 0 && newPlaceholders.length === 0) {
        this.setState({ tag: this.state.originalTag })
      }
    }
    */

    if (nextProps.selectedElement) {
      let selectedElement = this.adElement.querySelector(`[data-field=${nextProps.selectedElement.id}`)

      let extraMargin = 10
      let extraBorderRadius = 5

      if (selectedElement) {
        if (nextProps.selectedElement.id === 'container') {
          [selectedElement] = selectedElement.childNodes
        }

        if (nextProps.selectedElement.id.toLowerCase().includes('container')) {
          extraMargin = 0
          extraBorderRadius = -1
        }

        const selectedElementProperties = selectedElement.getBoundingClientRect()
        const selectedElementBorderRadius = parseInt(getComputedStyle(selectedElement).getPropertyValue('border-radius'), 10)

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
              left: Math.floor(selectedElementProperties.left) - Math.floor(adElementProperties.left) - Math.ceil(extraMargin / 2), // eslint-disable-line max-len
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

      if (this.props.onChangeTag !== null) {
        this.props.onChangeTag(`${this.styleTag}${this.adContent.innerHTML}`)
      }
    }
  }

  handleElementClick(event) {
    event.preventDefault()

    if (this.props.onSelectElement !== null && this.props.onCancelSelection !== null) {
      let selectedElement = event.target
      let selectedField = this.props.fields.find(field => field.id === selectedElement.dataset.field)

      while (selectedElement.parentElement && !selectedField) {
        selectedElement = selectedElement.parentElement
        // eslint-disable-next-line no-loop-func
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
  }

  render() {
    return (
      <div
        className="jampp__Ad"
        ref={(element) => { this.adElement = element }}
      >
        <div
          className="jampp__Ad__Content"
          style={{
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
          }}
          dangerouslySetInnerHTML={{
            __html: this.state.tag,
          }}
          onClick={this.handleElementClick}
          ref={(element) => { this.adContent = element }}
        />

        {this.state.highlightedElement && this.props.modifiers[this.state.highlightedElement.id] && (
          <div className="jampp__Ad__Selection">
            <span
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
  onChangeTag: PropTypes.func,
  onSelectElement: PropTypes.func,
  onCancelSelection: PropTypes.func,
  selectedElement: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
  }),
  children: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  modifiers: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  fields: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
}

Ad.defaultProps = {
  onChangeTag: null,
  onSelectElement: null,
  onCancelSelection: null,
  selectedElement: {},
}

export default Ad
