/* global require, test, expect */
const { getObjectEntries, getObjectKeys, getObjectValues } = require('../src/index');

const testUser = {
  firstName: 'Alex',
  lastName: 'Ivanov',
  age: 36,
  sex: 'male',
  hight: 180,
  weight: 90
};

const entries = [...Object.entries(testUser)];
const keys = [...Object.keys(testUser)];
const values = [...Object.values(testUser)];

test(`Test User object entries equal [${entries}]`, () => {
  expect(getObjectEntries(testUser)).toStrictEqual(entries);
});

test(`Test User object keys equal [${keys}]`, () => {
  expect(getObjectKeys(testUser)).toStrictEqual(keys);
});

test(`Test User object values equal [${values}]`, () => {
  expect(getObjectValues(testUser)).toStrictEqual(values);
});