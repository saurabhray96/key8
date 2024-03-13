var orderBtn = document.getElementById("orderbtn");
var timers = document.getElementById("timer");
document.getElementById("orderbtn").addEventListener("click", () => {
    orderBtn.remove();
    timers.hidden = false;
    timer();
})
let btn = 0;
let second = 0;
let minute = 0;
let hour = 0;
function timer() {

    if (second === 60) {
        minute++
        second = 0;
        if (minute === 60) {
            hour++;
            minute = 0;
        }
    }
    document.getElementById("hourse").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minute;
    document.getElementById("seconds").innerHTML = second;
    second++;
    setTimeout(timer, 100);
}

