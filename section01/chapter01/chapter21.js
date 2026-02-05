//1. 일반 for문
const array = [1,2,3,4];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);  
}
console.log('*************************************');
//2. forEach
array.forEach(v=>console.log(v));
console.log('*************************************');
//3. for of문 === 향상된 for문
for (let data of array) {
  console.log(data);
}
//4. for in문 : index값을 가져온다.
for (let index in array) {
  console.log(`index = ${index} ${array[index]}`)  
}
// 1. 배열 순회 
let arr1 = [1, 2, 3]; 
 
for (let i = 0; i < arr1.length; i++) { 
  console.log(arr1[i]); 
} 
 
 
// 3.1 객체 순회, Object.keys 사용 
let person = { 
  name: "홍길동", 
  age: 27, 
  hobby: "테니스", 
}; 
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환 
let keys = Object.keys(person); 
 
for (let key of keys) { 
  const value = person[key]; 
  console.log(key, value); 
} 
 
// 3.2 Object.values 
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환 
let values = Object.values(person); 
 
for (let value of values) { 
  console.log(value); 
} 
 