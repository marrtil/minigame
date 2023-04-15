import { useEffect, useState } from "react";
import Card from "./Card";

function CardSet({ num, time }) {
  var cardSet1 = []; //첫번째열을 위한 카드번호 배열
  var cardSet2 = []; //두번째열을 위한 카드번호 배열
  const [select, setSelect] = useState([]);
  const [frontback, setFB] = useState(Array(16).fill(true));

  useEffect(() => {
    if (time) {
      setFB(Array(16).fill(false));
    } else {
      setFB(Array(16).fill(true));
    }
  }, [time]);

  console.log(select);
  console.log(frontback);

  const selecter = (num, index) => {
    if (!select) {
      setSelect([num, index]);
    } else {
      if (select === num) {
        setSelect([]);
      } else {
        setTimeout(() => {
          setFB((prev) => {
            prev[index] = false;
            prev[select[1]] = false;
          });
          setSelect([]);
        }, 1000);
      }
    }
  };

  for (let i = 0; i < 16; i++) {
    if (i >= 8) {
      cardSet2.push(
        <Card
          alt={num[i]}
          fb={frontback}
          fber={setFB}
          index={i}
          select={selecter}
        />
      ); //num의 8~15번까지의 인덱스 값을 넣음
    } else {
      cardSet1.push(
        <Card
          alt={num[i]}
          fb={frontback}
          fber={setFB}
          index={i}
          select={selecter}
        />
      ); //num의 0~7번까지의 인덱스 값을 넣음
    }
  }

  return (
    <>
      <div className="cardset">{cardSet1}</div>
      <div className="cardset">{cardSet2}</div>
    </>
  );
}

export default CardSet;
