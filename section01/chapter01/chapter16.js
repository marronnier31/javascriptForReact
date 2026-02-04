// 상수객체
const animal = {
  //멤버변수
  type : '고양이',
  age : 2
}
animal['age'] = 10;
animal.color = '노란색';
delete animal.age;
animal.type = index => index*10;
animal.type(10);
console.log(animal.type(10));
console.log(`VALUE = ${animal.type(10)}`);

console.log(animal);
const animal2 = {
  name :'호랑이',
  age : 10,
  sayhi : index => console.log(index + 'sayhi'),
  sayhi2(){
    console.log('안녕')
  },
  sayhi3 : () => console.log('hihi')
}
animal2.sayhi3();
animal2.sayhi(5);
console.log(animal2);
