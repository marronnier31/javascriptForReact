let cat = {
  name : '나비',
  type : '고양이',
  color : '노란색',
  age : 3
}
// 1번 문제 : cat객체의 key값을  배열로 만들어서 출력하고, 그걸 활용해서 for문으로 key와 value값을 출력해라.
let catKeys = Object.keys(cat);
console.log(catKeys);
for (let i = 0; i < catKeys.length; i++) {
  let key = catKeys[i];
  console.log(`${key} = ${cat[key]}`);
}

// 2번 문제 : cat객체의 value값을 배열로 만들어서 출력하고, 그걸 활용해서 for문으로 출력해라.
let values = Object.values(cat);
console.log(values);
for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]}`);  
}

let arrOb = [ 
  {animal : 'cat', name : "나비"},
  {animal : 'dog', name : "초코"},
  {animal : 'cat', name : "냥이"},
  {animal : 'bird', name : "파랑이"},
];
let snack = ['빼빼로','홈런볼','새우깡','치토스'];
// 3번 문제 : forEach문으로 배열의 value, index, array를 모두  출력하라.
snack.forEach((v, i, a)=> console.log(`value = ${v}, index = ${i}, array = ${a}`));

// 4번 문제 : map을 이용해서 기존의 arr배열을 변형시켜라.
console.log(snack.map(v => '치즈맛'+v));

// 5번 문제 : filter를 이용해서 기존의 arrOb배열을 cat인 객체만 출력하여라.
console.log(arrOb.filter(v => v.animal === 'cat'));

// 6번 문제 : find를 이용해서 기존의 arrOb의 '초코'로 값을 찾아서  출력해라.
console.log(arrOb.find(v => v.name === '초코'))

// 7번 문제 : slice를 이용해서 snack에서 index가 1,2인 값을 출력해라.
console.log(snack.slice(1,3))

// 8번 문제 : concat을 이용해서 arrOb과 snack을 합쳐라.
console.log(arrOb.concat(snack))

// 9번 문제 : sort를 이용해서 snack을 오름차순으로 정렬해라.
console.log(snack.sort())
 
// 10번 문제 : join
let joined = snack.join("는 맛있어/")
console.log(joined)

// 11번 문제 : split
console.log(joined.split("는 맛있어/"))