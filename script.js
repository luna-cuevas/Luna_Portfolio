gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-text', {
	scrollTrigger : {
		toggleActions : 'play pause resume pause',
		trigger       : '.hero-text'
	},
	opacity       : 0,
	duration      : 2,
	delay         : 1
});

gsap.from('.hero-text p', {
	opacity  : 0,
	delay    : 1.5,
	y        : 400,
	duration : 1.2,
	stagger  : 0.2
});

gsap.from('.moon', {
	opacity  : 0,
	duration : 3,
	delay    : 3
});

gsap.to('.moon1', {
	delay    : 4,
	rotation : 360,
	duration : 3
});

gsap.from('.cloud1', {
	opacity  : 0,
	duration : 3,
	x        : -400,
	duration : 4,
	delay    : 3
});

gsap.from('.cloud2', {
	opacity  : 0,
	duration : 3,
	x        : 400,
	duration : 4,
	delay    : 3
});

gsap.from('.lorem', {
	scrollTrigger : {
		// toggleActions : 'restart pause resume pause',
		trigger : '.info'
	},
	opacity       : 0,
	duration      : 2,
	x             : 400
	// scrub         : 1
});

gsap.from('.pic', {
	scrollTrigger : {
		// toggleActions : 'restart pause resume pause',
		trigger : '.info'
	},
	opacity       : 0,
	duration      : 1,
	y             : 400,
	scrub         : 1
});

gsap.from('.logo', {
	scrollTrigger : {
		// toggleActions : 'restart pause resume pause',
		trigger : '.logo'
	},
	opacity       : 0,
	duration      : 2,
	x             : -200
});

gsap.from('.summary', {
	scrollTrigger : {
		// toggleActions : 'restart pause resume pause',
		trigger : '.summary'
	},
	opacity       : 0,
	duration      : 2,
	x             : 200,
	delay         : 0.4
});

gsap.from('.tooltip', {
	scrollTrigger : {
		trigger : '.info3'
	},
	y             : 400,
	opacity       : 0,
	duration      : 1,
	stagger       : 0.2
});

function myFunction() {
	let dots = document.getElementById('dots');
	let moreText = document.getElementById('more');
	let btnText = document.getElementById('myBtn');

	if (dots.style.display === 'none') {
		dots.style.display = 'inline';
		btnText.innerHTML = 'Read more';
		moreText.style.display = 'none';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Read less';
		moreText.style.display = 'inline';
	}
}

function myFunction2() {
	let dots = document.getElementById('dots2');
	let moreText = document.getElementById('more2');
	let btnText = document.getElementById('myBtn2');

	if (dots.style.display === 'none') {
		dots.style.display = 'inline';
		btnText.innerHTML = 'Read more';
		moreText.style.display = 'none';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Read less';
		moreText.style.display = 'inline';
	}
}

function myFunction3() {
	let dots = document.getElementById('dots3');
	let moreText = document.getElementById('more3');
	let btnText = document.getElementById('myBtn3');

	if (dots.style.display === 'none') {
		dots.style.display = 'inline';
		btnText.innerHTML = 'Read more';
		moreText.style.display = 'none';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Read less';
		moreText.style.display = 'inline';
	}
}

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
