import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ColorPicker from 'components/ColorPicker'

import './styles.sass'

class GradientPicker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeColor: 'from',
    }

    this.handleActiveColorChange = this.handleActiveColorChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  handleActiveColorChange(newActiveColor) {
    this.setState({
      activeColor: newActiveColor,
    })
  }

  handleColorChange(color) {
    if (this.state.activeColor === 'from') {
      return this.props.onChange(color.hex, this.props.to)
    }

    return this.props.onChange(this.props.from, color.hex)
  }

  render() {
    return (
      <div>
        <div className="jampp__GradientPicker__Chooser">
          <div
            className="jampp__GradientPicker__Chooser__Background"
            style={{
              background: `linear-gradient(90deg, ${this.props.from}, ${this.props.to})`,
            }}
          >
            <span
              className={cx({
                jampp__GradientPicker__Chooser__Track: true,
                "jampp__GradientPicker__Chooser__Track--first": true,
                "jampp__GradientPicker__Chooser__Track--active": this.state.activeColor === 'from',
              })}
              onClick={() => this.handleActiveColorChange('from')}
            />

            <span
              className={cx({
                jampp__GradientPicker__Chooser__Track: true,
                "jampp__GradientPicker__Chooser__Track--last": true,
                "jampp__GradientPicker__Chooser__Track--active": this.state.activeColor === 'to',
              })}
              onClick={() => this.handleActiveColorChange('to')}
            />
          </div>
        </div>

        <ColorPicker
          color={this.state.activeColor === 'from' ? this.props.from : this.props.to}
          onChange={this.handleColorChange}
        />
      </div>
    )
  }
}

GradientPicker.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

GradientPicker.defaultProps = {
  from: '#000',
  to: '#fff',
}

export default GradientPicker
