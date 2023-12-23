let time = new Date();
let alarm = new Date();  
let check = false;

let box = document.body.querySelector("#clock");
setInterval(() => { 
    time = new Date();
    hour = time.getHours();
    minute = time.getMinutes();
    second = time.getSeconds(); 
    box.innerHTML = `${hour} : ${minute} : ${second}`; 
}, 1000) 




// Adding audio

const ActiveAlarm = (duration) => { 
    let audio = document.getElementById("audio");
    audio.play(); 
    check = false;
    setTimeout(() => {
        audio.pause();
    },duration*60000)
} 

const checkAlarm = (duration) => {
    if(check == true && hour == alarm.getHours() && minute == alarm.getMinutes()) {  
        ActiveAlarm(duration);    
    } 
}


// Adding alarm function
document.querySelector("#setAlarm").addEventListener("click", () =>{
    let alarmHour = document.getElementById("alarmHour").value;
    let alarmMinute = document.getElementById("alarmMinute").value;
    let duration = document.getElementById("duration").value; 
    
    if(alarmHour >= 0 && alarmHour <= 23 && alarmMinute >= 0 && alarmMinute <= 59) {
        alarm.setHours(alarmHour);
        alarm.setMinutes(alarmMinute); 
        check = true;
        setInterval(checkAlarm(duration), 1000);
    }
    else {
        alert("Enter valid time");
    }
})