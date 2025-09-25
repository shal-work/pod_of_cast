import SliderTestimonials from '../components/slider-testimonials';
import SliderCover from '../components/slider-covers';
import observerVue from '../components/observer-vue';

window.addEventListener('DOMContentLoaded', (e) => {
    $('.header__burger').on('click', () => {       
        $('.header').toggleClass("fadeIn-open");
        // $('.page').toggleClass('none-scroll');
        $('body').toggleOverflow();
    });

    $('.menu__link').on('click', () => {
        $('.menu__more').removeClass("open");
        $('.header').removeClass("fadeIn-open");
        $('body').offOverflow();
    });
    $('.header__btn').on('click', () => {
        $('.menu__more').removeClass("open");
        $('.header').removeClass("fadeIn-open");
        $('body').offOverflow();
    });

    $('.menu__btn').on('click', () => {
        $('.menu__more').toggleClass("open");
    });
    

    //страница Home 
    try {
        const carousel = new SliderTestimonials ({
            carousel: '.testimonials',
            slides: '.testimonials__scroll',
            item: '.testimonials__item ',
            btnsNext: '[data-slide="next"]',
            btnsPrev: '[data-slide="prev"]'
        });
        carousel.render();
    } catch (error) {}
    try {
        const move = new SliderCover ({
            carousel: '.covers',
            slides: '.covers__slides',
            item: '.covers__item',
            btnsNext: '[data-slide="next"]',
            btnsPrev: '[data-slide="prev"]'
        });
        move.render();
    } catch (error) {}



    //страница - About
    try {
        const carouselSponsorAbout = new SliderTestimonials ({
            carousel: '.sponsor',
            slides: '.sponsor__scroll',
            item: '.sponsor__item ',
            btnsNext: '[data-slide="next"]',
            btnsPrev: '[data-slide="prev"]'
        });
        carouselSponsorAbout.render();

    } catch (error) {}
    
    observerVue('.podcast-title');
    observerVue('.about');
    observerVue('.testimonials');
    observerVue('.content');
    observerVue('.pricing__body');
    observerVue('.blog__wrep');
    observerVue('.cta__gadget');
    observerVue('.perplexed');
    observerVue('.quote');

    $('.card-link').on('click', () => {
        location.reload();
    });

});


let widthWidow = 0;
window.addEventListener('resize', (e) => {
    if (widthWidow !== e.target.outerWidth) {
        // делаем актуальный размер
        widthWidow = e.currentTarget.innerWidth;
        try {
            const carousel = new SliderTestimonials ({
                carousel: '.testimonials',
                slides: '.testimonials__scroll',
                item: '.testimonials__item ',
                btnsNext: '[data-slide="next"]',
                btnsPrev: '[data-slide="prev"]'
            })
            carousel.render();
        } catch (error) { }
        try {
            const carouselSponsorAbout = new SliderTestimonials ({
                carousel: '.sponsor',
                slides: '.sponsor__scroll',
                item: '.sponsor__item ',
                btnsNext: '[data-slide="next"]',
                btnsPrev: '[data-slide="prev"]'
            });
            carouselSponsorAbout.render();
        } catch (error) { }
    }
});
