function print(n){
  var count=0;

  for(let i=0; i<n; i++){
    count+=1;

    for(let i=0; i<5*n; i++){
      count+=1;
    }
  }

  console.log('final count: ', count)
  return count
}

print(10)
