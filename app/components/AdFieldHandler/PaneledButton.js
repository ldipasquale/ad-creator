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

  componentDidMount() {
    const wrapperHandlerElementProperties = this.wrapperElement.parentElement.parentElement.getBoundingClientRect()

    let negativeXPosition = -1

    if (wrapperHandlerElementProperties.width < minPanelWidth) {
      negativeXPosition = ((minPanelWidth - wrapperHandlerElementProperties.width) / 2) * -1
    } else if (wrapperHandlerElementProperties.width > maxPanelWidth) {
      negativeXPosition = ((maxPanelWidth - wrapperHandlerElementProperties.width) / 2) * -1
    }

    if (negativeXPosition !== -1) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        panelStyle: {
          left: negativeXPosition,
          right: negativeXPosition,
        },
      })
    }
  }

  handleButtonClick() {
    if (this.state.isPanelOpened) {
      document.removeEventListener('click', this.handleOutsideClick, false)
    } else {
      document.addEventListener('click', this.handleOutsideClick, false)
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

  render() {
    return (
      <span
        className="jampp__AdFieldHandler__PaneledButton"
        ref={(element) => { this.wrapperElement = element }}
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
          onRef={(element) => { this.panelElement = element }}
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
  buttonProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

AdFieldHandlerPaneledButton.defaultProps = {
  buttonProps: {},
  className: null,
}

export default AdFieldHandlerPaneledButton
