//JavaScript Functions for the website

//document object is the webpage
// '$' sign represents loading a JQuery library
//Learned from https://www.youtube.com/watch?v=qpUjEEERTTs
//Javascript takes up more resources than CSS
//Change Navbar from Transparent to Solid/Something Else
$(document).ready(function(){
	$(window).scroll(function(){
		if($(document).scrollTop() > 800){
			$("#naviBar").addClass("changeTransparentToSolid");
		}
		else{
			$("#naviBar").removeClass("changeTransparentToSolid");
		}
	});
});

