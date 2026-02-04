// 구조분해할당 (배열, 분해, 변수할당)
let array = [1,2];
let one1 = array[0];
let two2 = array[1];
let three3 = array[2];

let [one, two, three = 10, four = 4 ] = array;
console.log(one);
console.log(two);
console.log(three);
console.log(four);

// 객체의 구조 분해 할당 
let person = { 
  name: "홍길동", 
  age: 27, 
  hobby: "테니스", 
};
let person3 = person;
console.log(person3 === person)
//다른 번지에 같은 객체를 복사하고 싶을 때
let person2 = {
  age : myAge,
  name,
  hobby,
  extra = 'hello' 
} = person;

let {
  age : myAge,
  name : myName, // let myName = person.name
  hobby : myHobby,
  extra = 'hello' 
} = person;

console.log(myAge === person3.age)
console.log(myAge,myName, myHobby, extra)