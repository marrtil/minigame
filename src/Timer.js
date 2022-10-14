import { useState } from "react";

function Timer(){
const [minute,setMin]=useState(30);

const time = ()=>{
    if(minute>0)
    {
      setMin(minute-1);
    }
  }
  const timer = ()=>{
    setTimeout(time,1000);
  }
  if(minute<30)
  {
    timer();
  }
  
  
  if(minute===0){
    alert('게임끝 실패하셨습니다.');
  }

return(
    <>
    <h1 id='timer'>{minute}</h1>
    </>
);
}

export default Timer;