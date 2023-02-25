import "./App.css";
import { useState } from "react";
import Timer from "./Timer";
import Button from "./Button";
import CardSet from "./CardSet";
import back from "./assets/뒷면.png";

function App() {
  const [time, setTime] = useState(false);
  const [num, setNum] = useState([]);
  const [clearer, setClear] = useState(false);
  const [stop, setStop] = useState(false);

  const randStart = (e) => {
    if (stop || time) {
      alert("초기화 해주세요!");
      e.target.preventDefault();
    }
    setClear(false);
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

    var count = 0;
    const cards = document.querySelectorAll(".front");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.src = back;
        card.setAttribute("class", "back");
        count++;
      }, 2000 + 100 * index);
    }); //카드가 배치되고 일정시간이지나면 뒤집힌다
    setTimeout(() => {
      setTime(true);
    }, 3000);
  };

  const clear = () => {
    setTime(false);
    setNum([]);
    setClear(true);
    setStop(false);
    const back = document.querySelectorAll(".back");
    const complete = document.querySelectorAll(".complete");

    back.forEach((backs) => {
      backs.classList.remove("back");
      backs.classList.add("front");
    });
    complete.forEach((completes) => {
      completes.classList.remove("complete");
      completes.classList.add("front");
    }); //초기화를 위한 앞면인 카드들을 모두 뒷면으로
  };

  return (
    <>
      <Timer name={time} clearer={clearer} />
      <div id="content">
        <CardSet num={num} onTime={setTime} timer={time} stopper={setStop} />
        <div className="button">
          <Button onClick={randStart}>시작하기</Button>
          <Button onClick={clear}>초기화</Button>
        </div>
      </div>
    </>
  );
}

export default App;
