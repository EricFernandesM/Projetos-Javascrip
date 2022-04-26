var btnsub = document.getElementById('subtrair');
var btnsoma = document.getElementById('adicionar');
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    btnsub.disabled = false;
    if (currentNumber >= 10){
        btnsoma.disabled = true;
    }
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = "black";
    }
}
btnsoma.addEventListener("click",increment);


function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    btnsoma.disabled = false;
    if (currentNumber <= -10){
        btnsub.disabled = true;
    }
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "red";
    }
}
btnsub.addEventListener("click", decrement);




