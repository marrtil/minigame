import pizza from "./assets/피자.png";
import banana from "./assets/바나나.png";
import cookie from "./assets/쿠키.png";
import watermel from "./assets/수박.png";
import chicken from "./assets/치킨.png";
import cheeze from "./assets/치즈.png";
import choco from "./assets/초콜릿.png";
import shirimp from "./assets/새우.png";
import back from "./assets/뒷면.png";
import "./Card.css";
import { useEffect, useMemo, useState } from "react";

const cardImage = {
  0: back, //뒷면을 위한 0값
  1: pizza,
  2: banana,
  3: cookie,
  4: watermel,
  5: chicken,
  6: cheeze,
  7: choco,
  8: shirimp,
  9: pizza,
  10: banana,
  11: cookie,
  12: watermel,
  13: chicken,
  14: cheeze,
  15: choco,
  16: shirimp,
};

function Card({ alt = 0, select }) {
  //맨처음 카드들을 뒷면으로 배치하기위해 랜덤숫자가 들어오기전 초기값 0을 가지게함
  const nums = useMemo(() => alt, [alt]);
  const [num, setNum] = useState(alt);
  const [complete, setComple] = useState(false);

  useEffect(() => {
    setNum(alt);
  }, [alt]);

  useEffect(() => {
    if (!complete) setNum(0);
  }, [complete]);

  const flip = () => {
    if (complete) return;
    if (num) setNum(0);
    else {
      setNum(nums);
      setComple(select(nums));
    }
  };
  console.log(complete);

  return <img alt={alt} src={cardImage[num]} onClick={flip} />; //랜덤으로 부여받은 숫자에따라 이미지를 배정
}

export default Card;
