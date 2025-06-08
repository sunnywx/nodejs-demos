const {Readable}=require('stream')

function Feed(channel){
  const r=new Readable({
    objectMode: true
  })

  // const news=[
  //   'google news',
  //   'apple news',
  //   'top news'
  // ]

  const prices=[
    {price: 1},
    {price: 2}
  ]

  r._read=()=> {
    if(prices.length){
      return r.push(prices.shift())
    }

    r.push(null)
  }
  
  return r
}


const feed=new Feed()

// console.log('feed: ', feed)

feed.on('readable', ()=> {
  let data=feed.read()
  // data && process.stdout.write(data)
  data && console.log(data)
})

feed.on('end', ()=> {
  console.log('no more news')
})
