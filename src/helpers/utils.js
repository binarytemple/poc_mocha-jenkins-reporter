function isNumber(val){
  return !isNaN(val)
}

function isString(val){
    return typeof val === 'string'
}

module.exports = [isNumber,isString]
