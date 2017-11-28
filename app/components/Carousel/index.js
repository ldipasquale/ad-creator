import React from 'react'
import PropTypes from 'prop-types'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './styles.sass'

const Carousel = ({ onChange, children }) => (
  <div className="jampp__Carousel">
    <Slider
      arrows={false}
      dots={false}
      infinite
      slidesToShow={3}
      slidesToScroll={1}
      centerMode
      focusOnSelect
      afterChange={onChange}
    >
      {children}
    </Slider>
  </div>
)

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
}

Carousel.defaultProps = {
  onChange: null,
}

export default Carousel
