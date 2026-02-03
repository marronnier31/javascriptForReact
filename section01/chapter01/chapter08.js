// 1. 묵시적 형변환
let num = 10; 
let str = "20"; 
 
const result = num + str; 
console.log(result); 

// 2. 명시적 형변환 
//프로그래머가 내장함수 등을 이용해서 직접 형 변환을 명시 
//문자열 -> 숫자 
let str1 = "10"; 
let strToNum1 = Number(str1); 
console.log(10 + strToNum1);  //20 출력

let str2 = '10개';
let numStr = Number(str2);
console.log(str2);
console.log(numStr);
console.log(numStr + '10');

let num2 = 20;
let numStr2 = String(num2);
console.log(num2);
console.log(typeof num2);
console.log(numStr2);
console.log(typeof numStr2);