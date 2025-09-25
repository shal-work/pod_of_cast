const observerVue = (upSelector) => {
	const options = {
		rootMargin: '-10px'
	};
	// Создать наблюдателя
	const observer = new IntersectionObserver(entries => {
		// перебор записей
		entries.forEach(entry => {
			let containerInner = entry.target.querySelectorAll('[data-animated]');
			if (entry.isIntersecting ) {
				containerInner.forEach(function(item) {
					let setaDataAimated = item.dataset.animated;
					item.classList.add(setaDataAimated);
				})
				return; // если класс добавлен, продолжать уже не надо
			}
			containerInner.forEach(function(item) {
				let setaDataAimated = item.dataset.animated;
				item.classList.remove(setaDataAimated);
			});
		});
	}, options);

	try {
		observer.observe(document.querySelector(upSelector));
	} catch (error) {}

};

export default observerVue;





// Пример записи:
// в html:
//<div class="observer" id="observer">
//    <div class="container-inner" data-animated = "fadeInUp"></div>
//</div>
// в js:
// try {
// 	observer.observe(document.querySelector('.observer'));
// } catch (error) {}
// // или через id
// observer.observe(document.getElementById('observer'));
// observer.observe(document.querySelector('#observer'));

// в css
// .fadeInUp {
//     animation-name: fadeInUp
// }
// @keyframes fadeInUpBig {
//     from {
//         opacity: 0;
//         transform: translate3d(0, 2000px, 0)
//     }

//     to {
//         opacity: 1;
//         transform: none
//     }
// }