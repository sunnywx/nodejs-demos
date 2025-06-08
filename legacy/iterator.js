function values(){
  var i=0, n=arguments.length, args=arguments;

  return {
    hasNext:function (){
      return i < n;
    },
    next: function (){
      if(i>n){
        throw new Error('out of boundary');
      }
      return args[i++]
    }
  }
}

const iter=values(1,2,3,5,7)

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
