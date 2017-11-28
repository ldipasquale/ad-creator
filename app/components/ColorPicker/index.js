import React from 'react'
import PropTypes from 'prop-types'

import { ColorWrap, Saturation, Hue, EditableInput } from 'react-color/lib/components/common'

import './styles.sass'

const PointerCircle = () => (
  <span className="jampp__ColorPicker__Pointer" />
)

const ColorPicker = ({
  hex, hsl, hsv, onChange,
}) => (
  <div className="jampp__ColorPicker">
    <div className="jampp__ColorPicker__Saturation">
      <Saturation
        hsl={hsl}
        hsv={hsv}
        pointer={PointerCircle}
        onChange={onChange}
      />

      <div className="jampp__ColorPicker__ColorInput">
        <EditableInput
          value={hex}
          onChange={color => onChange({
            hex: color,
            source: 'hex',
          })}
        />
      </div>
    </div>

    <div className="jampp__ColorPicker__Hue">
      <Hue
        direction="vertical"
        hsl={hsl}
        pointer={PointerCircle}
        onChange={onChange}
      />
    </div>
  </div>
)

export default ColorWrap(ColorPicker)
