import fieldTypes from 'constants/fieldTypes'

function get(id) {
  return Promise.resolve({
    fields: [
      {
        id: 'container',
        type: fieldTypes.CONTAINER,
      },
      {
        id: 'adContainer',
        type: fieldTypes.CONTAINER,
      },
      {
        id: 'media',
        type: fieldTypes.IMAGE,
      },
      {
        id: 'headline',
        type: fieldTypes.TEXT,
      },
      {
        id: 'promoText',
        type: fieldTypes.TEXT,
      },
      {
        id: 'callToAction',
        type: fieldTypes.CONTAINED_TEXT,
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
