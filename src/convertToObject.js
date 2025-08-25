'use strict';

/**
 * @param {string} stylesString
 * @returns {Object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split('\n')
    .filter(line => line.trim() && line.includes(':')) // оставляем только строки с :
    .reduce((acc, line) => {
      const [property, ...valueParts] = line.replace(/;$/, '').split(':');
      acc[property.trim()] = valueParts.join(':').trim();
      return acc;
    }, {});
}

module.exports = convertToObject;
