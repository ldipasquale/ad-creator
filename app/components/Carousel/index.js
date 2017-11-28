import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './styles.sass'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="jampp__Carousel">
        <Slider
          arrows={false}
          dots={false}
          infinite
          slidesToShow={3}
          slidesToScroll={1}
          centerMode
          focusOnSelect
          afterChange={this.props.onChange}
        >
          {this.props.children}
        </Slider>
      </div>
    )
  }
}

Carousel.propTypes = {
}

Carousel.defaultProps = {
}

export default Carousel
