import { useEffect, useState } from "react";
import Card from "./Card";

function CardSet({ num, time, stopper }) {
  //각각 그림을위한 숫자배열 , 시간을 흘러가게 하기위한 boolean과 그 set함수
  var cardSet1 = []; //첫번째열을 위한 카드번호 배열
  var cardSet2 = []; //두번째열을 위한 카드번호 배열
  const [select, setSelect] = useState([]); //처음 고른 카드의 번호와 위치를 저장하기 위한 state
  const [frontback, setFB] = useState(Array(16).fill(true)); //앞면 뒷면을 관리하기위한 state
  const [block, setBlock] = useState(false); //틀릴경우 다시 뒤집을때까지 다른 카드를 못건드리게 하기위한 state
  const [check, setCheck] = useState(false); //check는 맨처음시작이 true만 담긴 배열이기때문에 시작하자마자 종료가 되기때문에 조정수

  useEffect(() => {
    if (check) {
      var a = new Set(frontback); //모두 앞면인 배열을 set으로 만들면 true하나만 담긴 size가 1인 set이된다
      a = [...a]; //인덱스 처리하기위하여 배열로 변형
      if (a.length === 1 && a[0] && time) {
        //true임을 체크하기위해
        setTimeout(() => {
          stopper(false); //끝나면 끝난 시간보이게 하기위해
          setCheck(false);
          alert("게임끝!");
        }, 500);
      }
    }
  }, [frontback, check, select]); //같은 그림을 골랐을때 frontback이 변하질 않아서 select를 추가하였음

  useEffect(() => {
    if (time) {
      setFB(Array(16).fill(false)); //시간이 흐르기 시작하면 카드를 뒤집게
    } else {
      setFB(Array(16).fill(true)); //맨처음 숫자배열이 생성되고 앞면을 보여주기 위해
    }
  }, [time]);

  const selecter = (num, index) => {
    if (!select.length) {
      setSelect([num, index]); //뒤집은 첫번째 카드의 숫자와 그 카드위치 index를 저장
    } else {
      if (select[0] % 8 === num % 8) {
        //카드숫자가 각각 8로나누었을때의 나머지가 같으면 같은 그림의 카드임
        setSelect([]); //숫자가 같거나 틀려도 처음고른 숫자는 비워야한다
        setCheck(true); //한쌍을 맞추기만 해도
      } else {
        setBlock(true); //틀릴경우 다시 뒤집을때까지 다른 카드를 못건드리게 하기위해 true하고
        setTimeout(() => {
          setFB((prev) => {
            var a = [...prev]; //card에서 fb에 반응하는 useEffect가 이런식으로 새주소를 주지않으면 반응하지않음
            a[index] = false; //고른 두 카드를 뒷면으로 뒤집기위함
            a[select[1]] = false;
            return a;
          });
          setSelect([]);
          setBlock(false); //뒤집히고나면 false로
        }, 1000); //고른카드가 잘못된걸 보여주기위한 1초
      }
    }
  };

  for (let i = 0; i < 16; i++) {
    if (i >= 8) {
      cardSet2.push(
        <Card
          key={i}
          alt={num[i]} //카드 그림번호
          fb={frontback} //앞면뒷면을 정하기위한 state
          fber={setFB} //앞면 뒷면을 변화하기위한 frontback의 set함수
          index={i} //카드위치
          select={selecter} //첫번째로 뒤집는 카드의 번호와 위치 저장하고, 다음 선택카드와 비교하기위한 함수
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
    //css로 두줄로 나누기위해 배열하나를 map이용하기보다 두개로 나누어 return
    <>
      <div className="cardset">{cardSet1}</div>
      <div className="cardset">{cardSet2}</div>
    </>
  );
}

export default CardSet;
