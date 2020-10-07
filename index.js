const setNestedObjectByRescure = require('./helpers/setNestedObjectByRecurse');
const addParentField = require('./helpers/addParentField');
const people = require('./constants/people');

const express = require('express');
const app = express();

const PORT = 3000;

app.get('/nested', (req, res) => {
  const nestedObject = setNestedObjectByRecurse(people);
  res.send(JSON.stringify(nestedObject));
})

app.get('/parent', (req, res) => {
  const parentField = addParentField(people);
  res.send(JSON.stringify(parentField));
})

app.listen(PORT, () => {
  console.log(`Hello at http://localhost: ${PORT}`)
})