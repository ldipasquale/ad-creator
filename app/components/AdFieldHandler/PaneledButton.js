import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AdFieldHandlerButton from 'components/AdFieldHandler/Button'
import AdFieldHandlerPanel from 'components/AdFieldHandler/Panel'

const minPanelWidth = 170
const maxPanelWidth = 200

class AdFieldHandlerPaneledButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isPanelOpened: false,
      panelStyle: null,
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
    if (!this.panelElement || this.panelElement.contains(event.target)) {
      return
    }

    this.handleButtonClick()
  }

  componentDidMount() {
    const wrapperHandlerElementProperties = this.wrapperElement.parentElement.parentElement.getBoundingClientRect()

    if (wrapperHandlerElementProperties.width < minPanelWidth) {
      const negativeXPosition = (minPanelWidth - wrapperHandlerElementProperties.width) / 2 * -1

      this.setState({
        panelStyle: {
          left: negativeXPosition,
          right: negativeXPosition,
        },
      })
    } else if (wrapperHandlerElementProperties.width > maxPanelWidth) {
      const negativeXPosition = (maxPanelWidth - wrapperHandlerElementProperties.width) / 2 * -1

      this.setState({
        panelStyle: {
          left: negativeXPosition,
          right: negativeXPosition,
        },
      })
    }
  }

  render() {
    return (
      <span
        className="jampp__AdFieldHandler__PaneledButton"
        ref={element => this.wrapperElement = element}
      >
        <AdFieldHandlerButton
          {...this.props.buttonProps}
          onClick={this.handleButtonClick}
          className={cx({
            [this.props.buttonProps.className]: this.props.buttonProps.className !== undefined,
            jampp__AdFieldHandler__PaneledButton__Button: true,
          })}
          selected={this.state.isPanelOpened}
        />

        <AdFieldHandlerPanel
          isOpen={this.state.isPanelOpened}
          onRef={element => this.panelElement = element}
          {...this.props.className && {
            className: this.props.className,
          }}
          {...this.state.panelStyle && {
            style: this.state.panelStyle,
          }}
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
