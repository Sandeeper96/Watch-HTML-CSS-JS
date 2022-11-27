setInterval(()=>{
     tim = new Date();
     htime = tim.getHours();
     mtime = tim.getMinutes();
     stime = tim.getSeconds();
     hrotation = 30*htime+mtime/2;
     mrotation = 6*mtime;
     srotation = 6*stime;

     hour.style.transform = `rotate(${hrotation}deg)`;
     mintus.style.transform =  `rotate(${mrotation}deg)`;
     second.style.transform = `rotate(${srotation}deg)`;
    

},1000);