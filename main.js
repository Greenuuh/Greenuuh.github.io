//alert('Welcome to Mingyu/s Planet Recipe!');

function main() {
	/*$('.content').hide();
	$('.content').fadeIn(5000);*/
	$('.numbers').hide();
	$('.contact').on('click', function(){
		//$(this).toggleClass('topic');
		$(this).next(),slideToggle(400);
		$(this).text('Numbers Viewed');
	});
}

  //$(document).ready(main);