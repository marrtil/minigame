import { useState } from "react";

function Timer({name}){
const [minute,setMin]=useState(30);

const check=()=>{
console.log(name);
}
check();

const time = ()=>{
    if(minute>0)
    {
      setMin(minute-1);
    }
  }
  const timer = ()=>{
    setTimeout(time,1000);
  }
  if(name)
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