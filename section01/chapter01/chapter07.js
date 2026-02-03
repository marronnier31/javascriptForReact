let a = 1;
let b = 2;
console.log(a/b);

//비교연산자 매우 중요!!!
let compA = 1 == "1"; // 같은 타입으로 바꿔서 비교
console.log(compA); // true
let compB = 1 === '1'; // 타입까지 비교
console.log(compB); // false

// 자바스크립트에서는 var, ==, !=를 쓰면 안된다.

let compC = 1 != '1';
console.log(compC);
let compD = 1 !== '1';
console.log(compD);

// ?? : null병합연산자
let aa; //undefined
console.log(typeof aa);
// 누군가가 값을 주었다. (어떤 값을 줄지 아무도 모른다.)
// 동적 타입이기 때문에 모든 타입을 다 받아버린다.
// 절대 받으면 안 되는 것이다. null undefined 문제가 생김. 
aa = aa ?? 10; //if문 대체
console.log(aa);
console.log(typeof aa);
aa = 20;
aa = aa ?? 10;
console.log(aa);
console.log(typeof aa);
