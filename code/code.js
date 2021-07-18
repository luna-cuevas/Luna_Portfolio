gsap.registerPlugin(ScrollTrigger);

gsap.from('.project1', {
	opacity  : 0,
	delay    : 0.2,
	y        : 400,
	duration : 1,
	stagger  : 0.2
});

gsap.from('.project2', {
	scrollTrigger : {
		trigger : '.project2'
	},
	opacity       : 0,
	delay         : 0.2,
	y             : 200,
	duration      : 1,
	stagger       : 0.2
});

$(document).ready(function() {
	$('.button a').click(function() {
		$('.overlay').fadeToggle(200);
		$(this).toggleClass('btn-open').toggleClass('btn-close');
	});
});
$('.overlay').on('click', function() {
	$('.overlay').fadeToggle(200);
	$('.button a').toggleClass('btn-open').toggleClass('btn-close');
	open = false;
});
