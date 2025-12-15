'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};
  const styleEntries = sourceString
    .split(';')
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0);

  styleEntries.forEach((entry) => {
    const [rawKey, ...rawValueParts] = entry.split(':');

    if (rawKey && rawValueParts.length > 0) {
      const key = rawKey.trim();
      const value = rawValueParts.join(':').trim();

      resultObject[key] = value;
    }
  });

  return resultObject;
}

module.exports = convertToObject;
