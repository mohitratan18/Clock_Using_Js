function myclock()
{
    let a = new Date();
    let hour= a.getHours();
    let min=a.getMinutes();
    let sec=a.getSeconds();
    if(hour.toString().length == 1)
    hour= "0"+hour;
    if(min.toString().length == 1)
    min= "0"+min;
    if(sec.toString().length == 1)
    sec= "0"+sec;
    let time=hour+" : "+min+" : "+sec;
    return time;
}
setInterval(function()
{
    let timee=myclock();
    document.getElementById("time").innerHTML=timee;
},1000)