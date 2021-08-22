gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
	'(min-width: 0px)' : function() {
		gsap.from('.hero-text p', {
			scrollTrigger : {
				toggleActions : 'play none restart restart',
				trigger       : '.hero-text'
			},
			opacity       : 0,
			delay         : 1.1,
			z             : 100,
			duration      : 2,
			stagger       : 0.5
		});

		gsap.from('.moon', {
			scrollTrigger : {
				toggleActions : 'play none restart restart',
				trigger       : '.moon'
			},
			opacity       : 0,
			duration      : 4,
			delay         : 3
		});

		gsap.to('.moon1', {
			delay    : 3,
			rotation : 360,
			duration : 3,
		});

		gsap.from('.cloud1', {
			opacity  : 0,
			x        : -400,
			duration : 4,
			delay    : 3,
		});

		gsap.to('.cloud1', {
			duration : 3,
			x        : 10,
			y		 : 3,
			delay    : 6
		});

		gsap.from('.cloud2', {
			opacity  : 0,
			x        : 400,
			duration : 4,
			delay    : 3
		});

		gsap.to('.cloud2', {
			duration : 3,
			x        : -10,
			delay    : 6
		});

		gsap.from('.info-btn', {
			scrollTrigger : {
				toggleActions : 'play none reverse restart',
				trigger       : '.info',
				start         : '20% center',
				end           : '30% center',
				scrub         : true
			},
			opacity       : 0,
			duration      : 2,
			y             : 400
		});

		gsap.from('.lorem', {
			scrollTrigger : {
				toggleActions : 'play none reverse restart',
				trigger       : '.info',
				start         : '30% bottom',
				end           : '60% bottom',
				scrub         : 1
			},
			opacity       : 0,
			duration      : 1,
			x             : 200
		});

		gsap.from('.pic', {
			scrollTrigger : {
				toggleActions : 'play none reverse restart',
				trigger       : '.info',
				start         : '20% bottom',
				end           : '60% bottom',
				scrub         : 1
			},
			opacity       : 0,
			duration      : 1,
			y             : 200
		});

		gsap.from('.info2-title', {
			scrollTrigger : {
				toggleActions : 'play none none reverse',
				trigger       : '.info2-title',
				start         : '-50% bottom',
				end           : '80% start',
				scrub         : 0.5
			},
			opacity       : 0,
			duration      : 2,
			z             : 200,
			delay         : 0
		});

		gsap.from('.summary', {
			scrollTrigger : {
				toggleActions : 'play none reverse restart',
				trigger       : '.info2',
				start         : '40% bottom',
				end           : '60% bottom',
				scrub         : 0.5
			},
			opacity       : 0,
			duration      : 1,
			x             : 200
		});

		gsap.from('.logo', {
			scrollTrigger : {
				toggleActions : 'play none reverse restart',
				trigger       : '.info2',
				start         : '40% bottom',
				end           : '60% bottom',
				scrub         : 0.5
			},
			opacity       : 0,
			duration      : 1,
			x             : -200
		});

		gsap.from('.line-1', {
			scrollTrigger : {
				toggleActions : 'play none none reverse',
				trigger       : '.info3',
				start         : '-80% bottom',
				end           : '20% bottom',
				scrub         : 0.5
			},
			opacity       : 0,
			duration      : 2,
			z             : 200,
			delay         : 0
		});

		gsap.from('.info3', {
			scrollTrigger : {
				toggleActions : 'play none none reverse',
				trigger       : '.info3',
				start         : '-20% bottom',
				end           : '20% bottom',
				scrub         : 1
			},
			y             : 400,
			opacity       : 0,
			duration      : 5
		});

		gsap.from('.links', {
			scrollTrigger : {
				toggleActions : 'play none none reverse',
				trigger       : '.recent-projects',
				start         : '-15% bottom',
				end           : '10% center',
				scrub         : 1
			},
			y             : 400,
			opacity       : 0,
			duration      : 2
		});

		gsap.from('.recent-projects', {
			scrollTrigger : {
				toggleActions : 'play none none reverse',
				trigger       : '.recent-projects',
				start         : '-20% bottom',
				end           : '20% bottom',
				scrub         : 1
			},
			y             : 400,
			opacity       : 0,
			duration      : 5
		});
	},

});
