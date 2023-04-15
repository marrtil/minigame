import { useState } from "react";

function Timer({ times, clearer }) {
  const [minute, setMin] = useState(60);

  const time = () => {
    if (minute > 0) {
      setMin(minute - 1);
    }
  };
  const timer = () => {
    setTimeout(time, 1000);
  };

  if (times) {
    timer();
  } else if (clearer && !times) {
    setTimeout(() => {
      setMin(60);
    }, 100);
  }

  if (minute === 0 && !clearer) {
    alert("게임끝 실패하셨습니다.");
  }

  return (
    <>
      <h1 id="timer">{minute}</h1>
    </>
  );
}

export default Timer;
