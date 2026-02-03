//함수선언식
function namefnc(name) {
  console.log(name);
}
namefnc('병합null');
let namefnc2 = namefnc;
namefnc2('삼항연산자');
console.log(typeof namefnc2);


//함수표현식
let namefnc3 = function(name) {
  console.log(name);
}
namefnc3('함수표현식');

let namefnc4 = name => console.log(name);
let namefnc5 = (width, height) => {
  console.log(`${width}, ${height}`);
  console.log(`${width * height}`);
}
namefnc4('람다식');
namefnc5(5,6);

let namefnc6 = name => name + '님 반갑습니다.'; //리턴도 생략이 가능하다. 오히려 쓰면 에러가 나온다.
let a = namefnc6('전우림');
console.log(a);