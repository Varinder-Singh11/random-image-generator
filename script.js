const images = [["img/cat1.png", "img/cat2.png", "img/cat3.png"] , ["img/dog1.png" , "img/dog2.png" ,"img/dog3.png"], ["img/giraffe1.png", "img/giraffe2.png" , "img/giraffe3.png"]];

let refreshCounter = 0;

function randoming(image){
    var theme = Math.floor(Math.random()*images.length);
    var img = Math.floor(Math.random()*3);

    image.setAttribute('src', images[theme][img]);
}

window.addEventListener('load',() => {
    let image1 = document.getElementById('image1');
    let image2 = document.getElementById('image2');
    let image3 = document.getElementById('image3');
    let refresh = document.getElementById('refresh');
    let input = document.getElementById('input');

    refreshCounter += 3;
    refresh.innerHTML = refreshCounter;
    randoming(image1);
    randoming(image2);
    randoming(image3);
    let value = (input.value/1000).toFixed(1);
    let timer = document.getElementById('timer');
    timer.innerHTML = value;
    timerValue = input.value;
})

function handleClick(){
    let image1 = document.getElementById('image1');
    let image2 = document.getElementById('image2');
    let image3 = document.getElementById('image3');
    let refresh = document.getElementById('refresh');

    refreshCounter += 3;
    refresh.innerHTML = refreshCounter;
    randoming(image1);
    randoming(image2);
    randoming(image3);
}

let timerValue;
let checkedValue;

function getInput(event){
    let value = event.target.value;
    if(isNaN(value)) alert('Wrong Input, Try Again');
    if(value < 500 || value > 10000) alert('Wrong Input, Try Again');
    let timer = document.getElementById('timer');
    timer.innerHTML = (value/1000).toFixed(1);
    timerValue = value;
}

setInterval(() => {
    let value = document.getElementById('input').value;
    if(isNaN(value)) timerValue = NaN;
    if(value < 500 || value > 10000) timerValue = NaN;
    if(timerValue === 0){
        handleClick();
        timerValue =  value;
    }
    timerValue -= 100;
    let timer = document.getElementById('timer');
    timer.innerHTML = (timerValue/1000).toFixed(1);

    if(timerValue < (0.20)*value){
        timer.style.backgroundColor = 'red';
        timer.style.color = 'white';
    }
    else if(timerValue > (0.60)*value){
        timer.style.backgroundColor = 'green';
        timer.style.color = 'white';
    }
    else{ timer.style.backgroundColor = 'yellow';
    timer.style.color = 'black';}
}, 100);


function do_animation(event){
    let target = event.srcElement;
    target.classList.remove('bounce');
    setTimeout(() => {
        target.classList.add('bounce');
    }, 0)
    randoming(target);
    refreshCounter += 1;
    refresh.innerHTML = refreshCounter;
    let value = document.getElementById('input').value;
    timerValue = value;
}