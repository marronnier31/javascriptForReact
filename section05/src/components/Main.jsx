 export default function Main(){
  let number = 9;
  const obj = {name:'jur',age:33 };
  const arr = [1,2,3,4];
  let test;


  return <>
  <main>
     <p>Main section</p>
     <p>number = {number % 2 === 0 ? '짝수':'홀수'}</p>
     <p>상수 = {10}</p>
     <p>number = {number}</p>
     <p>[1,2,3] = {[1,2,3]}</p>
     <p>arr = {arr}</p>
     <p>name = {obj.name}</p>
     <p>undefined = {undefined}</p>
     <p>null = {null}</p>
     <p>null 병합연산자 = {test ?? 10}</p>
     <p>true = {true}</p>
     <p>false = {false}</p>
  </main>
  </>
  }
  
 