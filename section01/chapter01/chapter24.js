// 1. 날짜를 생성하는 방법
let date1 = new Date();
console.log(date1.getTime());
console.log(date1);

// 2. 사용자가 날짜를 설정하는 방법
let date2 = new Date(1994,8-1,29,4,59,5);
console.log(date2.getTime());
console.log(date2);

// 3. 상대방에게 getTime()주게 되면, 날짜로 복구가능한가?
let date3 = new Date(date2.getTime());
console.log(`date3 = ${date3}`);

// 4. 날짜 : 추출(년도, 월, 일, 시간, 분, 초)
let date4 = new Date();
console.log(date4.getFullYear());
console.log(date4.getMonth()+1);
console.log(date4.getDate());
console.log(date4.getHours());
console.log(date4.getMinutes());
console.log(date4.getSeconds());
console.log(date4.getMilliseconds());

// 5. 날짜 : 수정(년도, 월, 일, 시간, 분, 초)
date4.setFullYear(2000)
date4.setMonth(2 - 1)
date4.setDate(4)
date4.setHours(17)
date4.setMinutes(25)
date4.setSeconds(25)
date4.setMilliseconds(112)

console.log(date4.getFullYear());
console.log(date4.getMonth()+1);
console.log(date4.getDate());
console.log(date4.getHours());
console.log(date4.getMinutes());
console.log(date4.getSeconds());
console.log(date4.getMilliseconds());

// 6. 시간은 제외하고 , 날짜만 출력하기
let date5 = new Date();
console.log(date5.toDateString());
// 7. 현지화에 맞춰서 날짜와 시간 출력하기.
console.log(date5.toLocaleString());