function scopeTag(tag, prefix) {
  var re = new RegExp("([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)", "g")

  tag = tag.replace(re, (trash, element, brackets) => {
    if (element.match(/^\s*(@media|@keyframes|to|from|@font-face)/)) {
      return `${element}${brackets}`
    }

    if (element.match(/:scope/)) {
      element = element.replace(/([^\s]*):scope/, ((h0, h1) => {
        if (h1 === "") {
          return "> *"
        } else {
          return "> " + h1
        }
      }))
    }

    element = element.replace(/^(\s*)/, `$1${prefix} `)

    return `${element}${brackets}`
  })
  
  return tag
}

function scope(element, prefix) {
  const styles = element.querySelectorAll("style[scoped]")

  const head = document.head || document.getElementsByTagName("head")[0]

  styles.forEach((style, styleIndex) => {
    const styleTag = style.innerHTML

    if (styleTag !== null) {
      const styleId = `${prefix}-scoper${styleIndex}`
      const stylePrefix = `#${styleId}`

      const newStyle = document.createElement("style")

      const wrapperNode = document.createElement("span")
      wrapperNode.id = styleId

      const parentNode = style.parentNode
      const grandParentNode = parentNode.parentNode

      grandParentNode.replaceChild(wrapperNode, parentNode)
      wrapperNode.appendChild(parentNode)
      style.parentNode.removeChild(style)

      const scopedStyleTag = scopeTag(styleTag, stylePrefix)

      newStyle.appendChild(document.createTextNode(scopedStyleTag))

      head.appendChild(newStyle)
    }
  })
}

module.exports = scope
