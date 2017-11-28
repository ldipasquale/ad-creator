import React from 'react'
import { storiesOf } from '@storybook/react'
import GradientPicker from './'

storiesOf('GradientPicker', module)
  .add('Default', () => (
    <GradientPicker />
  ))
