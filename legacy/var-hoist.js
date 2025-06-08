// in es5, only exception catch use block scope
function test(){
  var x = 'var', result=[]
  result.push(x);

  try {
    throw new Error('..')
  } catch (x){
    // use block scope
    x='catch'
  }

  result.push(x)

  console.log(result)
}

test()
