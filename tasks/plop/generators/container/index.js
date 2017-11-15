/**
 * container Generator
 */

/* eslint strict: ["off"] */

'use strict';

const containerExists = require('../../utils/componentExists').componentExists;

module.exports = {
  description: 'Add an unconnected container',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of container',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'ES6 Class (Pure)', 'ES6 Class'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'ContainerName',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return containerExists(value) ? 'A component, page or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    let containerTemplate;

    switch (data.type) {
      case 'ES6 Class': {
        containerTemplate = './container/es6.js.hbs';
        break;
      }
      case 'ES6 Class (Pure)': {
        containerTemplate = './container/es6.pure.js.hbs';
        break;
      }
      case 'Stateless Function': {
        containerTemplate = './container/stateless.js.hbs';
        break;
      }
      default: {
        containerTemplate = './container/es6.js.hbs';
      }
    }

    const actions = [{
      type: 'add',
      path: '../../../app/containers/{{properCase name}}/index.js',
      templateFile: containerTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../../app/containers/{{properCase name}}/reducer.js',
      templateFile: './container/reducer.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../../app/containers/{{properCase name}}/styles.scss',
      templateFile: './container/container.styles.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../../app/containers/{{properCase name}}/stories.js',
      templateFile: './container/stories.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../../app/containers/{{properCase name}}/scss/mobile.scss',
      templateFile: './container/container.child.styles.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../../app/containers/{{properCase name}}/scss/tablet.scss',
      templateFile: './container/container.child.styles.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../../app/containers/{{properCase name}}/scss/desktop.scss',
      templateFile: './container/container.child.styles.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
