import elements from 'constants/elements'

function get(id) {
  return Promise.resolve({
    fields: [
      {
        id: 'container',
        type: elements.CONTAINER,
      },
      {
        id: 'adContainer',
        type: elements.CONTAINER,
      },
      {
        id: 'media',
        type: elements.IMAGE,
      },
      {
        id: 'headline',
        type: elements.TEXT,
      },
      {
        id: 'promoText',
        type: elements.TEXT,
      },
      {
        id: 'callToAction',
        type: elements.CONTAINED_TEXT,
      },
      {
        id: 'rating',
        type: 'container',
      },
    ],
  })
}

export default {
  get,
}
