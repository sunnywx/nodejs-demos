const urls=['a', 'b', 'c'];

function downloadUrlSync(urls){
  for (let i=0, n=urls.length; i< n; i++){
    try{
      return dl(urls[i])
      // return console.log('download: ', urls[i])
    } catch (e){}
  }
  throw Error('all dl failed')
}

function dl(i){
  console.log('download: ', i)
}

downloadUrlSync(urls)
