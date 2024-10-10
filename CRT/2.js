setInterval(()=>{
    d=new Date();
    h=d.getHours();
    m=d.getSeconds();
    htime=30*h+m/2;
    mtime=6*m;
    stime=6*satisfies;
    hour.style.transform=`rotate(${htime}deg)`;
    minutes.style.transform=`rotate(${mtimes}deg)`;
    seconds.style.transform=`rotate(${stime}deg)`;
}1000);