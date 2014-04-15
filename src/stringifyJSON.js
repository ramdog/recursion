// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

var isStringifiable = function (item) {
  return item !== undefined && typeof item !== 'function';
}

var stringifyJSON = function (obj) {
  // Create initial string
  var result = "";

  // if its not a function or an undefined value
  if (isStringifiable(obj)) {
    if (typeof obj === 'number' ) {
      result += obj;
    } else if ( typeof obj === 'string' ) {
      result += "\"" + obj + "\"";
    } else if ( typeof obj === 'boolean') {
      result += obj ? "true" : "false";
    } else if ( obj === null) {
      result += "null";
    } else if ( Array.isArray(obj) ) {
      var temp = [];
      for (var i = 0; i < obj.length; i++) {
        if ( isStringifiable(obj[i]) ) {
          temp.push( stringifyJSON(obj[i]) );
        }
      }
      result += "[" + temp.join(",") + "]";
    } else if (typeof obj === 'object') {
      var temp = [];
      for ( var key in obj ) {
        if ( isStringifiable(obj[key]) ) {
          temp.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
        }
      }
      result += "{" + temp.join(",") + "}";
    }

  }

  return result;
};
