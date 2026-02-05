// 1.spread연산자
let array1=[1,2,3,4,5];
let arr2 = [10, ...array1, 20,30];
let arr3 = array1; //얕은 복사(같은 객체의 주소를 두개의 객체참조변수가 저장)
// 깊은 복사 만들기
let arr4 =[...array1];
let arr5 = [];
array1.forEach(value=>arr5.push(value));
let arr6 = array1.map(value=>value)
let arr7 = array1.filter(value=>value<Infinity)

console.log(arr4 === array1);
console.log(arr5);

// 2.객체생성 (spread 연산자활용) 
let obj1 = { 
  a: 1, 
  b: 2, 
}; 
let obj2 = obj1;
console.log(obj1 === obj2);
let obj3 ={
  k:10,
  ...obj2,
  c:4,
  d:5
};
console.log(obj3);

// 3. 구조분해할당, 스프레드 연산자
function funcA([p1,p2,p3]){
  console.log(p1+10,p2*10,p3/10);
}

const array8 =[1,2,3];
funcA(array8)

function funcB(p1,p2,p3){
  console.log(p1+10,p2*10,p3/10);
}

const array9 =[1,2,3];
funcB(array9)
funcB(...array9)

// rest매개변수
const arr8 =[11,12,13]
function funcC(p1,p2,...rest){
  console.log(p1)
  console.log(...rest)
}
funcC(...arr8)