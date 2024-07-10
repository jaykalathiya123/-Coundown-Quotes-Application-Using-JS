day=document.getElementById("day")
hr=document.getElementById("hr")
mn=document.getElementById("mn")
sec=document.getElementById("sec")

setTime=()=>{
    days=0;
    hours=0;
    minutes=0;
    seconds=0;

    Interval=setInterval(() => {
        seconds++;
        
        // sec.innerHTML=seconds;

        if(seconds<10){
        sec.innerHTML="0"+seconds;
        }else{
        sec.innerHTML=seconds;
        
        }

        if(seconds>=60){
            minutes++
            seconds=0;
            mn.innerHTML=minutes;
        }
        if(minutes>=60){
            hours++;
            minutes=0;
            hr.innerHTML=hours;
        }
        if(hours>=24){
            days++;
            hours=0;
            day.innerHTML=days;
        }
        
       
    },1000);

}
let Stop = () => {
    clearTimeout(Interval);
}