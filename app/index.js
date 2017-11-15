import React from 'react'
import ReactDOM from 'react-dom'

import 'stylesheets/vendor/sanitize.css'
import 'stylesheets/vendor/reset.css'
import 'stylesheets/global.sass'

import Examples from 'pages/Examples'

ReactDOM.render(
  <Examples />,
  document.getElementById('jampp-app'),
)

