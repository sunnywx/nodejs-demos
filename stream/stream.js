const fs=require('fs')

const w=fs.createWriteStream('./counter.txt', {flags: 'w', mode: 0o666})

