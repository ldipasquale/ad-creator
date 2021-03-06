function tagToNode(tag) {
  const div = document.createElement('div')
  div.innerHTML = tag

  return div
}

function nodeToTag(node) {
  return node.innerHTML
}

function scopeTag(tag, prefix) {
  const re = new RegExp('([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)', 'g') // eslint-disable-line no-control-regex,no-useless-escape

  return tag.replace(re, (trash, rawElement, brackets) => {
    if (rawElement.match(/^\s*(@media|@.*keyframes|to|from|@font-face|1?[0-9]?[0-9])/)) {
      return `${rawElement}${brackets}`
    }

    let element = rawElement

    if (element.match(/:scope/)) {
      element = rawElement.replace(/([^\s]*):scope/, ((h0, h1) => {
        if (h1 === '') {
          return '> *'
        }
        return `> ${h1}`
      }))
    }

    element = element.replace(/^(\s*)/, `$1${prefix} `)

    return `${element}${brackets}`
  })
}

function scopeCss(element, originalDestination, prefix) {
  let destination = originalDestination

  destination.innerHTML = ''

  const styles = element.querySelectorAll('style[scoped]')

  const head = document.head || document.getElementsByTagName('head')[0]

  styles.forEach((style, styleIndex) => {
    const styleTag = style.innerHTML

    if (styleTag !== null) {
      const styleId = `${prefix}_${styleIndex}`
      const stylePrefix = `#${styleId}`

      const newStyle = document.createElement('style')

      const wrapperNode = document.createElement('span')
      wrapperNode.id = styleId

      destination = destination.appendChild(wrapperNode)
      wrapperNode.appendChild(style.parentNode)
      style.parentNode.removeChild(style)

      const scopedStyleTag = scopeTag(styleTag, stylePrefix)

      newStyle.appendChild(document.createTextNode(scopedStyleTag))

      head.appendChild(newStyle)
    }
  })
}

export {
  tagToNode,
  nodeToTag,
  scopeCss,
}

