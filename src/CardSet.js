import back from "./assets/뒷면.png";
import pizza from "./assets/피자.png";
import banana from "./assets/바나나.png";
import cookie from "./assets/쿠키.png";
import watermel from "./assets/수박.png";
import chicken from "./assets/치킨.png";
import cheeze from "./assets/치즈.png";
import choco from "./assets/초콜릿.png";
import shirimp from "./assets/새우.png";
import Card from "./Card";

const imageSave = {
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

function CardSet({ num, onTime, time }) {
  var cardSelect1 = 0;
  var cardSelect2 = 0;

  const flip = (e) => {
    var taget = e.target;
    if (
      taget.classList.contains("complete") ||
      taget.classList.contains("front")
    ) {
      taget.preventDefault();
    }
    if (taget.alt > 0) {
      taget.classList.toggle("front"); //front Class를 토글
      taget.classList.toggle("back");
    }
    if (taget.classList.contains("front")) {
      taget.src = imageSave[taget.alt]; //front Class가 토글되고 front Class가 있다면 뒷면이었다가 앞면이 된다
      if (cardSelect1 === 0) {
        //뒤집은 카드 두장을 비교하기 위해 선택한 카드의 alt값을 변수에 저장한다
        cardSelect1 = taget.alt;
      } else {
        cardSelect2 = taget.alt;
      }

      if (
        cardSelect1 > 0 &&
        cardSelect2 > 0 &&
        Math.abs(cardSelect2 - cardSelect1) === 8
      ) {
        //뽑은 두카드의 alt값이 8차이라면 같은 카드다
        //같은카드를 뽑았다면 앞면 표시상태로 클릭해도 이벤트가 진행되지 않게 해야한다
        cardSelect1 = 0;
        cardSelect2 = 0;
        const front = document.querySelectorAll(".front");
        setTimeout(() => {
          front.forEach((com) => {
            com.classList.add("complete");
            com.classList.remove("front");
          });

          var complete = document.querySelectorAll(".complete");
          if (complete.length === 16) {
            setTimeout(function () {
              onTime(false);
              alert("게임 끝!");
            }, 200);
          }
        }, 600);
      } else if (
        cardSelect1 > 0 &&
        cardSelect2 > 0 &&
        Math.abs(cardSelect2 - cardSelect1) !== 8
      ) {
        setTimeout(function () {
          const front = document.querySelectorAll(".front");
          front.forEach((fronts) => {
            fronts.src = back;
            fronts.classList.remove("front");
            fronts.classList.add("back");
          });
          cardSelect1 = 0;
          cardSelect2 = 0;
        }, 700);
      }
    }
  };

  var cardSet1 = []; //첫번째열을 위한 카드번호 배열
  var cardSet2 = []; //두번째열을 위한 카드번호 배열

  for (let i = 0; i < 16; i++) {
    if (i >= 8) {
      cardSet2.push(<Card alt={num[i]} className="front" onClick={flip} />); //num의 8~15번까지의 인덱스 값을 넣음
    } else {
      cardSet1.push(<Card alt={num[i]} className="front" onClick={flip} />); //num의 0~7번까지의 인덱스 값을 넣음
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
