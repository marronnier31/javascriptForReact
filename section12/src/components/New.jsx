import { useParams } from "react-router-dom";
const New = () =>{
  const param = useParams();
  console.log(param);
 return <>
  <h1> New</h1>
 </> 
}

export default New;
;