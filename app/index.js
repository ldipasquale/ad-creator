import React from 'react'
import ReactDOM from 'react-dom'

import 'stylesheets/vendor/sanitize.css'
import 'stylesheets/vendor/reset.css'
import 'stylesheets/global.sass'

import Editor from 'pages/Editor'

ReactDOM.render(
  <Editor />,
  document.getElementById('jampp-app'),
)

