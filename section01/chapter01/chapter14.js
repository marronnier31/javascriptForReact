//1.객체생성
let object1 = new Object();
console.log(object1);

let array1 = new Array();
console.log(array1);

let obj = {};
let obj2 = new Object();
console.log(obj);
console.log(obj2);

let arr = [];
let arr2 = new Array();
console.log(arr);
console.log(arr2);

let person = { 
  name: "홍길동", 
  age: 30, 
  hobby: "축구", 
  job: "Developer", 
  extra: {},   //객체도 들어올수 있음 
  extra2: function () {},  //함수도 들어올수 있음 
  "like cat": true,  //한칸띄는 변수가 있으면 “”
};

console.log(person);
console.log(person["name"]);
person.extra2 = index => console.log(index);
console.log(person.extra2('화살표함수'));
person.extra = {
  width : 10,
  height : 20
}
console.log(person.extra);

delete person.job;

let result1 = "name" in person;
console.log(result1);
console.log(person.job in person);

person.nation = "한국";