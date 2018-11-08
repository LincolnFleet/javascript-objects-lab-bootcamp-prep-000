var recipes = {}

//function updateObjectWithKeyAndValue(obj, key, val) {
  //obj[key] = val
  //return obj
//}

function updateObjectWithKeyAndValue(obj, key, val) {
  object.assign({}, obj, key: val)
}
