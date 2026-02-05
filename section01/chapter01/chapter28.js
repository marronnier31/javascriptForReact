/*
console.log(1)

setTimeout(() => {
  console.log(2)
  }, 3000);

 /*
 setInterval(() => {
  console.log(2)
  
}, 1000);
console.log(3)
*/

/*
//함수 선언식
// 1번방식 : 1초 후에 이벤트 처리를 정의한 것이다.
// 이벤트 : 시간이 1초 지나면setTimeout(핸들러일, 시간이벤트)
// 이벤트처리일(함수로 만든 것: 핸들러함수)
function task(a,b) {
  setTimeout(()=>{
    let sum = a+ b;
    console.log(`a + b = ${sum}`);
  }, 1000);
}
task(10,20);

// 2번방식
// 이벤트 : 시간이 1초 지나면setTimeout(핸들러일, 시간이벤트)
// 이벤트처리일(핸들러함수 : 람다식)
let callbackA = (sum)=>{
  console.log(`a + b = ${sum}`)
};
function task(a,b,callbackA) {
  setTimeout(()=>{
    let sum = a+ b;
  callbackA(sum);}, 1000);
}
task(10,20, callbackA);
*/

function task(a,b,callbackA) {
  setTimeout(()=>{
  callbackA(a,b);}, 1000);
}
task(10,20, (a,b)=>console.log(`a + b = ${a +b}`));

// 1단계 음식을 주문하는 사람
// 이벤트 : 음식을 주문하면 3초 후에
// 핸들러 : 음식이 완성이 돼서 나오는 것.
function orderFood(food, callback){
  console.log(`${food}의 주문이 들어왔습니다.`)
  setTimeout(() => {
    callback(food);
  }, 1000);
} 

//orderFood('떡볶이',(food)=>console.log(`소영이가 좋아하는 ${food}의 주문이 완료되었습니다.`));

// 1단계 음식을 식혀달라고 요청하는 사람
function  coolFood(food, callback){
  console.log(`${food}에 대한 요청이 들어왔습니다.`)
  setTimeout(() => {
    callback(food);
  }, 1000);
} 
  /*
setTimeout(() => {
  coolFood('떡볶이',(food)=>{
    console.log(`${food}를 식혀달라는 요청이 완료되었습니다.`)});
}, 2000);
// 1단계 음식을 냉동해달라고 요청하는 사람

setTimeout(() => {
  coolFood('떡볶이',(food)=>console.log(`${food}의 냉동요청이 완료되었습니다.`));
}, 4000);
*/
/*
// 2단계 떡볶이 요청하고 떡볶이 를 차게 요청
orderFood('떡볶이',food => {
  console.log(`${food}가 완성`)
  coolFood(food, food=>console.log(`${food}가 차갑게 완성`))
})
  */
// 3단계 떡볶이 요청하고 떡볶이 를 차게 요청 => 냉동요청
orderFood('떡볶이',food => {
  console.log(`${food}가 완성`)
  coolFood(food, food=>{console.log(`${food}가 차갑게 완성`)
  coolFood(food, food => console.log(`${food}가 냉동 완성`))
})
})
