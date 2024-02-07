let cooldownTimers = [];
let timeRemaining = [];
/*เริ่มนับถอยหลัง*/
function startCooldown(timerId) {
    const selectedTime = document.getElementById(`selectTime${timerId}`).value;
    timeRemaining[timerId] = selectedTime * 60; // Convert minutes to seconds

    clearInterval(cooldownTimers[timerId]);

    const timerElement = document.getElementById(`timer${timerId}`);
    timerElement.innerText = updateTimerDisplay(timeRemaining[timerId]);

    cooldownTimers[timerId] = setInterval(function() {
        if (timeRemaining[timerId] <= 0) {
            clearInterval(cooldownTimers[timerId]);
            showReadyMessage(timerId);
        } else {
            timeRemaining[timerId]--;
            timerElement.innerText = updateTimerDisplay(timeRemaining[timerId]);
        }
    }, 1000);
}
/*แสดงเวลาบนเว็บ*/
function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
/*แสดงข้อความ Ready! (เวลา)*/
function showReadyMessage(timerId) {
    const timerElement = document.getElementById(`timer${timerId}`);
    const currentReadyTime = getCurrentTime();
    const readyMessage = `Ready! (${currentReadyTime})`;
    timerElement.innerText = readyMessage;
}
/*ดึงเวลาปัจจุบัน*/
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}
