import '../css/Sub.css'

export default function Sub(){
   const user = {name : 'jur', isLogin : true}

   if(user.isLogin !== true){
      return <><div className="logout">{user.name}님 로그아웃</div></>
   }else{
      return <><div id="login">{user.name}님 로그인</div></>
   }

   }
  
 