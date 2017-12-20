import palettesMock from './mocks/palettes';

import { CreativesAPI } from './api';

function get() {
  const palettes = {
    ...palettesMock,
    modifiers: palettesMock.fields
      .filter(field => field.modifiers !== undefined)
      .reduce((modifiersAccumulator, field) => ({
        ...modifiersAccumulator,
        [field.id]: field.modifiers.reduce((fieldModifiersAccumulator, modifier) => ({
          ...fieldModifiersAccumulator,
          [modifier.modifier]: modifier.value,
        }), {}),
      }), {}),
  }

  return Promise.resolve(palettes)
}

function save(rawPalette) {
  const palette = {
    name: rawPalette.name,
    templates: rawPalette.templates,
    fields: rawPalette.fields.map(field => ({
      ...field,
      ...rawPalette.modifiers[field.id] !== undefined && {
        modifiers: Object.entries(rawPalette.modifiers[field.id]).map(([modifierId, modifierValue]) => ({
          modifier: modifierId,
          value: modifierValue,
        })),
      },
    }))
  }

  return CreativesAPI.post('/palette', palette)
}

export default {
  get,
  save,
}
