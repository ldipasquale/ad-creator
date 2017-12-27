import palettesMock from './mocks/palettes'

import { CreativesAPI } from './api'

function get(id) {
  return CreativesAPI.get(`/palettes/${id}`, {
    params: {
      include: 'templates,theme_fields',
    },
  }).then(response => {
    const rawPalettes = response.data.data

    const palettes = {
      ...rawPalettes,
      fields: rawPalettes.theme_fields.map(field => ({
        ...field,
        type: 'text',
      })),
      modifiers: rawPalettes.theme_fields
        .filter(field => field.palette_modifiers !== undefined)
        .reduce((modifiersAccumulator, field) => ({
          ...modifiersAccumulator,
          [field.field]: field.palette_modifiers.reduce((fieldModifiersAccumulator, modifier) => ({
            ...fieldModifiersAccumulator,
            [modifier.modifier]: modifier.value,
          }), {}),
        }), {}),
    }

    return palettes
  })
}

function save(rawPalette) {
  const palette = {
    name: rawPalette.name,
    templates: rawPalette.templates,
    theme_fields: rawPalette.fields.map(field => ({
      ...field,
      palette_modifiers: rawPalette.modifiers !== undefined && rawPalette.modifiers[field.field] !== undefined
        ? Object.entries(rawPalette.modifiers[field.field]).map(([modifierId, modifierValue]) => ({
          modifier: modifierId,
          value: modifierValue,
        }))
        : [],
    }))
  }

  return CreativesAPI.post('/palettes/', palette)
}

export default {
  get,
  save,
}
