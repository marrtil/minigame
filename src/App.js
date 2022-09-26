import './App.css';
import {useState} from 'react'
import Card from './Card';
import Button from './Button';



function App() {
  var cardNum=16; //이건 나중에 따로 난이도 설정으로 갯수 바꿀수있게 해볼 예정
  const [num,setNum]=useState([]);
  
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
    } //랜덤숫자를 주어지는걸 버튼을 눌렀을때만 되게 하기위해 버튼에 넣을 이벤트 핸들러로 만들었다
  }
  
  
  const flip = (e) => {
    e.target.classList.toggle('front');
    e.target.ClassList.toggle('back');
  } // e.target에따라 front와 back Class를 토글 시키고싶었는데 클릭시에 front만 사라졌다 생긴다..

  var cardSet1=[];  //첫번째열을 위한 카드번호 배열
  var cardSet2=[];  //두번째열을 위한 카드번호 배열
  for(let i=0; i<cardNum.length; i++)
  {
    if(i>=num.length){
      cardSet2.push(<Card value={num[i]} className='front' onClick={flip}/>); //num의 8~15번까지의 인덱스 값을 넣음
    }
    else {
      cardSet1.push(<Card value={num[i]} className='front' onClick={flip}/>); //num의 0~7번까지의 인덱스 값을 넣음
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
