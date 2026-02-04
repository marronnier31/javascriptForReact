//단락평가
let returnFalse = ()=> {
  console.log('false funtion');
  return false;
}
//단락평가
let returnTrue = ()=> {
  console.log('true funtion');
  return ture;
}
console.log(returnFalse() && returnTrue());
// 0, '', null, undefined, false, NaN는 다 false로 취급/ 객체,배열,함수타입은 모두 true
let test = NaN; //not a number
if(test) {
console.log(`${test} = true로 취급한다`)
} else {
  console.log(`${test} = false로 취급한다`)
}
//단락평가 테스팅
//함수선언문(호이스팅)
function printName(person) {
  const name = person && person.name;
  console.log(name || 'person 객체가 없음');
}

printName();//person이 undefined가 됨
printName({name:"홍길동"});