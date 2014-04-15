// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// TODO: hasClass method
var hasClass = function(node, className) {
  return node.className.split(" ").indexOf(className) !== -1;
}

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className, node) {
  // your code here
  // Create the storage
  var results = [];

  // Set the node
  node = node || document.body;

  // check if the node has class
  //  if it does, then add it to the storage
  if ( hasClass(node, className) ) {
    results.push(node);
  }

  // For all of the children
  //  run getElementsByClassName
  if ( node.children ) {
    for (var i = 0; i < node.children.length; i++) {
      results = results.concat(getElementsByClassName(className, node.children[i]));
    }
  }

  // return the results
  return results;
};
