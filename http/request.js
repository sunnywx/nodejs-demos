const http=require('http')

http.request({
  host: 'www.sunny-ai.com',
  // host: 'www.google.com',
  method: 'get',
  path: '/'
}, (res)=> {
  // console.log('res: ', res)
  res.setEncoding('utf-8')
  res.on('readable', ()=> console.log(res.read()))
}).end()
