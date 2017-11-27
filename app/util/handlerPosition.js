import elements from 'constants/elements'

const horizontalMargin = 200
const minHandlerHeight = 23

function getHandlerPosition(element, adHeight) {
  if (element.type === elements.CONTAINER) {
    return {
      width: element.style.width + horizontalMargin,
      left: element.handlerPosition.left - (horizontalMargin / 2),
      top: element.adElementStyle.top + (element.adElementStyle.height - minHandlerHeight) / 2,
    }
  }

  let topPosition = element.handlerPosition.top + element.style.height

  /*
  const resizedAdHeight = adHeight * 0.8

  if ((topPosition + minHandlerHeight) > resizedAdHeight) {
    topPosition = element.handlerPosition.top - element.style.height
  }
  */

  return {
    width: element.style.width + horizontalMargin,
    left: element.handlerPosition.left - (horizontalMargin / 2),
    top: topPosition,
  }
}

export {
  getHandlerPosition,
}
