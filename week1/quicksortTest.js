const { run } = require('./quicksort')



if(run().every(function(elt, idx, arr) { 
  var prev = arr[idx - 1];
  return !idx || elt >= prev;
})) {
  console.log('Every element in order')
} else {
  console.log('oh no')
}
