var i = 0;
$(document).ready(function(){
  $("#li2ul").css("left",$(window).width()-300);
  $("#hum").click(function(){
    // alert("1");
    // $("#li2ul").animate({transform:"translateX(80%)"});

    i = 1;
  });
  $("body").click(function(){
    if(i === 1){
    // $("#li2ul").css("transform","translateX(92%)");
    i = 0;
  }
  })
});
