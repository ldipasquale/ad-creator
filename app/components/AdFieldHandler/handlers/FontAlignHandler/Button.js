import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AdFieldHandlerButton from 'components/AdFieldHandler/Button'

const FontAlignHandler = ({ type, selected, onChange }) => (
  <AdFieldHandlerButton
    className={cx({
      jampp__AdFieldHandler__FontAlignHandler__Button: true,
      [`jampp__AdFieldHandler__FontAlignHandler__Button--type-${type}`]: true,
    })}
    selected={selected}
    selectedClassName="jampp__AdFieldHandler__FontAlignHandler__Button--selected"
    onClick={onChange}
  >
    <span
      className={cx(
        'jampp__AdFieldHandler__FontAlignHandler__Button__Line',
        'jampp__AdFieldHandler__FontAlignHandler__Button__Line--first',
      )}
    />

    <span
      className={cx(
        'jampp__AdFieldHandler__FontAlignHandler__Button__Line',
        'jampp__AdFieldHandler__FontAlignHandler__Button__Line--second',
      )}
    />

    <span
      className={cx(
        'jampp__AdFieldHandler__FontAlignHandler__Button__Line',
        'jampp__AdFieldHandler__FontAlignHandler__Button__Line--third',
      )}
    />
  </AdFieldHandlerButton>
)

FontAlignHandler.propTypes = {
  type: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

FontAlignHandler.defaultProps = {
  selected: false,
}

export default FontAlignHandler
