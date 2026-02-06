import { useState } from "react";

const Bulb = ()=>{
  const [light, setLight] = useState('ON');
  const onLightClick = e => setLight(light === 'ON' ? 'OFF':'ON')
  console.log(light)
return <>
<div>
  {light === 'ON'?(
     <h1 style={{backgroundColor:'orange'}}>Bulb ON</h1>
  ):(
  <h1 style={{backgroundColor:'gray'}}>Bulb OFF</h1>
  )}
  <p>rander{console.log(`randering`)}</p>
   <button type="button" onClick={onLightClick}> {light === 'ON' ? '끄기':'켜기'} </button>
</div>
</>
}

export default Bulb;