import './App.css';
import {useState} from 'react'
import Timer from './Timer';
import Button from './Button';
import CardSet from './CardSet';



function App() {
  
  
  const [starter,setSt]=useState(false);

  const start = () => {
    console.log(starter);
    setSt(true);
  }
  
  return (
   <>
    <Timer name={starter}/>
   <div id='content'>
    <CardSet name={starter}/>
  <div className='button'>
    <Button onClick={start}>시작하기</Button>
    </div>
  </div>
   </>
  );
}

export default App;
