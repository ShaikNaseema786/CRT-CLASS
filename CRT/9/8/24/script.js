let a=10;
if(a<20){
    alert("this is working")
   document.getElementById("para1").innerHTML="<h1> this is naseema<h1>"
}

else{
    alert("this is not working")
    document.getElementById("para1").innerHTML="<h2> hello<h2>"
}
//if-else
 let dt=new Date()
time= dt.getHours()
if(time <12){
    document.getElementById("para1").innerHTML="good morining";
}
 else if(time < 12 & time < 16){ 
    document.getElementById("para1").innerHTML="good afternoon";
}
 else if(time > 16 & time <22){
    document.getElementById("para1").innerHTML="good evening";
}
//swithcase
let d=new Date()
weekdays=d.getDay()
let day;
 switch(weekdays){
    case 0 :
    day="sunday"
    break;
    case 1 :
        day="monday"
        break;
        case 2 :
        day="tuesday"
        break;
        case 3 :
        day="wednesday"
        break;
        case 4:
        day="thrusday"
        break;
        case 5 :
        day="friday"
        break;
        case 6 :
        day="saturday"
        break;
      
 }
 document.getElementById("para1").innerHTML="to day is" + day

 //for loop
 let dummy=''
 let i;
 for(i=0;i<10;i++)
 {
    dummy=dummy+i"<br>"
 }
 document.getElementById("para1").innerHTML=dummy

 //even numbers print
 let i=0
 let dummy=''
 while(i<10){
    if(i%=!0){
    dummy+=i+"<br>"
    }
    i++
 }
 document.getElementById("para1").innerHTML=dummy

