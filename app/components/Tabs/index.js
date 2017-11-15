import React from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'
import classNames from 'classnames'

import './styles.sass'

import TabsItem from './TabsItem'

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      activeTabIndex: 0,
      tabs: [],
    }

    this.handleTabClick = this.handleTabClick.bind(this)
  }

  componentWillMount() {
    const tabs = React.Children.map(this.props.children, child => ({
      title: child.props.title,
      path: child.props.path,
      headerClassName: child.props.headerClassName,
    }))

    let newState = { tabs }

    if (this.props.selectedTabPath) {
      const activeTabIndex = tabs.findIndex(tab => tab.path === this.props.selectedTabPath)

      newState = {
        tabs,
        activeTabIndex,
      }

      if (this.props.onChange) {
        this.props.onChange(tabs[activeTabIndex])
      }
    }

    this.setState(newState)
  }

  handleTabClick(selectedIndex) {
    this.setState({
      activeTabIndex: selectedIndex,
    })

    if (this.props.onChange) {
      this.props.onChange(this.state.tabs.find((tab, index) => selectedIndex === index))
    }
  }

  render() {
    return (
      <div>
        <div className="jampp__Tabs__Header">
          {this.state.tabs.map((tab, i) => (
            <span
              key={i} // eslint-disable-line react/no-array-index-key
              onClick={() => this.handleTabClick(i)}
              className={classNames({
                jampp__Tabs__Header__Title: true,
                'jampp__Tabs__Header__Title--active': i === this.state.activeTabIndex,
                [tab.headerClassName]: tab.headerClassName !== null,
              })}
            >
              {tab.title}
            </span>
          ))}
        </div>

        <div
          className={classNames({
            jampp__Tabs__Body: true,
            [this.props.bodyClassName]: this.props.bodyClassName !== null,
          })}
          style={this.props.bodyStyle}
        >
          {this.props.children.map((tabItem, i) => (
            <div
              key={i}
              style={{
                display: i === this.state.activeTabIndex ? 'block' : 'none',
              }}
            >
              {tabItem}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

Tabs.propTypes = {
  contentWrapper: PropTypes.func,
  onChange: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  bodyClassName: PropTypes.string,
  bodyStyle: stylePropType,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  selectedTabPath: PropTypes.string,
}

Tabs.defaultProps = {
  contentWrapper: children => children,
  onChange: null,
  bodyClassName: null,
  bodyStyle: {},
  selectedTabPath: null,
}

export { Tabs, TabsItem }
