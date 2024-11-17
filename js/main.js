const navBtn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function(){
    nav.classList.toggle('nav-mobile')
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
};

const owl = $('.owl-carousel');

owl.owlCarousel({
	center: true,
	loop: true,
	margin: 20,
	startPosition: 0,
	items: 1,
	responsive: {
		540: {
			startPosition: 1,
			items: 3, 
		},
		850: {
			startPosition: 1,
			items: 3, 
		},
		1200: {
			items: 3,
			margin: 30,
		},
	},
});

$('.slider-btn-prev').click(function () {
	owl.trigger('prev.owl.carousel');
});


$('.slider-btn-next').click(function () {
	owl.trigger('next.owl.carousel');
});