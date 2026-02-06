 export default function Sub2(){
   const user = {name : 'jur', isLogin : true}
   return<>
   {user.isLogin === true ? (<div>{user.name}님의 로그아웃</div>):(<div>{user.name}님의 로그인</div>)}
   </>
   

   }
  
 