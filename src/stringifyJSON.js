// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

var isStringifiable = function (item) {
  return item !== undefined && typeof item !== 'function';
}

var stringifyJSON = function (obj) {
  var temp;

  if (isStringifiable(obj)) {
    if ( typeof obj === 'string' ) {
      return "\"" + obj + "\"";
    } else if ( Array.isArray(obj) ) {
      temp = [];
      for (var i = 0; i < obj.length; i++) {
        temp.push( stringifyJSON(obj[i]) );
      }
      return "[" + temp.join(",") + "]";
    } else if (obj && typeof obj === 'object') {
      temp = [];
      for ( var key in obj ) {
        if ( isStringifiable(obj[key]) ) {
          temp.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
        }
      }
      return "{" + temp.join(",") + "}";
    } else {
      return "" + obj;
    }

  }
};
