// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var result = []; //Need to revisit this, i think it needs to be an HTMLCollection
  function findNext(element) {
  	if (element.classList.contains(className)) {
  		result.push(element);
  	} else {
  		_.each(element.childNodes, function(childNode) {
  			if (childNode.nodeType == 1) {
  				findNext(childNode);
  			}
  		});
  	}
  }
  findNext(document.body);
  return result;
};