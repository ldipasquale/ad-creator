import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import FontStyleHandler from './handlers/FontStyleHandler'
import FontAlignHandler from './handlers/FontAlignHandler'

import './styles.sass'

class AdFieldHandler extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleModifierChange = this.handleModifierChange.bind(this)
  }

  handleModifierChange(newModifiers) {
    this.setState({
      ...this.state,
      ...newModifiers,
    })
  }

  render() {
    return (
      <div
        className="jampp__AdFieldHandler"
        style={this.props.style}
      >
        <div className="jampp__AdFieldHandler__Content">
          <FontStyleHandler
            onChange={this.handleModifierChange}
            value={this.state}
          />

          <FontAlignHandler
            onChange={this.handleModifierChange}
            value={this.state}
          />
        </div>
      </div>
    )
  }
}

AdFieldHandler.propTypes = {
}

AdFieldHandler.defaultProps = {
}

export default AdFieldHandler
