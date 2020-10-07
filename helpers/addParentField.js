const addParentField = obj => {
  const recurse = data => {
    if (data.children !== undefined) {
      for (key in data.children) {
        data.children[key].parent = data.name;
        recurse(data.children[key]);
      }
      return data;
    }
  }
  recurse(obj);
  return obj
}

module.export = addParentField;