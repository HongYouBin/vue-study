// DestructuringAssignment (구조 분해 할당)
// 배열이나 객체에 입력된 값을 개별적인 변수에 할당하는 간편한 방식 제공.

// 배열

// ES6 이전
{
}

// ES6 이후
{
}

// 객체

// ES6 이전

// ES6 이후
// 객체의 property와 변수명이 같을 경우.

// 변수명을 객체의 property명과 다르게 만들 경우.

// 객체를 return 하는 함수.

// ES6 이전

// ES6 이후

const user1 = { id: "s1" };
const user2 = { id: "s2" };

const arr = [user1, user2]

const copyArr = [...arr]


user1.id = "s8";
// console.log(arr, copyArr);

// const copyUser = { ...user1 };
// console.log(copyUser);
// copyUser.id = "ssa100";
// console.log(user1, copyUser);
// console.log(user1 === copyUser);
// const copyUser2 = {
//     ...user1, name: "hi"
// }
// console.log(copyUser2)
 
// const num = [1, 3, 5, 7];
// function plus(x, y, z) {
//     return x + y + z;
// }
// const result = plus(...num);
// console.log(result)


function F() {
    console.log(this);
    this.getThis = function(){
        console.log(this);
    }
}

let tt = new F();
console.log(tt.getThis)