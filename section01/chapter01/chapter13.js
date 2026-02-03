//콜백함수적용 함수선언, 함수표현, 화살표함수
//함수선언문
function repeat(count, callback) {
  for (let index = 0; index < count; index++) {
    //콜백함수를 진행한다.
    callback(index, index);
    callback(index);
  }
}
//람다식
let funcA = index => console.log(index);

let funcB = index => console.log(index*10);

let funcC = index =>console.log(index*10+5);

//let callback = funcA;
repeat(5,(index1,index2) => console.log(index1 + index2));
repeat(5,index => console.log(index*10));
repeat(5,index =>console.log(index*10+5));
//callback(10);