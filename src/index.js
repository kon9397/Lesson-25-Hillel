/* global module */
const getObjectEntries = (obj) => {
  const entriesArray = [];

  for(const item in obj) {
    entriesArray.push([item, obj[item]]);
  }

  return entriesArray;
};
const getObjectKeys = (obj) => {
  const keysArray = [];

  for(const item in obj) {
    keysArray.push(item);
  }

  return keysArray;
};
const getObjectValues = (obj) => {
  const valuesArray = [];

  for(const item in obj) {
    valuesArray.push(obj[item]);
  }

  return valuesArray;
};

module.exports = {
  getObjectEntries,
  getObjectKeys,
  getObjectValues,
};
