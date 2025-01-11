const iconMenu = document.querySelector('.toggle-nav');

if (iconMenu){
	const menuBody = document.querySelector('.menu');
	const fence = document.querySelector('.logo');
	const pageOverlay = document.querySelector('.page-overlay');

	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		fence.classList.toggle('_lock');
		pageOverlay.classList.toggle('_lock');
	});

	pageOverlay.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		fence.classList.toggle('_lock');
		pageOverlay.classList.toggle('_lock');
	});
}

const showText = document.querySelector('.main-content__read-more-button');

if (showText){
	const descriptionLimiter = document.querySelector('.main-content__limiter');

	showText.addEventListener("click", function(e) {
		descriptionLimiter.classList.toggle('_active');
		showText.classList.toggle('_active');
	});
}
