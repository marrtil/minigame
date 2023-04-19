import "./App.css";
import { useState } from "react";
import Timer from "./Timer";
import Button from "./Button";
import CardSet from "./CardSet";

function App() {
  const [time, setTime] = useState(false); //시간을 흐르게 하기위한 state
  const [num, setNum] = useState([]); //카드 그림 번호를 위한 state
  const [clearer, setClear] = useState(true); //초기화를 위한 state
  const [block, setBlock] = useState(false); //카드를 보여주고 시간이 흐르기전까지 시작을 누르지못하게하기 위한 state

  const randStart = () => {
    if (time || !clearer) {
      //시간이 흘러가고 있고 초기화 한게 아니라면 시작을 누르지 못하게함
      alert("초기화 해주세요!");
      return;
    }
    setClear(false);
    setBlock(true); //시간이흘러가면서 시작하기 전까진 초기화 하지못하게
    var num1 = [];
    for (let i = 0; i < 16; i++) {
      var ran = Math.floor(Math.random() * 16 + 1);
      while (1) {
        if (num1.includes(ran)) {
          //중복 없이 랜덤한 인덱스에 1~16까지의 수 생성
          ran = Math.floor(Math.random() * 16 + 1);
        } else {
          num1[i] = ran;
          break;
        }
        setNum(num1);
      }
    } //랜덤숫자를 주어지는걸 버튼을 눌렀을때만 생성

    setTimeout(() => {
      setTime(true); //시간이 흘러가게 하기위해
      setBlock(false); //시작되면 초기화 할수있게함
    }, 3000); //카드 그림을 확인하기 위한 3초
  };

  const clear = () => {
    //초기화 함수
    if (block) return;
    setTime(false);
    setNum([]);
    setClear(true);
  };

  return (
    <>
      <Timer times={time} clearer={clearer} />
      <div id="content">
        <CardSet num={num} time={time} stopper={setTime} />
        <div className="button">
          <Button onClick={randStart}>시작하기</Button>
          <Button onClick={clear}>초기화</Button>
        </div>
      </div>
    </>
  );
}

export default App;
