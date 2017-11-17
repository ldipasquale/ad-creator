import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AdFieldHandlerPaneledButton from 'components/AdFieldHandler/PaneledButton'

const FontFamilyHandler = ({ value, onChange }) => (
  <AdFieldHandlerPaneledButton
    buttonProps={{
      className: "jampp__AdFieldHandler__FontSettingsHandler__FontFamilyHandler__Button",
      style: {
        backgroundColor: value,
      },
      children: 'Aa'
    }}
    value={value}
    onChange={onChange}
  >
    FontFamiyl
  </AdFieldHandlerPaneledButton>
)

FontFamilyHandler.propTypes = {
  value: PropTypes.string,
}

FontFamilyHandler.defaultProps = {
  value: 'Arial',
}

export default FontFamilyHandler
