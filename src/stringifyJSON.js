// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:



var stringifyJSON = function (obj) {
	// if (typeof obj == "function" || typeof obj == "undefined") {
	// 	// skip these somehow
	// }

	var resultStr = "";

	function addNext(obj) {
		if (obj instanceof Array) {
			if (obj.length === 0) {
				resultStr += "[]";
			}
			for (var i = 0; i < obj.length; i++) {
				if (i === 0) {
					resultStr += "[";
					addNext(obj[i]);
					resultStr += (obj.length === 1 ? "]" : "");
				} else if (i === obj.length - 1) {
					resultStr += ",";
					addNext(obj[i]);
					resultStr += "]";
				} else {
					resultStr += ",";
					addNext(obj[i]);
				}
			}
		} else if (typeof obj == "object") {
			var objLength = Object.keys(obj).length;
			if (objLength === 0) {
				resultStr += "{}";
			}
			var counter = 0;
			
			for (var item in obj) {
				if (counter === 0) {
					resultStr += '{"' + item + '":';
					addNext(obj[item]);
					resultStr += (objLength === 1 ? "}" : "");
					counter ++;
				} else if (counter === objLength - 1) {
					resultStr += ',"' + item + '":';
					addNext(obj[item]);
					resultStr += "}";
				} else {
					resultStr += ',"' + item + '":';
					addNext(obj[item]);
					counter ++;
				}
			}

		} else {		
			if (typeof obj == "string") {
				resultStr += '"' + obj + '"';
			} else if (obj === null) {
				resultStr += "null";
			} else {
				// number, boolean
				resultStr += obj;
			}
		}
	}
	addNext(obj);
	return resultStr;
};
