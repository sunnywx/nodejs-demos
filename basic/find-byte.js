function find_byte(buff, b){
  for(let i=0; i<buff.length; i++){
    if(buff[i] == b){
      return i;
    }
  }
  return -1;
}

let buffer=Buffer.from('nodejs is an awesome runtime')

let r=find_byte(buffer, 65 + 32)  // find `a` char
console.log(r)