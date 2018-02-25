

const oldSetTimeout = setTimeout;
setTimeout = function(callback, time) {
  console.log('START');
  oldSetTimeout(() => {
    callback();
    console.log('FINISH'); 
  }, time);
}


//------------------------


// setTimeout(() => {
//    console.log('dosomething');
// }, 3000);

let str = '123';
str.slice(2);
console.log(str.slice(2));
console.log(str);

let arr = [12,3, 5];
let arr2 = [...arr];
arr2.push(5);
console.log(arr);

let user = { name : 'John' };
//let user2 = Object.assign({}, user);
let user2 = { ...user };
user2.name = 'Bob';
console.log(user);


// function sum(a, b) {
//   return a + b; 
// }