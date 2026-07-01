let countDisplay = document.querySelector("#count");
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");

let id = null;
let count = 0;

startBtn.addEventListener("click", () => {
    if (id !== null) return;

    id = setInterval(() => {
        count++;
        countDisplay.textContent = count;
    }, 1000);

});

stopBtn.addEventListener("click", () => {
    clearInterval(id);
    id = null;
});