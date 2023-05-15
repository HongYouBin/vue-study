

// Default Paramteter

// ES6 이전

// ES6 이후

// default parameter는 함수에 전달된 파라미터가 undefined이거나 전달되지 않았을 경우, 설정한 값으로 초기화.
function getUserId(userId = "ssafy9") {
  return userId;
}

console.log(getUserId());
console.log(getUserId(undefined));
console.log(getUserId(null));
console.log(getUserId("troment"));

function appendArr(val, array = []) {
  array.push(val);
  return array;
}

// console.log(appendArr(10));
// console.log(appendArr(20));

// let m = {
//   name: "hello",
//   info() {
//     console.log(this.name);
//   },
// };

// m.info();

// let mem = {
//   name: "hi",
// };

// mem.info = m.info;
// mem.info();

// function aaa() {
//   console.log(this);
// }

// aaa();

function Fun1() {
  return 100;
}

let copy = new Fun1();
let a = Fun1();
console.log(a);
console.log(copy);

// }
// let result = fun1();
// console.log(result);

// const fun2 = () => 100;
// result = func2();
// console.log(result);