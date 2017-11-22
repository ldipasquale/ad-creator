import React from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'
import cx from 'classnames'

import elements from 'constants/elements'

import TextHandler from './types/TextHandler'
import ContainerHandler from './types/ContainerHandler'
import ContainerTextHandler from './types/ContainerTextHandler'

import './styles.sass'

const componentsByElementsKind = {
  [elements.TEXT]: TextHandler,
  [elements.CONTAINER]: ContainerHandler,
  [elements.CONTAINED_TEXT]: ContainerTextHandler,
}

const AdFieldHandler = ({ type, onChange, modifiers, style }) => {
  const handleModifiersChange = newModifiers => onChange({
    ...modifiers,
    ...newModifiers,
  })

  const HandlerComponent = componentsByElementsKind[type]

  return (
    <div
      className="jampp__AdFieldHandler"
      style={style}
    >
      <div className="jampp__AdFieldHandler__Content">
        <HandlerComponent
          onChangeModifiers={handleModifiersChange}
          modifiers={modifiers}
        />
      </div>
    </div>
  )
}

AdFieldHandler.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  modifiers: PropTypes.object.isRequired,
  style: stylePropType.isRequired,
}

export default AdFieldHandler
