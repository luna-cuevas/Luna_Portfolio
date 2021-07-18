/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js', {
	particles     : {
		number      : {
			value   : 45,
			density : {
				enable     : true,
				value_area : 481.0236182596568
			}
		},
		color       : {
			value : '#cacaca'
		},
		shape       : {
			type    : 'polygon',
			stroke  : {
				width : 2,
				color : '#222222'
			},
			polygon : {
				nb_sides : 6
			},
			image   : {
				src    : 'img/github.svg',
				width  : 100,
				height : 100
			}
		},
		opacity     : {
			value  : 1,
			random : true,
			anim   : {
				enable      : true,
				speed       : 1,
				opacity_min : 0,
				sync        : false
			}
		},
		size        : {
			value  : 3,
			random : true,
			anim   : {
				enable   : false,
				speed    : 4,
				size_min : 0.3,
				sync     : false
			}
		},
		line_linked : {
			enable   : true,
			distance : 144.30708547789706,
			color    : '#cacaca',
			opacity  : 0.1,
			width    : 0.4810236182596568
		},
		move        : {
			enable    : true,
			speed     : 1,
			direction : 'bottom-right',
			random    : true,
			straight  : false,
			out_mode  : 'out',
			bounce    : false,
			attract   : {
				enable  : true,
				rotateX : 600,
				rotateY : 600
			}
		}
	},
	interactivity : {
		detect_on : 'canvas',
		events    : {
			onhover : {
				enable : true,
				mode   : 'grab'
			},
			onclick : {
				enable : true,
				mode   : 'repulse'
			},
			resize  : true
		},
		modes     : {
			grab    : {
				distance    : 400,
				line_linked : {
					opacity : 1
				}
			},
			bubble  : {
				distance : 250,
				size     : 0,
				duration : 2,
				opacity  : 0,
				speed    : 3
			},
			repulse : {
				distance : 400,
				duration : 0.6
			},
			push    : {
				particles_nb : 4
			},
			remove  : {
				particles_nb : 2
			}
		}
	},
	retina_detect : true
});
