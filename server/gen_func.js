
function getTimeStamp(){
    let D=new Date(Date.now());
    let today=D.getFullYear()+"-";
    today+=(1+D.getMonth()).toString().padStart(2,"0")+"-";
    today+=D.getDate().toString().padStart(2,"0");
    let currTime=D.getHours()  .toString().padStart(2,"0")+"-";
    currTime   +=D.getMinutes().toString().padStart(2,"0")+"-";
    currTime   +=D.getSeconds().toString().padStart(2,"0");

    return today+" "+currTime;
}

