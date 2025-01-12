const iconMenu = document.querySelector('.toggle-nav');

if (iconMenu){
	const menuBody = document.querySelector('.menu')
	const fence = document.querySelector('.logo')
	const pageOverlay = document.querySelector('.page-overlay')

	/*
	TODO: Реализовано временное решение для открытия меню по умолчанию.
	На больших разрешениях лого и кнопка закрытия не отображается, будет доработано
	на финальном макете.
	*/

	document.body.classList.add('_lock')
	iconMenu.classList.add('_active')
	menuBody.classList.add('_active')
	fence.classList.add('_lock')
	pageOverlay.classList.add('_lock')

	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active')
		menuBody.classList.toggle('_active')
		fence.classList.toggle('_lock')
		pageOverlay.classList.toggle('_lock')
	})

	pageOverlay.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active')
		menuBody.classList.toggle('_active')
		fence.classList.toggle('_lock')
		pageOverlay.classList.toggle('_lock')
	})
}

const showText = document.querySelector('.main-content__read-more-button');

if (showText){
	const descriptionLimiter = document.querySelector('.main-content__limiter');

	showText.addEventListener("click", function(e) {
		descriptionLimiter.classList.toggle('_active');
		showText.classList.toggle('_active');
	});
}
