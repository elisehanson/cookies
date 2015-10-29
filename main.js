$(document).ready(function(){
  
  if(location.search){
    params = location.search.split("?")[1]
    name = params.split("=")[1]
    // color = params.split("=")[1]
    // weather = params.split("=")[1]
    Cookies.set("name_submitted", name)
    	// .set("color_submitted", color).set("weather_submitted", weather);
  }

    if(Cookies.get("name_submitted")) {
  	$("#name_span").hide();
    $("#name_span").delay(300).fadeIn(800).html(Cookies.get("name_submitted"))
  }

  //   if(Cookies.get("color_submitted")) {
  // 	$("#color_span").hide();
  //   $("#color_span").delay(300).fadeIn(800).html(Cookies.get("color_submitted"))
  // }

  //   if(Cookies.get("weather_submitted")) {
  // 	$("#weather_span").hide();
  //   $("#weather_span").delay(300).fadeIn(800).html(Cookies.get("weather_submitted"))
  // }
})




