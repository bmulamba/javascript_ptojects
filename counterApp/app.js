
let addCount = document.querySelector("#add");
let resetCount = document.querySelector("#reset");
let minusCount = document.querySelector("#minus");
let Count = document.querySelector("#counter");

addCount.addEventListener('click', () => {
    document.getElementById("counter").style.color = "green";
    document.querySelector("#add").style.color = "green";
    Count.innerHTML++
})

resetCount.addEventListener('click', () => {
    document.getElementById("counter").style.color = "black";
    Count.innerHTML = 0
})

minusCount.addEventListener('click', () => {
    document.getElementById("counter").style.color = "red";
    document.getElementById("minus").style.color = "red";
    Count.innerHTML--
})      

