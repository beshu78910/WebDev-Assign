// import { strToObj, objToStr, diff } from './util.js';
const util = require('./util');
let test = '{ "hello":"world" }';
var obj = {
    name: 'myObj'
};
console.log(util.strToObj(test));
console.log(util.objToStr(obj));
console.log(util.diff('Mar 30,2022'));