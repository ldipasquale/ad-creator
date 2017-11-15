/**
 * page Generator
 */

/* eslint strict: ["off"] */

'use strict';

const pageExists = require('../../utils/componentExists').pageExists;

module.exports = {
  description: 'Add an unconnected page',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of page',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'ES6 Class (Pure)', 'ES6 Class'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'pageName',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return pageExists(value) ? 'A component, page or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    let pageTemplate;

    switch (data.type) {
      case 'ES6 Class': {
        pageTemplate = './page/es6.js.hbs';
        break;
      }
      case 'ES6 Class (Pure)': {
        pageTemplate = './page/es6.pure.js.hbs';
        break;
      }
      case 'Stateless Function': {
        pageTemplate = './page/stateless.js.hbs';
        break;
      }
      default: {
        pageTemplate = './page/es6.js.hbs';
      }
    }

    const actions = [{
      type: 'add',
      path: '../../../app/pages/{{properCase name}}/index.js',
      templateFile: pageTemplate,
      abortOnFail: true,
    }];

    return actions;
  },
};
