import './App.css';
import {useState} from 'react'
import Card from './Card';
import Button from './Button';
import pizza from './assets/피자.png';
import banana from './assets/바나나.png';
import cookie from './assets/쿠키.png';
import watermel from './assets/수박.png';
import chicken from './assets/치킨.png';
import cheeze from './assets/치즈.png';
import choco from './assets/초콜릿.png';
import shirimp from './assets/새우.png';
import back from './assets/뒷면.png';



function App() {
  var cardNum=16; //이건 나중에 따로 난이도 설정으로 갯수 바꿀수있게 해볼 예정
  const [num,setNum]=useState([]);

  var imageSave={
    0:back, //뒷면을 위한 0값
    1:pizza,
    2:banana,
    3:cookie,
    4:watermel,
    5:chicken,
    6:cheeze,
    7:choco,
    8:shirimp,
    9:pizza,
    10:banana,
    11:cookie,
    12:watermel,
    13:chicken,
    14:cheeze,
    15:choco,
    16:shirimp,
  };
  
  const randStart = () => {
    var num1=[];
    for(let i=0; i<cardNum; i++){
      var ran=Math.floor(Math.random()*cardNum+1);
      while(1){
      if(num1.includes(ran))
      {ran=Math.floor(Math.random()*cardNum+1);}
      else {
        num1[i]=ran;
        break;
      }
      setNum(num1);
      }
    } //랜덤숫자를 주어지는걸 버튼을 눌렀을때만 생성

    const cards=document.querySelectorAll('.front');
    cards.forEach((card,index) => {
      setTimeout(()=>{
        card.classList.toggle('front');
        card.src=back;
      },2000+100*index);
    }); //카드가 배치되고 일정시간이지나면 뒤집힌다
  }
  
  
  const flip = (e) => {
    var taget=e.target
    e.target.classList.toggle('front'); //front Class를 토글
    if(taget.classList.contains('front'))
    {
      taget.src=imageSave[taget.alt]; //front Class가 토글되고 front Class가 있다면 뒷면이었다가 앞면이 된다
    }
    else {
      taget.src=back; // 해당이미지를 뒷면으로 만든다
    }
  } 

  var cardSet1=[];  //첫번째열을 위한 카드번호 배열
  var cardSet2=[];  //두번째열을 위한 카드번호 배열
  for(let i=0; i<cardNum; i++)
  {
    if(i>=cardNum/2){
      cardSet2.push(<Card alt={num[i]} className='front' onClick={flip}/>); //num의 8~15번까지의 인덱스 값을 넣음
    }
    else {
      cardSet1.push(<Card alt={num[i]} className='front' onClick={flip}/>); //num의 0~7번까지의 인덱스 값을 넣음
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
   <div>
  <Button onClick={randStart}>시작하기</Button>
  </div> 
   </>
  );
}

export default App;
