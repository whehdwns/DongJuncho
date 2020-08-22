  var now = new Date();
  if (now.getHours() > 6 && now.getHours() < 20) {
    document.body.className += " day";
  	//document.write("<img src ='../assets/images/intro_bg.jpg'>");
  } else {
    document.body.className += " night";
  //document.write("<img src ='../assets/images/intro_bg-a.jpg'>");
  }