import "./App.css";
import { useState } from "react";
import Timer from "./Timer";
import Button from "./Button";
import CardSet from "./CardSet";

function App() {
  const [time, setTime] = useState(false);
  const [num, setNum] = useState([]);
  const [clearer, setClear] = useState(true);
  const [block, setBlock] = useState(false);

  const randStart = () => {
    if (time || !clearer) {
      alert("초기화 해주세요!");
      return;
    }
    setClear(false);
    setBlock(true);
    var num1 = [];
    for (let i = 0; i < 16; i++) {
      var ran = Math.floor(Math.random() * 16 + 1);
      while (1) {
        if (num1.includes(ran)) {
          ran = Math.floor(Math.random() * 16 + 1);
        } else {
          num1[i] = ran;
          break;
        }
        setNum(num1);
      }
    } //랜덤숫자를 주어지는걸 버튼을 눌렀을때만 생성

    setTimeout(() => {
      setTime(true);
      setBlock(false);
    }, 3000);
  };

  const clear = () => {
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
