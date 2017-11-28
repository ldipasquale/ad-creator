import React from 'react'
import PropTypes from 'prop-types'

import InputRange from 'react-input-range'

import 'react-input-range/lib/css/index.css'
import './styles.sass'

const CustomInputRange = ({ value, onChange }) => (
  <InputRange
    maxValue={10}
    minValue={0}
    value={value}
    onChange={onChange}
    classNames={{
      slider: 'input-range__slider jampp__InputRange__Slider',
      sliderContainer: 'input-range__slider-container jampp__InputRange__Slider__Container',
      inputRange: 'input-range jampp__InputRange__Input',
      disabledInputRange: 'input-range input-range--disabled jampp__InputRange__Input--disabled',
      labelContainer: 'input-range__label-container jampp__InputRange__Label__Container',
      maxLabel: 'input-range__label input-range__label--max jampp__InputRange__Label--max',
      minLabel: 'input-range__label input-range__label--min jampp__InputRange__Label--min',
      valueLabel: 'input-range__label input-range__label--value jampp__InputRange__Label--value',
      track: 'input-range__track input-range__track--background jampp__InputRange__Track',
      activeTrack: 'input-range__track input-range__track--active jampp__InputRange__Track--active',
    }}
  />
)

CustomInputRange.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default CustomInputRange
