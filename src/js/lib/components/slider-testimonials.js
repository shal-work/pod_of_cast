'use strict'

const ARROW_DEFAULT = 'arrow-default';
const ARROW_HIDE = 'arrow_hide';


export default class SliderTestimonials {
    
	constructor({ carousel = '', slides = '', item = '', btnsNext = '', btnsPrev = '' } = {}) {
		this.carousel = document.querySelector(carousel);
		this.slides = this.carousel.querySelector(slides); 
		if (item !== '') this.item = this.carousel.querySelectorAll(item);
		if (btnsNext !== '') this.btnsNext = this.carousel.querySelector(btnsNext);
		if (btnsPrev !== '') this.btnsPrev = this.carousel.querySelector(btnsPrev);

		this.offset = 0;
		this.slideIndex = 0;
		this.quantityInWindow = 0;
		this.widthWindow = 0;
		this.width = 0;
		this.endIndex = 0;
		this.direction = 'next';
		this.marginRight = 0;
	}

	reset() {
  		this.offset = new WebKitCSSMatrix(window.getComputedStyle(this.slides).transform).m41;
		this.direction = 'next';
		
		this.quantityInWindow = Math.floor(window.innerWidth / this.item[0].offsetWidth);
		this.marginRight = window.getComputedStyle(this.item[0]).marginRight.split('.')[0].replace(/\D/g, '');
	    this.width = +this.item[0].offsetWidth + +this.marginRight;
		this.slides.style.transform = '';
		this.endIndex = this.item.length - this.quantityInWindow;
		// debugger

		this.btnsPrev.classList.remove(ARROW_DEFAULT );
		this.btnsPrev.classList.remove(ARROW_HIDE);
		this.btnsNext.classList.remove(ARROW_HIDE);

        if (this.endIndex <= 0) {
            if (this.btnsPrev !== '') {this.btnsPrev.classList.add(ARROW_HIDE)};
            if (this.btnsNext !== '') {this.btnsNext.classList.add(ARROW_HIDE)};
        } else {
		    if (this.btnsPrev !== '') {this.btnsPrev.classList.add(ARROW_DEFAULT)};
        }
	}
	swipe() {
		let shiftX = 0;

		this.slides.addEventListener('mousedown', (event) => {
			shiftX = event.clientX;
		});
		this.slides.addEventListener('mouseup', (event) => {
			this.direction = (event.clientX >= shiftX) ? 'prev' : 'next';
			let diffPos = Math.abs(shiftX - event.clientX);
			if (diffPos > this.width/3) {
				this.move();
			}
		});
		this.slides.addEventListener('touchstart', (event) => {
			shiftX = event.touches[0].clientX;
        }, {
            passive: true
        });
		this.slides.addEventListener('touchmove', (event) => {
			this.slides.style.transform = `translateX(${event.touches[0].clientX - shiftX + this.offset}px)`;
		}, {
			passive: true
		});
		this.slides.addEventListener('touchend', (event) => {
			this.direction = (event.changedTouches[0].clientX >= shiftX) ? 'prev' : 'next';
			let diffPos = Math.abs(event.changedTouches[0].clientX - shiftX);
			this.slides.style.transform =  `translateX(${this.offset}px)`;
			if (diffPos > this.width/3) {
				this.move();
			}
		}, {
			passive: true
		});
	}
	move() {
		if (this.direction === 'next') {
			this.slideIndex++;
		} else {
			this.slideIndex--;
		}
		if (this.slideIndex > this.endIndex) {
			this.slideIndex = this.endIndex;
			this.updateControl();
			return
		} if (this.slideIndex < 0) {
			this.slideIndex = 0;
			return
		}
		this.btnsPrev.classList.remove(ARROW_DEFAULT );
		this.btnsNext.classList.remove(ARROW_DEFAULT);
		let step = this.direction === 'next' ? -(+this.width) : (+this.width);
		this.offset += step;

		this.slides.style.transform = `translateX(${this.offset}px)`;
		this.updateControl();
	}
	updateControl() {
		this.btnsPrev.classList.remove(ARROW_DEFAULT);
		this.btnsNext.classList.remove(ARROW_DEFAULT);
		if (this.slideIndex >= this.endIndex) {
			this.btnsNext.classList.add(ARROW_DEFAULT);
		}
		if (this.slideIndex <= 0) {
			this.btnsPrev.classList.add(ARROW_DEFAULT);
		}
	}
	clickNext() {
		if(this.btnsNext) {
			this.btnsNext.addEventListener('click', (e) => {
				this.direction = e.target.dataset.slide; //если data-slide
				this.move();
			})
		}
	}
	clickPrev() {
		if(this.btnsPrev){
			this.btnsPrev.addEventListener('click', (e) => {
				this.direction = e.target.dataset.slide; //если data-slide
				this.move();
			});
		}
	}
	render() {
		this.reset();
		this.clickNext();
		this.clickPrev();
		this.swipe();
	}
}
