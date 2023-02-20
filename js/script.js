

const slider = document.querySelector('.swiper');

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 791 && slider.dataset.mobile == 'false') {
		//document.location.reload();
		mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 20,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			loop: true,
			//sliderClass: 'swiper-slide',
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 791) {
		slider.dataset.mobile = 'false';
		mySwiper.destroy();
	}
}

mobileSlider();

window.addEventListener('resize', () => {
	mobileSlider();
});