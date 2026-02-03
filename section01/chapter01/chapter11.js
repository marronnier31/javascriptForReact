//함수호이스팅(함수선언식 가능, 함수표현식 불가능, 화살표함수 불가능)
// 함수표현식이랑 람다식에 함수호이스팅을 사용하려고 하면 그 줄부터 아예 실행이 안 된다.
//함수선언식
getArea(10,20);

function getArea(width, height) {
  width = width ?? 10;
  width = 15;
  width = width ?? 10;
  height = height ?? 20;
  console.log(`나는 함수 선언식 ${width * height}`);
}

//함수 표현식
let getArea2;
console.log(getArea2);
getArea2 = function(width, height) {
  width = width ?? 10;
  height = height ?? 20;
  console.log(`나는 함수 선언식 ${width * height}`);
}
console.log(typeof getArea2);

getArea2(50,5);

//람다식
let getArea3;
getArea3 = (width,height)=>{
  width = width ?? 10;
  height = height ?? 20;
  console.log(`나는 함수 선언식 ${width * height}`);
}
console.log(typeof getArea3);

getArea3(50,5);

function getArea4(width, height) {
  let area = width * height;
  console.log(`width = ${width} height = ${height} area = ${area}`);
}
getArea4(10,30);

function getArea5(width, height) {
  let area = width * height;
  return area;
}
let a = getArea5(10,30);
let b = getArea5(12,15);
let ab = getArea5(a,b);
console.log(ab);

