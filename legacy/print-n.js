// O(n)

function printN(n){
  for(let i=0; i<n; i++){
    console.log(i)
  }
}

function printQua(n){
  for(let i=0; i<n; i++){
    console.log('i: ', i);
    for(let j=0; j<i; j++){
      console.log('\tj: ', j)
    }
  }
}

function printLog(n){
  for(let i=1; i<n; i=i*2){
    console.log('i: ', i)
  }
}

// printN(10)
// printQua(10)
printLog(10000000000)
