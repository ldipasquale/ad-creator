import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import FontStyleHandler from './handlers/FontStyleHandler'
import FontAlignHandler from './handlers/FontAlignHandler'
import FontSettingsHandler from './handlers/FontSettingsHandler'

import modifiersValues from 'constants/modifiers'
import fontAlignValues from 'constants/modifiers/fontAlign'

import './styles.sass'

const AdFieldHandler = ({ onChange, modifiers, style }) => {
  const handleModifiersChange = (newModifiers) => onChange({
    ...modifiers,
    ...newModifiers,
  })

  return (
    <div
      className="jampp__AdFieldHandler"
      style={style}
    >
      <div className="jampp__AdFieldHandler__Content">
        <FontStyleHandler
          onChange={handleModifiersChange}
          value={{
            [modifiersValues.IS_FONT_BOLD]: modifiers[modifiersValues.IS_FONT_BOLD],
            [modifiersValues.IS_FONT_ITALIC]: modifiers[modifiersValues.IS_FONT_ITALIC],
            [modifiersValues.IS_FONT_UNDERLINE]: modifiers[modifiersValues.IS_FONT_UNDERLINE],
          }}
        />

        <FontAlignHandler
          onChange={value => handleModifiersChange({ [modifiersValues.FONT_ALIGN]: value })}
          value={modifiers[modifiersValues.FONT_ALIGN]}
        />

        <FontSettingsHandler
          onChange={handleModifiersChange}
          value={{
            [modifiersValues.FONT_COLOR]: modifiers[modifiersValues.FONT_COLOR],
          }}
        />
      </div>
    </div>
  )
}

AdFieldHandler.propTypes = {
}

AdFieldHandler.defaultProps = {
}

export default AdFieldHandler
