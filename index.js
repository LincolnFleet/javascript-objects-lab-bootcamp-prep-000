var recipes = {}

//function updateObjectWithKeyAndValue(obj, key, val) {
  //obj[key] = val
  //return obj
//}

function updateObjectWithKeyAndValue(obj, key, val) {
  obj.assign({}, {key: val})
}
