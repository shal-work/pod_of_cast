// структура
//<div class="pictures-carousel">
//    <button data-slide="close"></button>
//    <div class="pictures-carousel__inner">
//       <div class="pictures-carousel__slides">
//            <div class="pictures-carousel__item">
//                <div class="pictures-carousel__block">
//                    <img class="pictures-carousel__img" src="./assets/img/holytrinity.jpg" alt="Троица">
//                </div>
//                <div class="paragraph pictures__text line-clamp">
//                   Поздравляю с Троицей! Здоровья и благополучия Вам!
//                </div>
//            </div>
//             . . .
//
//        </div>
//    </div>
//    <div class="pictures-carousel__header">
//        <div class="pictures-carousel__count"></div>
//   </div>
//    <a href="#" class="pictures-carousel__prev" data-slide="prev">
//        <span class="carousel-prev-icon">&lt;</span>
//    </a>
//    <a href="#" class="pictures-carousel__next" data-slide="next">
//        <span class="carousel-next-icon">&gt;</span>
//    </a>
//</div>

// const slider = new Slider(offset,'.pictures-carousel', '.pictures-carousel__slides', '.pictures-carousel__count');


export default class Slider {
    constructor(carousel, slides){
        this.carousel = document.querySelector(carousel);
        this.slides = this.carousel.querySelector(slides);
        this.item = this.slides.children; //__item
        this.btnsNext = this.carousel.querySelector('[data-slide="next"]');
        this.btnsPrev = this.carousel.querySelector('[data-slide="prev"]');
        this.slideIndex = 0;
    }

    showSlides(n) {
        debugger
        this.widthWindow = window.getComputedStyle(this.item[0]).width.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000;


        // this.slides.style.transform = `translateX(-${this.slideIndex * 100}%)`;
        this.slides.style.transform = `translateX(-${this.slideIndex * this.widthWindow}px)`;
    }

    plusSlides() {
        if (this.slideIndex == this.item.length - 1) {
            this.slideIndex = 0;
        } else {
            this.slideIndex++;
        }
        this.showSlides(this.slideIndex);
    }
    minusSlides() {
        if (this.slideIndex == 0) {
            this.slideIndex = this.item.length - 1;
        } else {
            this.slideIndex--;
        }
        this.showSlides(this.slideIndex);
    }

    init() {
        // for (let n = 0 ; n < this.item.length; n++) {
        //     this.item[n].style.left = 100 * n + '%';
        // }
        // this.slides.style.transform = `translateX(-${this.slideIndex * 100}%)`;
    }

    swipe() {
        let shiftX = 0, direction = 0;

        this.slides.addEventListener('touchstart', (event) => {
            shiftX = event.touches[0].clientX;
        }, {
            passive: true
        });

        this.slides.addEventListener('touchmove', (e) => {
            direction = (e.touches[0].clientX >= shiftX) ? 1 : -1; //влево -1, вправо +1
            if (direction < 0) {
                this.item[this.slideIndex].style.transform = `translateX(${e.touches[0].clientX - shiftX}px)`;
            } else {
                this.item[this.slideIndex].style.transform = `translateX(${e.touches[0].clientX - shiftX}px)`;
            }
        }, {
            passive: true
        });

        this.slides.addEventListener('touchend', () => {
            this.item[this.slideIndex].style.transform = `translateX(0)`;
            if (direction < 0) {
                this.plusSlides();
             } else {
                this.minusSlides();
            }
        }, {
            passive: true
        });
    }

    render() {
        this.init();

        this.btnsNext.addEventListener('click', (e) => {
            debugger
            e.preventDefault();
            this.plusSlides();
        });

        this.btnsPrev.addEventListener('click', (e) => {
            e.preventDefault();
            this.minusSlides();
        });
        this.swipe();
    }
}
