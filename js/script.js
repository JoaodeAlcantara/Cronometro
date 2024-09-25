let milis = 0;
let min = 0;
let seg = 0;
let time;
const btnPlay = document.querySelector('#play');
const btnPause = document.querySelector('#pause');

function concat(num) {
    return num < 10 ? '0' + num : num;
}

function cronometro() {
    milis++
    if (milis == 100) {
        milis = 0
        seg++
    }
    if (seg == 60) {
        seg = 0
        min++
    }
    document.querySelector('h1').innerHTML = `${concat(min)}:${concat(seg)}:${concat(milis)}`;
}
function play() {
    time = setInterval(cronometro, 10)
    btnPlay.disabled = true;
}
function pause() {
    if(milis===0){
        return
    } else{
        if(btnPause){
            btnPause.style.cssText = 'color: white; background-Color: blue; border: none';
        }
        clearInterval(time)
        btnPlay.innerHTML = 'Recomeçar'
        btnPlay.style.cssText = 'color: blue; background-Color: white; border: 2px solid blue';
    }
    btnPlay.addEventListener('click', () => {
        btnPlay.innerHTML = 'Começar';
        btnPlay.style.cssText = ''

        btnPause.style.cssText = ''
    })
    btnPlay.disabled = false;
}
function reset() {
    clearInterval(time)
    seg = 0;
    min = 0;
    milis = 0;
    document.querySelector('h1').innerHTML = `00:00:00`;
    btnPlay.innerHTML = 'Começar'
    btnPlay.style.cssText = ''
    btnPlay.disabled = false
    btnPause.style.cssText = ''
}