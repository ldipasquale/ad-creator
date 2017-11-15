import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Theme from 'services/Theme'

import fieldTypes from 'constants/fieldTypes'

import 'css-scoper'
import './styles.sass'

class Ad extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    Theme.get().then(theme => this.availableFields = theme.fields)
  }

  handleClick(event) {
    event.preventDefault()


    let selectedElement = event.target
    let selectedField = this.availableFields.find(field => field.id === selectedElement.dataset.field)

    while (selectedElement.parentElement && !selectedField) {
      selectedElement = selectedElement.parentElement
      selectedField = this.availableFields.find(field => field.id === selectedElement.dataset.field)
    }

    if (selectedField) {
      const adElementProperties = this.adElement.getBoundingClientRect()

      const selectedElementProperties = selectedElement.getBoundingClientRect()
      const selectedElementBorderRadius = parseInt(getComputedStyle(selectedElement).getPropertyValue("border-radius"))

      return this.props.onSelectElement({
        width: Math.floor(selectedElementProperties.width) + 10,
        height: Math.ceil(selectedElementProperties.height) + 10,
        top: Math.ceil(selectedElementProperties.top) - 5,
        left: Math.floor(selectedElementProperties.left) - 5,
        ...selectedElementBorderRadius && {
          borderRadius: `${selectedElementBorderRadius + 3}px`,
        },
      })
    }

    return this.props.onCancelSelection()
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
          onClick={this.handleClick}
          ref={element => this.adContent = element}
        />
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
