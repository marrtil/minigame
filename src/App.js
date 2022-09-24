import './App.css';
// import {useState} from 'react'
import Card from './Card';

function App() {
  var cardNum=16; //이건 나중에 따로 난이도 설정으로 갯수 바꿀수있게 해볼 예정
  let num=[];
  for(let i=0; i<cardNum; i++){
    var ran=Math.floor(Math.random()*cardNum+1);
    while(1){
    if(num.includes(ran))
    {ran=Math.floor(Math.random()*cardNum+1);}
    else {
      num[i]=ran;
      break;
    }
    }
  } //1~16까지의 수를 랜덤하게 배열에 넣는다
  
  var cardSet1=[];  //첫번째열을 위한 카드번호 배열
  var cardSet2=[];  //두번째열을 위한 카드번호 배열
  for(let i=0; i<num.length; i++)
  {
    if(i>=num.length){
      cardSet2.push(<Card value={num[i]} />); //num의 8~15번까지의 인덱스 값을 넣음
    }
    else {
      cardSet1.push(<Card value={num[i]} />); //num의 0~7번까지의 인덱스 값을 넣음
    }
  }
  
  return (
   <>
  <div>
    {cardSet1}
  </div>
  <div>
    {cardSet2}
  </div>
   </>
  );
}

export default App;
