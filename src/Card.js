import pizza from './assets/피자.png';
import banana from './assets/바나나.png';
import cookie from './assets/쿠키.png';
import watermel from './assets/수박.png';
import chicken from './assets/치킨.png';
import cheeze from './assets/치즈.png';
import choco from './assets/초콜릿.png';
import shirimp from './assets/새우.png';
import back from './assets/뒷면.png';
import './Card.css'
// import { useState } from 'react';

const cardImage = {
    0:back,
    1:pizza,
    2:banana,
    3:cookie,
    4:watermel,
    5:chicken,
    6:cheeze,
    7:choco,
    8:shirimp,
    9:pizza,
    10:banana,
    11:cookie,
    12:watermel,
    13:chicken,
    14:cheeze,
    15:choco,
    16:shirimp,
    
}




function Card({value=0,className,onClick}){
    const src= className==='front'? cardImage[value] : back; //class 이름으로 뒤집기... 였던것

    return <img alt={value} src={src} class={className} onClick={onClick}/>;    //랜덤으로 부여받은 숫자에따라 이미지를 배정
}

export default Card;