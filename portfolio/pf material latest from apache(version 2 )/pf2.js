/*from here ajax begins 
text below images is made to show up but the text is not hardcoded in html but it is retrieved from server using ajax
*/


$(function(){

function setImg(src,id)
{
	$("#fimage").attr("src",src);
	var path="text/"+id;		
	/*setting path to files that are stored in server and have to be accessed from server
*/
/*the below fxn implements ajax :: goes to given path and gets the the data at specified location and that data gets passed to it in form of its argument
*/
	$.get(path,function(data){

		$("#description p").html(data);
		/*.html() is used to modify html content of any component
		*/
	});

}



$("#portfolio img").click(function(){
//this points to currently  clicked image
var src=$(this).attr("src");
var id=$(this).attr("id");

var current_li=$(this).parent();
//current_li is given the li element in which the currntly clicked image resides 
setImg(src,id);
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
	var next_id=next_li.children("img").attr("id");

	setImg(next_src,next_id);
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
var prev_id=prev_li.children("img").attr("id");

setImg(prev_src,prev_id);

current_li=prev_li;

});


$("#leftarrow , #rightarrow").mouseover(function(){
	$(this).css("opacity","0.75");

});

$("#leftarrow , #rightarrow").mouseleave(function(){
	$(this).css("opacity","0.35");

});




});