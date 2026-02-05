// 1.사용자 정의 객체
let object1 = {name : '홍길동', age : 30}
let object2 = {...object1}
object2.hobby = 'tennis';
object2['age'] = 10;
console.log(object2)
console.log(JSON.stringify(object1)+10) //객체를 문자열로 바꿔준다
console.log(JSON.stringify(object1) === JSON.stringify(object2)) 
