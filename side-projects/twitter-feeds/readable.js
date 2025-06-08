const {Readable}=require('stream')

function Feed(){
  // this.reader=new Readable()
  const r=new Readable()

  const news=[
    'google news',
    'apple news',
    'top news'
  ]

  r._read=()=> {
    if(news.length){
      return r.push(news.shift() + '\n')
    }

    r.push(null)
  }
  
  return r
}


const feed=new Feed()

// console.log('feed: ', feed)

feed.on('readable', ()=> {
  // let data=feed.read()
  // data && process.stdout.write(data)

  // read one byte once
  let char
  while (char = feed.read(1)) {
    console.log(char.toString())
  }

})

feed.on('end', ()=> {
  console.log('no more news')
})
