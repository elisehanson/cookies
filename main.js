$(document).ready(function(){
  
  if(location.search){
    params = location.search.split("?")[1]
    name = params.split("=")[1]

    Cookies.set("name_submitted", name)
  }

    if(Cookies.get("name_submitted")) {
  	$("#name_span").hide();
    $("#name_span").delay(300).fadeIn(800).html(Cookies.get("name_submitted"))
  }
})




