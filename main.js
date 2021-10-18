setInterval(setClock,1000);

let hoursHand = document.querySelector('body > div > div.hand.hour');
let minutesHand = document.querySelector('body > div > div.hand.minute');
let secondsHand = document.querySelector('body > div > div.hand.second');



function setClock(){
    const currentDate = new Date();
    let hoursRatio = currentDate.getHours();
    hoursRatio = hoursRatio >= 12 ? hoursRatio - 12 : hoursRatio;
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