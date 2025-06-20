import repl from 'repl'

repl.start('> ').context.sayHello=function(){
  console.log('hello')
}