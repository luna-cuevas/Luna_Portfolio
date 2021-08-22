filterSelection('all');
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName('column');
	if (c == 'all') c = '';
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], 'show');
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], 'show');
	}
}

function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(' ');
	arr2 = name.split(' ');
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += ' ' + arr2[i];
		}
	}
}

function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(' ');
	arr2 = name.split(' ');
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(' ');
}

var btnContainer = document.getElementById('myBtnContainer');
var btns = btnContainer.getElementsByClassName('btn');
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function() {
		var current = document.getElementsByClassName('active');
		current[0].className = current[0].className.replace(' active', '');
		this.className += ' active';
	});
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