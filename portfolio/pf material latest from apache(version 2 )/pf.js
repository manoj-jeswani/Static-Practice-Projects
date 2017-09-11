$(function(){

$("#portfolio img").click(function(){
//this points to currently  clicked image
var src=$(this).attr("src");
var current_li=$(this).parent();
//current_li is given the li element in which the currntly clicked image resides 
$("#fimage").attr("src",src);
$("#frame").fadeIn();
$("#overlay").fadeIn();


});


$("#overlay").click(function(){
$(this).fadeOut();
$("#frame").fadeOut();

});

$("#rightarrow").click(function(){
	if(current_li.is(":last-child")){
		var next_li=$("#portfolio li").first();
	}
	else{
	var next_li=current_li.next();

	}


	var next_src=next_li.children("img").attr("src");
	$("#fimage").attr("src",next_src);

	current_li=next_li;



});


$("#leftarrow").click(function(){
	if(current_li.is(":first-child")){
		var prev_li=$("#portfolio li").last();
	}
	else{
		var prev_li=current_li.prev();

	}

var prev_src=prev_li.children("img").attr("src");
$("#fimage").attr("src",prev_src);
current_li=prev_li;

});


$("#leftarrow , #rightarrow").mouseover(function(){
	$(this).css("opacity","0.75");

});

$("#leftarrow , #rightarrow").mouseleave(function(){
	$(this).css("opacity","0.35");

});




});