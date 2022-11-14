import "./App.css";
import { useState } from "react";
import Timer from "./Timer";
import Button from "./Button";
import CardSet from "./CardSet";

function App() {
  const [time, setTime] = useState(false);
  const [num, setNum] = useState([]);

  const randStart = (e) => {
    if (time) {
      e.target.preventDefault();
    }
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

    const cards = document.querySelectorAll(".front");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.setAttribute("alt", 0);
        card.setAttribute("class", "back");
      }, 2000 + 100 * index);
    }); //카드가 배치되고 일정시간이지나면 뒤집힌다
    setTimeout(() => {
      setTime(true);
    }, 3000);
  };

  const clear = () => {
    setTime(false);
    setNum([]);
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
      <Timer name={time} />
      <div id="content">
        <CardSet num={num} onTime={setTime} />
        <div className="button">
          <Button onClick={randStart}>시작하기</Button>
          <Button onClick={clear}>초기화</Button>
        </div>
      </div>
    </>
  );
}

export default App;
