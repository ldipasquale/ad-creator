function replacePlaceholdersInTag(placeholders, originalTag) {
  let tag = originalTag

  const placeholdersArray = Object.entries(placeholders)

  placeholdersArray.forEach(([placeholder, placeholderValue]) => {
    tag = tag.replace(`{{${placeholder}}}`, placeholderValue)
  })

  return tag
}

export {
  replacePlaceholdersInTag,
}
