// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // Create initial string
  var result = "";

  // if its not a function or an undefined value
  if (obj !== undefined && typeof obj !== 'function') {
    if (typeof obj === 'number' ) {
      result += obj;
    } else if ( typeof obj === 'string' ) {
      result += "\"" + obj + "\"";
    } else if ( typeof obj === 'boolean') {
      result += obj ? "true" : "false";
    } else if ( obj === null) {
      result += "null";
    } else if ( Array.isArray(obj) ) {
      // var temp = [];
      // for ( var i = 0; i < obj.length; i++ ) {
      //   if (obj[i] !== undefined && typeof obj[i] !== 'function') {
      //     temp.push(obj[i]);
      //   }
      // }
      // obj = temp;
      result += "[";
      var counter = 0;
      for (var i = 1; i < obj.length; i++) {
        if ( obj[i] !== undefined && typeof obj[i] !== 'function' ) {
          result += stringifyJSON(obj[i]) + ",";
          counter++;
        }
      }
      if (counter > 0) {
        result = result.substr(0, result.length - 1);
      }
      // [9,] -> [[0-9],]
      //result = result.substr(0, result.length - 1);
      result += "]";
    } else if (typeof obj === 'object') {
      result += "{";
      var counter = 0;
      for ( var key in obj ) {
        if (obj[key] !== undefined && typeof obj[key] !== 'function') {
          result += "\"" + key + "\":";
          result += stringifyJSON(obj[key]) + ",";
          counter++;
        }
      }
      if (counter > 0) {
        result = result.substr(0, result.length - 1);
      }
      result += "}";
    }

  }

  return result;
};
