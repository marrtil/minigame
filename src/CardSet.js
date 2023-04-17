import { useEffect, useState } from "react";
import Card from "./Card";

function CardSet({ num, time, stopper }) {
  var cardSet1 = []; //첫번째열을 위한 카드번호 배열
  var cardSet2 = []; //두번째열을 위한 카드번호 배열
  const [select, setSelect] = useState([]);
  const [frontback, setFB] = useState(Array(16).fill(true));
  const [block, setBlock] = useState(false);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (check) {
      var a = new Set(frontback);
      a = [...a];
      console.log(a);
      if (a.length === 1 && a[0]) {
        setTimeout(() => {
          stopper(false);
          setCheck(false);
          alert("게임끝!");
        }, 500);
      }
    }
  }, [frontback, check, select]);

  useEffect(() => {
    if (time) {
      setFB(Array(16).fill(false));
    } else {
      setFB(Array(16).fill(true));
    }
  }, [time]);

  const selecter = (num, index) => {
    if (!select.length) {
      setSelect([num, index]);
    } else {
      if (select[0] % 8 === num % 8) {
        setSelect([]);
        setCheck(true);
      } else {
        setBlock(true);
        setTimeout(() => {
          setFB((prev) => {
            var a = [...prev];
            a[index] = false;
            a[select[1]] = false;
            return a; //card에서 fb에 반응하는 useEffect가 이런식으로 새주소를 주지않으면 반응하지않음
          });
          setSelect([]);
          setBlock(false);
        }, 1000);
      }
    }
  };

  for (let i = 0; i < 16; i++) {
    if (i >= 8) {
      cardSet2.push(
        <Card
          key={i}
          alt={num[i]}
          fb={frontback}
          fber={setFB}
          index={i}
          select={selecter}
          block={block}
        />
      ); //num의 8~15번까지의 인덱스 값을 넣음
    } else {
      cardSet1.push(
        <Card
          key={i}
          alt={num[i]}
          fb={frontback}
          fber={setFB}
          index={i}
          select={selecter}
          block={block}
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
