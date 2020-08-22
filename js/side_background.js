
//window.setInterval(SetImage,0); 

//function SetImage(){     
    var nowdate = new Date();    
    var waketime = new Date();     
    waketime.setHours(6);
    
    var bedtime = new Date();     
    bedtime.setHours(20);
    
    if(waketime < nowdate  && nowdate < bedtime) {
         document.body.setAttribute('data-daytime','');
    }else{
         document.body.setAttribute('data-nighttime','');
    }
//}