import './App.css';
import {useState} from 'react'
import Card from './Card';
import Button from './Button';
import back from './assets/뒷면.png';



function App() {
  var cardNum=16; //이건 나중에 따로 난이도 설정으로 갯수 바꿀수있게 해볼 예정
  const [num,setNum]=useState([]);

  var imageSave={

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
        imageSave[card.alt]=card.src;
        console.log(imageSave);
        card.src=back;
      },2000+100*index);
    }); //카드가 배치되고 일정시간이지나면 뒤집힌다
  }
  
  
  const flip = (e) => {
    console.log(imageSave);
    var taget=e.target
    e.target.classList.toggle('front'); //front Class를 토글
    if(taget.classList.contains('front'))
    {
      taget.src=imageSave[taget.alt]; //front Class가 토글되고 front Class가 있다면 뒷면이었다가 앞면이 된다
    }
    else {
      imageSave[taget.alt]=taget.src; //토글되고 front가 사라지면 앞면에서 뒷면이 되야하기때문에 객체에 해당이미지를 저장하고
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
