import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './styles.sass'

class AdFieldHandlerPanel extends React.Component {
  render() {
    return (
      <div
        className={cx({
          jampp__AdFieldHandler__Panel: true,
          "jampp__AdFieldHandler__Panel--open": this.props.isOpen,
        })}
        {...this.props.onRef && {
          ref: this.props.onRef,
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

AdFieldHandlerPanel.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRef: PropTypes.func,
}

AdFieldHandlerPanel.defaultProps = {
  onRef: null,
}

export default AdFieldHandlerPanel
