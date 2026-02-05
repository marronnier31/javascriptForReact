let task = function() {
  setTimeout(()=>{
    console.log("안녕");
    if(true){
      //resolved상태
    }else{
      //reject상태
    }
  }, 1000);
}
//task();
// pending상태
/*
let promise = new Promise(()=>{
  setTimeout(()=>{
    console.log("안녕");
    if(true){
      //resolved상태
    }else{
      //reject상태
    }
  }, 1000);
});
*/
//console.log(promise)

// resolved상태
/*
let promise2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log("안녕2");
    if(true){
      resolve('promise 안녕')
    }else{
      reject()
    }
  }, 2000);
});
setTimeout(() => {
  console.log(promise2);
}, 3000);
*/
// reject상태
/*
let promise3 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log("안녕3");
    if(false){
      resolve('promise 안녕')
    }else{
      reject('promise 실패')
    }
  }, 2000);
});
setTimeout(() => {
  console.log(promise3);
}, 3000);
*/
/*
//4. Promise 를 실제로 활용해보자. 
const promise4 = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => { 
    const num = '10'; 
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 
 
setTimeout(() => { 
      console.log(promise4); 
}, 3000);
*/
/*
//promise성공한 후 그 결과값 출력
const promise5 = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => { 
    const num = '10'; 
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 
//promise가 성공하면 결과값실행
promise5.then(v=>console.log(`성공한 결과값 = ${v}`))
setTimeout(() => {
  console.log(promise5); 
}, 3000);

promise5.catch(v=>console.log(`실패한 결과값 = ${v}`))
*/
//********************************* 
//promise chain방식으로 표현
/*
const promise6 = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => { 
    const num = 10; 
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 
//promise chain방식으로 표현
promise6
  .then(v=>console.log(`성공한 결과값 = ${v}`))
  .catch(v=>console.log(`실패한 결과값 = ${v}`));

setTimeout(() => {
  console.log(promise6); 
}, 3000);
*/
//promise를 함수를 통해서 실행해보자.
function add10(num) {
const promise = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => {
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 
return promise
}
//1단계
/*
add10('10')
  .then(v=>console.log(`성공한 결과값 = ${v}`))
  .catch(v=>console.log(`실패한 결과값 = ${v}`));
*/
//2단계
/*
add10(100)
  .then(v=>{
    console.log(`성공한 결과값 = ${v}`)
    add10(v)
      .then(value=>console.log(`성공한 결과값 = ${value}`));
  })
  .catch(v=>console.log(`실패한 결과값 = ${v}`));
  */
//2단계 수정
/*
add10(100)
  .then(v=>{
    console.log(`성공한 결과값 = ${v}`)
    //promise를 return
    return add10(v);
  })
  .then(v=>console.log(`성공한 결과값 = ${v}`))
  .catch(v=>console.log(`실패한 결과값 = ${v}`));
  */
//3단계 
/*
add10(100)
  .then(v=>{
    console.log(`성공한 결과값 = ${v}`)
    //promise를 return
    return add10(undefined);
  })
  .then(v=>{
    console.log(`성공한 결과값 = ${v}`)
    return add10(v)
  })
  .then(v=>console.log(`성공한 결과값 = ${v}`))
  .catch(v=>console.log(`실패한 결과값 = ${v}`));
*/
//음식 주문사항을 1단계, 2단계, 3단계로 해결하시오.
function orderFood(food, callback){
  console.log(`${food}의 주문이 들어왔습니다.`)
  setTimeout(() => {
    callback(food);
  }, 1000);
} 

function orderFood2(food){
  const promise = new Promise((resolve,reject)=>{
    console.log(`${food}의 주문이 들어왔습니다.`);
    setTimeout(() => {
      let flag = true;
      if(flag) {
        resolve(food + '완료')
      }else{
        reject(food + '실패')
      }
    }, 2000);
  });
  return promise;
}
/*
orderFood2('찹쌀탕수육')
  .then(v=>console.log(v))
  .catch(error=>console.log(error));
*/

function coolFood2(food){
  const promise = new Promise((resolve,reject)=>{
    console.log(`${food}을 식혀달라는 요청이 들어왔습니다.`);
    setTimeout(() => {
      let flag = true;
      if(flag) {
        resolve(food + '식힘 완료')
      }else{
        reject(food + '식힘 실패')
      }
    }, 2000);
  });
  return promise;
}
/*
coolFood2('찹쌀탕수육')
  .then(v=>console.log(v))
  .catch(error=>console.log(error));
*/

function freezeFood2(food){
  const promise = new Promise((resolve,reject)=>{
    console.log(`${food}을 얼려달라는 요청이 들어왔습니다.`);
    setTimeout(() => {
      let flag = true;
      if(flag) {
        resolve(food + ' 냉동 완료')
      }else{
        reject(food + ' 냉동 실패')
      }
    }, 2000);
  });
  return promise;
}
/*
freezeFood2('찹쌀탕수육')
  .then(v=>console.log(v))
  .catch(error=>console.log(error));
*/
//2단계처리방식
/*
orderFood2('찹쌀탕수육')
  .then(v=>{
    console.log(v)
    return coolFood2(v)
  })
  .then(v=>console.log(v))
  .catch(error=>console.log(error));
*/
//3단계처리방식
orderFood2('찹쌀탕수육')
  .then(v=>{
    console.log(v)
    return coolFood2('찹쌀탕수육')
  })
  .then(v=>{
    console.log(v)
    return freezeFood2('찹쌀탕수육')
  })
  .then(v=>console.log(v))
  .catch(error=>console.log(error));












