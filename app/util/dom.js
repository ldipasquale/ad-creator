function tagToNode(tag) {
  const div = document.createElement('div')
  div.innerHTML = tag

  return div
}

export {
  tagToNode,
}
