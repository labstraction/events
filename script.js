
// setTimeout(() => {
//     console.log("pippo")
// }, 10000);

// let intervalCounter = 0;
// const interval = setInterval(() => {
//     console.log(intervalCounter);
//     if (intervalCounter === 10) {
//         clearInterval(interval);
//     }
//     intervalCounter++
// }, 1000);


const button3 = document.getElementById('button3')

button3.onclick = () => buttonClick('button 3');

// button3.onclick = countClick;

const button4 = document.getElementById('button4')

button4.addEventListener('mousedown',buttonClick)


document.addEventListener('keydown', realTimeSearch);



// const parPippo = document.getElementById('par-pippo');

// parPippo.addEventListener('click', countClick);


const link = document.getElementById('link');

link.addEventListener('click', displayPar)


const div = document.getElementById('mouse-div-2');

// div.addEventListener('mouseenter', onMouseEnter);

// div.addEventListener('mouseleave', onMouseLeave)

div.addEventListener('mousemove', onMouseOver);

function buttonClick(string) {
    console.log(string);
}


let counter = 0;

function countClick(event) {
    counter = counter + 1;
    console.log(counter);
    // if (counter === 7) {
    //     button4.removeEventListener('click', countClick)
    // }
    event.preventDefault();
    window.location = "https://google.com";
}


function displayPar(event) {
    let par = document.getElementById('hidden-par');
    par.style.display = 'block'
    event.preventDefault();
}


function changeBackground(event){
    let number = parseInt(event.key)
    if (event.ctrlKey && !isNaN(number)) {
        event.preventDefault(); 
        document.body.style.backgroundColor = '#'+number+number+number+number+number+number
    }
}



function onMouseEnter() {
    console.log("sono entrato");
}

function onMouseLeave() {
    console.log("sono uscito");
}


function onMouseOver() {
    console.log("sono sopra");
}


let selectedKey = "";
function onKeyDown(event) {
    if (event.key !== selectedKey) {
        console.log("tasto premuto " + event.key);
        1
    }
}

let searchTimeout;
function realTimeSearch(event){
    if (searchTimeout) {
        clearTimeout(searchTimeout);
    }
    searchTimeout = setTimeout(() => {
        console.log("sto cercando")
    }, 1000);
}