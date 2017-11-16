import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const FontAlignHandler = ({ type, selected, onChange }) => (
  <div
    className={cx({
      jampp__AdFieldHandler__FontAlignHandler__Button: true,
      [`jampp__AdFieldHandler__FontAlignHandler__Button--type-${type}`]: true,
      'jampp__AdFieldHandler__FontAlignHandler__Button--selected': selected,
    })}
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
  </div>
)

FontAlignHandler.propTypes = {
  type: PropTypes.string.isRequired,
  selected: PropTypes.bool,
}

FontAlignHandler.defaultProps = {
  selected: false,
}

export default FontAlignHandler
