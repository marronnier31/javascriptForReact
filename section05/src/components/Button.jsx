import '../css/Sub.css'

export default function Button({text, color = 'black',children}){
   //이벤트처리기능 핸들러함수(3가지: 함수선언, 함수표현, 화살표함수)
   const onClickButton = (e)=>{
      alert(`${text} 랑 ${color}`)
      // 매우 중요
      console.log(e);
   };
   return <>
   <button onClick={onClickButton} style={{color:color}} type="button">{text}-{color.toUpperCase()}{children}</button>
   </>

   }
  
