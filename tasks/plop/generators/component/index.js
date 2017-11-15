/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../../utils/componentExists').componentExists;

module.exports = {
  description: 'Add an unconnected component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'ES6 Class (Pure)', 'ES6 Class'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component, page or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    let componentTemplate;

    switch (data.type) {
      case 'ES6 Class': {
        componentTemplate = './component/es6.js.hbs';
        break;
      }
      case 'ES6 Class (Pure)': {
        componentTemplate = './component/es6.pure.js.hbs';
        break;
      }
      case 'Stateless Function': {
        componentTemplate = './component/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/es6.js.hbs';
      }
    }

    const actions = [{
      type: 'add',
      path: '../../../app/components/{{properCase name}}/index.js',
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../../app/components/{{properCase name}}/tests/storyshots.test.js',
      templateFile: './component/storyshots.test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../../app/components/{{properCase name}}/styles.sass',
      templateFile: './component/component.styles.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../../app/components/{{properCase name}}/stories.js',
      templateFile: './component/stories.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../../app/components/{{properCase name}}/sass/mobile.sass',
      templateFile: './component/component.child.styles.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../../app/components/{{properCase name}}/sass/tablet.sass',
      templateFile: './component/component.child.styles.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../../app/components/{{properCase name}}/sass/desktop.sass',
      templateFile: './component/component.child.styles.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
