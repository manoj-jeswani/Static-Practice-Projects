$(function(){

$("#filter li").click(function(){

var category=$(this).html();

$("#filter li").removeClass("active");
//above statement removes from all li (elements of filter) class active which was previously added to them 
$(this).addClass("active");//now add class ative only to the current element
$("#portfolio li").hide();
//above ststement leta all images to disappear
$("#portfolio li").each(function(){
//goes to each li element
if($(this).hasClass(category))
{
	$(this).show();/*
	this points to current li element*/
}

});

//hide and show are used instead of fadeOut() and fadeIn() , so to avoid jumping appearing effect

/*
//.each() method of jquery enables us to do looping through all the li elements

var i=0;
$("#portfolio li").each(function(){
i=i+1;
var test=$(this).html();
console.log(test+"====="+i);

});

*/


});
});
