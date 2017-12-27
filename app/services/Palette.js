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
      fields: rawPalettes.theme_fields,
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
    theme_id: 10,
    name: rawPalette.name,
    templates: rawPalette.templates.map(template => ({
      tag: template.tag,
      creative_size_id: template.creative_size.id,
    })),
    theme_fields: rawPalette.fields
      .filter(field => Object.keys(rawPalette.modifiers[field.field]).length > 0)
      .map(field => ({
        ...field,
        palette_modifiers: Object.entries(rawPalette.modifiers[field.field])
          .filter(([modifierId, modifierValue]) => modifierValue !== undefined)
          .map(([modifierId, modifierValue]) => ({
            modifier: modifierId,
            value: modifierValue,
          }))
      })),
  }

  return CreativesAPI.post('/palettes/', palette)
}

export default {
  get,
  save,
}
