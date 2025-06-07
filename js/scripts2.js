let myTimePragraph = document.getElementById('mytime')

myTimePragraph.textContent = '';

function updateTime(){
    let now = new Date();
    let nowString = now.toLocaleTimeString();
    
    myTimePragraph.innerText = nowString;
}

updateTime()
setInterval(updateTime, 1000)