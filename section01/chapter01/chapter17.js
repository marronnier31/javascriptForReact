//배열생성
let array =[];

let arrC = [ 
  1,  
  true, 
  "hello", 
  null, 
  undefined, 
  () => {}, 
  {}, 
  [10, true] 
]; 
//배열요소접근
console.log(`arrC[0]=${arrC[0]}`);
arrC[0] = 'hi';
console.log(`arrC[0]=${arrC[0]}`);
console.log(`arrC[1]=${arrC[1]}`);
console.log(`arrC[2]=${arrC[2]}`);
console.log(`arrC[3]=${arrC[3]}`);
console.log(`arrC[4]=${arrC[4]}`);
console.log(`arrC[5]=${arrC[5]}`);
console.log(`arrC[6]=${arrC[6]}`);
console.log(`arrC[7]=${arrC[7]}`);
console.log(arrC);