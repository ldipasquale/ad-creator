import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AdFieldHandlerButton from 'components/AdFieldHandler/Button'
import AdFieldHandlerPanel from 'components/AdFieldHandler/Panel'

class AdFieldHandlerPaneledButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isPanelOpened: false,
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  handleButtonClick() {
    if (this.state.isPanelOpened) {
      document.removeEventListener('click', this.handleOutsideClick, false);
    } else {
      document.addEventListener('click', this.handleOutsideClick, false);
    }

    this.setState({
      isPanelOpened: !this.state.isPanelOpened,
    })
  }

  handleOutsideClick(event) {
    if (this.panelElement.contains(event.target)) {
      return
    }

    this.handleButtonClick()
  }

  render() {
    return (
      <span className="jampp__AdFieldHandler__PaneledButton">
        <AdFieldHandlerButton
          {...this.props.buttonProps}
          onClick={this.handleButtonClick}
          className={cx({
            [this.props.buttonProps.className]: this.props.buttonProps.className !== undefined,
            jampp__AdFieldHandler__PaneledButton__Button: true,
          })}
        />

        <AdFieldHandlerPanel
          isOpen={this.state.isPanelOpened}
          onRef={element => this.panelElement = element}
        >
          {this.props.children}
        </AdFieldHandlerPanel>
      </span>
    )
  }
}

AdFieldHandlerPaneledButton.propTypes = {
}

AdFieldHandlerPaneledButton.defaultProps = {
}

export default AdFieldHandlerPaneledButton
