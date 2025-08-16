import SliderTestimonials from '../components/slider-testimonials';
import SliderCover from '../components/slider-covers';

import observer from'../components/observer-vue';

window.addEventListener('DOMContentLoaded', (e) => {
    $('.header__burger').on('click', () => {toggleBurger()});
    $('.menu').on('click', () => {toggleBurger()});
    $('.btn-divesea').on('click', () => {toggleBurger()});
    $('.header__btn').on('click', () => {toggleBurger()});
    
    function toggleBurger () {
        $('.header').toggleClass("fadeIn-open");
        // $('.page').toggleClass('none-scroll');
        $('body').toggleOverflow();
        // $('body').toggleOverflow();
    };

    const covers = document.querySelector('.covers__slides');
    covers.scrollTo({
        left: 255,
        behavior: 'smooth'
    });

    const carousel = new SliderTestimonials ({
        carousel: '.testimonials',
        slides: '.testimonials__scroll',
        item: '.testimonials__item ',
        btnsNext: '[data-slide="next"]',
        btnsPrev: '[data-slide="prev"]'
    });
    carousel.render();

    const move = new SliderCover ({
        carousel: '.covers',
        slides: '.covers__slides',
        item: '.covers__item',
        btnsNext: '[data-slide="next"]',
        btnsPrev: '[data-slide="prev"]'
    });
    move.render();

    observer('.podcast-title');
    observer('.about');
    observer('.testimonials');
    observer('.content');
    observer('.pricing__body');
    observer('.blog__wrep');
    observer('.cta__gadget');
    // const options = {
    //     rootMargin: '-10px'
    // };
    // Создать наблюдателя
    // const observer = new IntersectionObserver(entries => {
    //     // перебор записей
    //     entries.forEach(entry => {
    //         let containerInner = entry.target.querySelectorAll('[data-animated]');
    //         if (entry.isIntersecting ) {
    //             containerInner.forEach(function(item) {
    //                 let setaDataAimated = item.dataset.animated;
    //                 item.classList.add(setaDataAimated);
    //             })
    //             return; // если класс добавлен, продолжать уже не надо
    //         }
    //         containerInner.forEach(function(item) {
    //             let setaDataAimated = item.dataset.animated;
    //             item.classList.remove(setaDataAimated);
    //         });
    //     });
    // }, options);

    // // Сообщить наблюдателю, какие элементы следует отслеживать
    // try {
    //     observer.observe(document.querySelector('.podcast-title'));
    // } catch (error) {}

});


let widthWidow = 0;
window.addEventListener('resize', (e) => {
    if (widthWidow !== e.target.outerWidth) {
        // делаем актуальный размер фона

        widthWidow = e.currentTarget.innerWidth;
        const carousel = new SliderTestimonials ({
            carousel: '.testimonials',
            slides: '.testimonials__scroll',
            item: '.testimonials__item ',
            btnsNext: '[data-slide="next"]',
            btnsPrev: '[data-slide="prev"]'
        })
        carousel.render();
    }
});
