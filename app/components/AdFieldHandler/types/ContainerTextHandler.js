import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import modifiersValues from 'constants/modifiers'

import ContainerSettingsHandler from '../handlers/ContainerSettingsHandler'
import FontStyleHandler from '../handlers/FontStyleHandler'
import FontAlignHandler from '../handlers/FontAlignHandler'
import FontSettingsHandler from '../handlers/FontSettingsHandler'

const Wrapper = ({ children }) => children

const ContainerTextHandler = ({ onChangeModifiers, modifiers }) => (
  <Wrapper>
    <ContainerSettingsHandler
      onChange={onChangeModifiers}
      value={modifiers}
    />

    <FontStyleHandler
      onChange={onChangeModifiers}
      value={{
        [modifiersValues.IS_FONT_BOLD]: modifiers[modifiersValues.IS_FONT_BOLD],
        [modifiersValues.IS_FONT_ITALIC]: modifiers[modifiersValues.IS_FONT_ITALIC],
        [modifiersValues.IS_FONT_UNDERLINE]: modifiers[modifiersValues.IS_FONT_UNDERLINE],
      }}
    />

    <FontSettingsHandler
      onChange={onChangeModifiers}
      value={{
        [modifiersValues.FONT_COLOR]: modifiers[modifiersValues.FONT_COLOR],
        [modifiersValues.FONT_FAMILY]: modifiers[modifiersValues.FONT_FAMILY],
      }}
    />
  </Wrapper>
)

ContainerTextHandler.propTypes = {
  onChangeModifiers: PropTypes.func.isRequired,
  modifiers: PropTypes.object.isRequired,
}

export default ContainerTextHandler
