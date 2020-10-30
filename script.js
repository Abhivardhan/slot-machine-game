
let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");

let slotValues = ["😁", "😆", "😍", "😙", "😢", "😭", "😂", "🐶"];

function getRandomValue() {
    return slotValues[parseInt(Math.random() * 8)];
}

function spin() {

    document.getElementById("value1").setAttribute("style", "animation-play-state: running")
    document.getElementById("value2").setAttribute("style", "animation-play-state: running")
    document.getElementById("value3").setAttribute("style", "animation-play-state: running")

    let changeValue1 = setInterval(() => {
        value1.innerText = getRandomValue();
    }, 100);

    let changeValue2 = setInterval(() => {
        value2.innerText = getRandomValue();
    }, 100);

    let changeValue3 = setInterval(() => {
        value3.innerText = getRandomValue();
    }, 100);

    //spin slot 1 for 5sec    
    setTimeout(() => {
        
        clearInterval(changeValue1);
        document.getElementById("value1").setAttribute("style", "animation-play-state: paused");
        document.getElementById("value1").setAttribute("style", "animation: auto");
    }, 5000);


    //spin slot 2 for 7sec
    setTimeout(() => {
        clearInterval(changeValue2);
        document.getElementById("value2").setAttribute("style", "animation-play-state: paused");
        document.getElementById("value2").setAttribute("style", "animation: auto");
        
    }, 7000);


    //spin slot 3 for 10sec
    setTimeout(() => {
        clearInterval(changeValue3);
        document.getElementById("value3").setAttribute("style", "animation-play-state: paused");    
        document.getElementById("value3").setAttribute("style", "animation: auto");
    }, 10000);

    

}


