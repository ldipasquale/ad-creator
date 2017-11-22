import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Scroller from 'components/Scroller'
import AdFieldHandlerPaneledButton from 'components/AdFieldHandler/PaneledButton'

import FontFamilyLabel from './Label'

const FontFamilyHandler = ({ value, onChange }) => (
  <AdFieldHandlerPaneledButton
    buttonProps={{
      className: "jampp__AdFieldHandler__FontSettingsHandler__FontFamilyHandler__Button",
      children: 'Aa'
    }}
  >
    <Scroller>
      {['Arial', 'Open Sans', 'Courier', 'Helvetica Neue', 'Roboto', 'Palatino', 'Wawati SC'].map((fontFamily, index) => (
        <FontFamilyLabel
          key={index}
          selected={fontFamily === value}
          onClick={onChange}
        >
          {fontFamily}
        </FontFamilyLabel>
      ))}
    </Scroller>
  </AdFieldHandlerPaneledButton>
)

FontFamilyHandler.propTypes = {
  value: PropTypes.string,
}

FontFamilyHandler.defaultProps = {
  value: 'Arial',
}

export default FontFamilyHandler
