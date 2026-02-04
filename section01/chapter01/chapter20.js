//내장함수(라이브러리)(전부 화살표함수)(반복문 => 자기스타일로 변경 반복문)
//forEach 내장함수
const array = [1,2,3,4];
/******************* forEach *******************
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);  
}
array.forEach((value, index, array) => {
 console.log(`value = ${value}`);
 console.log(`index = ${index}`);
 console.log(`array = ${array}`);
 console.log(`*********************************************************`);
});
array.forEach(value => console.log(`${value}`));

/******************* map ************************
const newArray =[];
for (let i = 0; i < array.length; i++) {
  newArray.push(array[i]*10);
}
console.log(array);
console.log(newArray);
let newArr = array.map(value => value*10);
console.log(newArr);

/******************* filter ************************
// filter 
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환 
let arr1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
]; 
let newArr1 = [];
for (let i = 0; i < arr1.length; i++) {
  let item = arr1[i];
  if (item.hobby === '테니스') {
    newArr1.push(item);
  }
}
console.log(arr1);
console.log(newArr1);

let array2 = [1,2,3,4,5,3,2,2,4,5,7,6,8,9,2];
console.log(array2.filter(v => v===2));
console.log(arr1.filter(item => item.hobby==='테니스'));


const tennisPeople = arr1.filter(item => item.hobby === "테니스"); 
console.log(tennisPeople);    
// [{ name: "구길동", hobby: "테니스" }, { name: "저길동", hobby: "테니스" }] 배열이 출력됨.

/******************* find, findIndex ************************
let arr1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
]; 
for (let i = 0; i < arr1.length; i++) {
  let item = arr1[i];
  if (item.hobby === '독서') {
    findItem = item;
    break;
  }
}
console.log(findItem);
console.log(arr1.find(item => item.hobby ==='독서'));
console.log(arr1.findIndex(item => item.hobby ==='독서'));
console.log(arr1.indexOf({ name: "저길동", hobby: "테니스" }));//객체는 아무리 내용을 같게 적었어도 주소가 달라서 값을 같다고 인식하지 않음. 
let array2 = [1,2,3,4,5,3,2,2,4,5,7,6,8,9,2];
console.log(array2.indexOf(3));
console.log(arr1[arr1.findIndex(item => item.hobby ==='독서')]);

/******************* slice(start, end) ************************
let arr1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동1", hobby: "독서1" }, 
{ name: "홍길동2", hobby: "독서2" }, 
{ name: "홍길동3", hobby: "독서3" }, 
{ name: "홍길동4", hobby: "독서4" }, 
]; 
console.log(arr1.slice(0,3));
console.log(arr1.slice(3));

/******************* concat ************************
let arr1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" },
]; 
let arr2 = [
{ name: "홍길동2", hobby: "독서2" }, 
{ name: "홍길동3", hobby: "독서3" }, 
{ name: "홍길동4", hobby: "독서4" }, 
]; 
console.log(arr1.concat(arr2));

/******************* sort ************************
// 배열을 사전순으로 내림차순 정렬하는 메서드 
let arr3 = [0,1,3,2,10,30,20]; 
//숫자를 정렬 
arr3.sort() // 자바스크립트는 숫자를 주더라도 문자단위로 정렬
console.log(arr3) 
arr3.sort((a,b)=>a-b) // 자바스크립트는 숫자를 주더라도 문자단위로 정렬
console.log(arr3) 
arr3.sort((a,b)=>b-a) // 자바스크립트는 숫자를 주더라도 문자단위로 정렬
console.log(arr3) 

let arr4 = ['ab', 'kf', 'addEventListener', 'f','FileSystemDirectoryEntry','getComputedStyle','g']; 
arr4.sort().reverse() // 자바스크립트는 숫자를 주더라도 문자단위로 정렬
console.log(arr4) 
 
arr4.sort() // 자바스크립트는 숫자를 주더라도 문자단위로 정렬
console.log(arr4)

*********************** join, split *************************/
const arr6 = ["김동진","님","안녕하세요","반가워요"]; 
const joined = arr6.join("=="); 
console.log(joined);

const array7 = joined.split('==');
console.log(array7);