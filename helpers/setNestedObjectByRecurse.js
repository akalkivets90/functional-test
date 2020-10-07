const assert = require('assert');

const setNestedObjectByRecurse = obj => {
  const recurse = data => {
    Object.keys(data).forEach(item => {
      const value = data[item]
      if (item === 'name') {
        data[item] = `My name is: ${value}`;
      }
      if (data[item] !== null && typeof data[item] === 'object') {
        recurse(data[item]);
        return;
      }
    });
  }
  recurse(obj);
  return obj
}

module.export = setNestedObjectByRecurse;