import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import elements from 'constants/elements'

import { replacePlaceholders } from 'util/tags'
import { scopeCss } from 'util/dom'

import './styles.sass'

const selectableElements = [elements.TEXT, elements.CONTAINER, elements.CONTAINED_TEXT]

class Ad extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      highlightedElement: null,
      tag: null,
    }

    this.scopeTag = this.scopeTag.bind(this)
    this.updateTag = this.updateTag.bind(this)
    this.handleElementClick = this.handleElementClick.bind(this)
    this.processHighlightedElementSelection = this.processHighlightedElementSelection.bind(this)
  }

  componentDidMount() {
    this.updateTag(this.props.children)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.children !== nextProps.children) {
      this.updateTag(nextProps.children)
    }

    this.processHighlightedElementSelection(nextProps.selectedElement)
  }

  scopeTag(tag) {
    const scopedTag = tag.replace(new RegExp('<style>', 'g'), '<style scoped>')

    this.setState({
      tag: scopedTag,
    }, () => scopeCss(this.adContent, this.adContentWrapper, `adId${this.props.id}`))
  }

  updateTag(rawTag) {
    let tag = rawTag

    if (this.props.placeholders) {
      tag = replacePlaceholders(tag, this.props.placeholders)
    }

    this.scopeTag(tag)
  }

  processHighlightedElementSelection(newHighlightedElement) {
    let didNotFoundSelection = false

    const hasPreviousSelection = this.state.highlightedElement !== null
    const hasCurrentSelection = newHighlightedElement !== null

    const didUpdateSelection = hasPreviousSelection
      ? hasCurrentSelection
        ? this.state.highlightedElement.field !== newHighlightedElement.field
        : false
      : !!hasCurrentSelection

    const isSelectableElement = newHighlightedElement
      ? selectableElements.includes(newHighlightedElement.type)
      : false

    if (didUpdateSelection && isSelectableElement) {
      let selectedElement = this.adElement.querySelector(`[data-field=${newHighlightedElement.field}`)

      let extraMargin = 10
      let extraBorderRadius = 5

      if (!selectedElement) {
        didNotFoundSelection = true
      } else {
        if (newHighlightedElement.field === 'container') {
          [selectedElement] = selectedElement.childNodes
        }

        if (newHighlightedElement.field.toLowerCase().includes('container')) {
          extraMargin = 0
          extraBorderRadius = -1
        }

        const selectedElementProperties = selectedElement.getBoundingClientRect()
        const selectedElementBorderRadius = parseInt(getComputedStyle(selectedElement).getPropertyValue('border-radius'), 10)

        const adElementProperties = this.adElement.getBoundingClientRect()

        return this.setState({
          highlightedElement: {
            field: newHighlightedElement.field,
            type: newHighlightedElement.type,
            blockOutside: newHighlightedElement.field !== 'container',
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
      }
    }

    if (didNotFoundSelection || !hasCurrentSelection || !isSelectableElement) {
      return this.setState({
        highlightedElement: null,
      })
    }

    return null
  }

  handleElementClick(event) {
    event.preventDefault()

    if (this.props.onSelectElement !== null && this.props.onCancelSelection !== null) {
      let selectedElement = event.target
      let selectedField = this.props.fields.find(field => field.field === selectedElement.dataset.field)

      while (selectedElement.parentElement && !selectedField) {
        selectedElement = selectedElement.parentElement
        // eslint-disable-next-line no-loop-func
        selectedField = this.props.fields.find(field => field.field === selectedElement.dataset.field)
      }

      if (selectedField === null || (this.props.selectedElement && this.props.selectedElement.field === selectedField.field)) {
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

    return null
  }

  render() {
    return (
      <div
        className="jampp__Ad"
        ref={(element) => { this.adElement = element }}
      >
        <div ref={(element) => { this.adContentWrapper = element }}>
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
        </div>

        {this.state.highlightedElement && (
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
  onSelectElement: PropTypes.func,
  onCancelSelection: PropTypes.func,
  selectedElement: PropTypes.shape({
    field: PropTypes.string,
    type: PropTypes.string,
  }),
  children: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fields: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  placeholders: PropTypes.object, // eslint-disable-line react/forbid-prop-types
}

Ad.defaultProps = {
  onSelectElement: null,
  onCancelSelection: null,
  selectedElement: {},
  placeholders: {},
}

export default Ad
