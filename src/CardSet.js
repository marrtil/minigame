import { useState } from "react";
import Card from "./Card";

function CardSet({ num, onTime, stopper }) {
  var cardSet1 = []; //첫번째열을 위한 카드번호 배열
  var cardSet2 = []; //두번째열을 위한 카드번호 배열
  const [select, setSelect] = useState(0);

  const selecter = (num) => {
    if (!select) {
      setSelect(num);
      return true;
    } else {
      if (select === num) {
        setSelect(0);
        return true;
      } else {
        setSelect(0);
        return false;
      }
    }
  };
  console.log(select);

  for (let i = 0; i < 16; i++) {
    if (i >= 8) {
      cardSet2.push(<Card alt={num[i]} className="front" select={selecter} />); //num의 8~15번까지의 인덱스 값을 넣음
    } else {
      cardSet1.push(<Card alt={num[i]} className="front" select={selecter} />); //num의 0~7번까지의 인덱스 값을 넣음
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
