setInterval(setClock,1000);

let hoursHand = document.querySelector('body > div > div.hand.hour');
let minutesHand = document.querySelector('body > div > div.hand.minute');
let secondsHand = document.querySelector('body > div > div.hand.second');



function setClock(){
    const currentDate = new Date();
    let hoursRatio = currentDate.getHours();
    hoursRatio = hoursRatio >= 12 ? hoursRatio /12 : hoursRatio;
    const minutesRatio = currentDate.getMinutes()/60;
    const secondsRatio = currentDate.getSeconds()/60;
    setRotation(hoursHand,hoursRatio);
    setRotation(minutesHand,minutesRatio);
    setRotation(secondsHand,secondsRatio);
}
function setRotation(elemnt,rotationValue){
    elemnt.style.setProperty('--rotation',rotationValue * 360);
}
setClock();

/* -----    end of analog clock-------- */
/* -----    start of numeric clock-------- */


setInterval(setClockNumeric,1000);
const hoursDisplay = document.querySelector('body > div.analogClock > div.aHours')
const minutesDisplay = document.querySelector('body > div.analogClock > div.aMinutes')
const secondsDisplay = document.querySelector('body > div.analogClock > div.aSeconds')

function setClockNumeric(){
  const  currentDateValue = new Date();
  let hoursValue = currentDateValue.getHours().toString();
  hoursValue = hoursValue.length<2? "0"+hoursValue:hoursValue;
  let minutesValue = currentDateValue.getMinutes().toString();
  minutesValue = minutesValue.length<2? "0"+minutesValue:minutesValue;
    let secondsValue = currentDateValue.getSeconds().toString();
    secondsValue = secondsValue.length<2? "0"+secondsValue:secondsValue;

    secondsValue = ": "+secondsValue;
    minutesValue = ": "+minutesValue;

    hoursDisplay.textContent = hoursValue;
    minutesDisplay.textContent = minutesValue;
    secondsDisplay.textContent = secondsValue;
}
setClockNumeric();