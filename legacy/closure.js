function wrapElements(a){
  var result=[], i, n;
  for(i=0, n=a.length; i<n; i++){
    result[i]=function (){return a[i]}
  }
  return result;
}

var results=wrapElements([0,1,2,3])

console.log(results[0]())
