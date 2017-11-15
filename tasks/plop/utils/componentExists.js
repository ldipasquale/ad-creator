
/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');

const Components = fs.readdirSync(path.join(__dirname, '../../../app/components'));
const Containers = fs.readdirSync(path.join(__dirname, '../../../app/containers'));
const Pages = fs.readdirSync(path.join(__dirname, '../../../app/pages'));


module.exports = {
  componentExists: comp => Components.indexOf(comp) >= 0,
  containerExists: comp => Containers.indexOf(comp) >= 0,
  pageExists: comp => Pages.indexOf(comp) >= 0,
};
