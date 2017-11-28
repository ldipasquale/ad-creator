import React from 'react'
import PropTypes from 'prop-types'

import Scroller from 'components/Scroller'
import AdFieldHandlerPaneledButton from 'components/AdFieldHandler/PaneledButton'

import fontFamilyValues from 'constants/modifiers/fontFamily'

import FontFamilyLabel from './Label'

const FontFamilyHandler = ({ value, onChange }) => (
  <AdFieldHandlerPaneledButton
    buttonProps={{
      className: 'jampp__AdFieldHandler__FontSettingsHandler__FontFamilyHandler__Button',
      children: 'Aa',
    }}
  >
    <Scroller>
      {fontFamilyValues.map((fontFamily, fontFamilyIndex) => (
        <FontFamilyLabel
          key={fontFamilyIndex}
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
  onChange: PropTypes.func.isRequired,
}

FontFamilyHandler.defaultProps = {
  value: fontFamilyValues[0],
}

export default FontFamilyHandler
