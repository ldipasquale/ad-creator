import React from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'
import classNames from 'classnames'

import './styles.sass'

import TabsItem from './TabsItem'

const mapNodeToTabs = tabs => React.Children.map(tabs, child => ({
  title: child.props.title,
  path: child.props.path,
  headerClassName: child.props.headerClassName,
}))

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
    const tabs = mapNodeToTabs(this.props.children)

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

  componentWillReceiveProps(nextProps) {
    this.setState({
      tabs: mapNodeToTabs(nextProps.children),
    })
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
        <div className={this.props.classNames.header}>
          {this.state.tabs.map((tab, i) => (
            <div
              key={i} // eslint-disable-line react/no-array-index-key
              onClick={() => this.handleTabClick(i)}
              className={classNames({
                [this.props.classNames.headerItem]: true,
                [this.props.classNames.headerActiveItem]: i === this.state.activeTabIndex,
                [tab.headerClassName]: tab.headerClassName !== null,
              })}
            >
              {tab.title}
            </div>
          ))}
        </div>

        <div
          className={classNames({
            [this.props.classNames.body]: true,
          })}
          style={this.props.bodyStyle}
        >
          {this.props.children[this.state.activeTabIndex]}
        </div>
      </div>
    )
  }
}

Tabs.propTypes = {
  onChange: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  bodyStyle: stylePropType,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  selectedTabPath: PropTypes.string,
  classNames: PropTypes.shape({
    header: PropTypes.string,
    headerItem: PropTypes.string,
    headerActiveItem: PropTypes.string,
    body: PropTypes.string,
  }),
}

Tabs.defaultProps = {
  onChange: null,
  bodyStyle: {},
  selectedTabPath: null,
  classNames: {
    header: 'jampp__Tabs__Header',
    headerItem: 'jampp__Tabs__Header__Title',
    headerActiveItem: 'jampp__Tabs__Header__Title--active',
    body: 'jampp__Tabs__Body',
  },
}

export { Tabs, TabsItem }
