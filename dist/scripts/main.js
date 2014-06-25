console.log('The Iron Yard Rocks');

$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 300) {
                    $(".menu").css('background-color', 'white');
                    $('.menu').css('opacity', 0.95);
                } else {
                    $(".menu").css('background-color','black');
                }
            });
        });


    jQuery(document).ready(function() {
	jQuery('.box').hide();
});
jQuery(document).ready(function() {
	jQuery('.container').hover(function() {
		jQuery('.box').show();
		},
	function() {
		jQuery('.box').hide();
		});
});

$(".button").click(function(){
  $(".movies-hover").hide(".movies-hover");
  $(".movies-hover2").show(".movies-hover2");
  $(".movies-hover2").addClass(".movies-hover3");
});

$(document).ready(function(){
  $(".movies-hover").find(".container").css({"color":"red","border":"2px solid red"});
});

$(".button").click(function(){
  alert($(".container").width());
}); 

$(".button").click(function(){
  alert($(".container").height());
});

$("p").one("click",function(){
  $(this).animate({fontSize:"+=30px"});
});

$("body").keydown(function(){
  $("body").css("background-color","red");
});
$("p").bind("click",function(){
  alert("Scroll down please.");
});
$(".dblclick").dblclick(function(){
  $(".lost").show(".lost");
  alert("Oh NO WHAT HAVE YOU DONE?!!!!!(Lost Reference)")
});
$(".dblclick").click(function(event){
  $(".lost").html(event.result);
});
$(".dblclick").keydown(function(){
  $(".dblclick").text(i+=1);
});
$("div").has("img")