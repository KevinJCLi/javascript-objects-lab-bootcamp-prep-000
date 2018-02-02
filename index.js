var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign ({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyandValue (object, key, value) {
  return object[key] = value;
}

function deleteFromObjectByKey (object, key) {
  var newObject = {object};
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey (object, key) {
  delete object[key];
  return object;
}

