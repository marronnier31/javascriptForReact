//async, await 방식 => promise 이다.
async function getData(){
  return {name:'kdj', age:30}
}
function getData2() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      let flag = true;
      if (flag) {
        resolve({name:'kdj', age:30})
      } else {
        reject('비동기처리요청 실패')
      }      
    }, 1000);
  })
}

//console.log(getData2())

async function printData() {
  getData2()
    .then(v=>console.log(v))
    .catch(error=>console.log(error))
}
async function printData2() {
  console.log(await getData2());
}
printData2();