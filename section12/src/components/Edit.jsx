import { useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import Button from "./Button";
import Header from "./Header";

const Edit = () =>{
  const param = useParams();
 return <>
  <h2>{param.id}번의 Edit</h2>
 </> 
}

export default Edit;
