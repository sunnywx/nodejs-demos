"use strict";

// test object.freeze
var obj={
  name: 'ss',
  propName: 'haha',
  get prop(){
    console.log('call prop method');
    return this.propName;
  },
  set prop(val){
    console.log('call setter')
    this.propName = val;
  }
}

Object.freeze(obj)

// console.log('orig obj: ', obj)
// obj.name = 'mutate obj'
// console.log('changed obj: ', obj)

// setter
// obj.prop = 'react'
// console.log(obj.prop)

// delete prop
// delete obj.propName

// set prototype
// Object.setPrototypeOf(obj, {x: 20})
// obj.__proto__ = {x: 20}

// define prop
Object.defineProperty(obj, 'comp', {value: 'awesome'})
