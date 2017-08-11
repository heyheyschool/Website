$("document").ready(function() {			
				
				var parallax1 = $(".parallax").get(0);

				$('.first').click(function(){
										   
					$('html, body').animate({
						scrollTop: $(".parallax#parallax1").offset().top
					}, 2000);				   
					 
										   
				 });
				
				
				
				$('.second').click(function(){
										   
					$('html, body').animate({
						scrollTop: $(".parallax#parallax2").offset().top
					}, 2000);				   
					 
										   
				 });
				
				
					$('.third').click(function(){
										   
					$('html, body').animate({
						scrollTop: $(".parallax#parallax3").offset().top
					}, 2000);				   
					 
										   
				 });

});

/*window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("test").className = "titleContainer";
    } 
}*/

$(window).scroll(function() {
  if ($(this).scrollTop()> 400) {
    $('.scrolltop').fadeIn();
   } else {
    $('.scrolltop').fadeOut();
   }
});