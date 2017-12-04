import { tagToNode, nodeToTag } from 'util/dom'
import { mapModifiersToStyle } from 'util/modifiers'

function processModifiers(originalTag, modifiers) {
  const tagNode = tagToNode(originalTag)

  Object.entries(modifiers).forEach(([elementId, elementModifiers]) => {
    const element = tagNode.querySelector(`[data-field=${elementId}`)

    if (element) {
      const elementStyle = mapModifiersToStyle(elementModifiers)

      Object.entries(elementStyle).forEach(([styleId, styleValue]) => {
        element.style[styleId] = styleValue
      })
    }
  })

  return nodeToTag(tagNode)
}

function replacePlaceholders(originalTag, placeholders) {
  let tag = originalTag

  const placeholdersArray = Object.entries(placeholders)

  placeholdersArray.forEach(([placeholder, placeholderValue]) => {
    tag = tag.replace(`{{${placeholder}}}`, placeholderValue)
  })

  return tag
}

export {
  processModifiers,
  replacePlaceholders,
}
