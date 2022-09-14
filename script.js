const counter = document.getElementById("counter");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

function decreaseValue(){
    counter.value--
};
function resetValue(){
    counter.value = 0
};
function increaseValue(){
    counter.value++
};

decrease.addEventListener("click", decreaseValue)
reset.addEventListener("click", resetValue)
increase.addEventListener("click", increaseValue) 
