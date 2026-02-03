// 1. Number Type 
let num1 = 27.9; 
let num2 = 4.2; 
let num3 = -20;

console.log(num1 % num2);   
//나머지연산(모듈러 연산) 

let inf = Infinity;
let mInf = -Infinity;
let nan = NaN; //not a number
console.log(inf);
console.log(mInf);
console.log(NaN);
console.log(typeof inf);
console.log(typeof nan);

//2. 템플릿 리터럴
let name = '김동진';
let age = 30;
let introduceText = name + '님은 나이가 ' + age + ' 세 입니다';
let introduceText2 =`${name}님은 나이가 ${age} 세 입니다`;
console.log(introduceText);
console.log(introduceText2);

let b = null;
console.log(b);