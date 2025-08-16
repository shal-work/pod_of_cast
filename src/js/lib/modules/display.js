import $ from '../core';

// $.prototype.show = function() {
//     for(let i = 0; i < this.length; i++) {
//         if (!this[i].style) {
//             continue;
//         }
//         this[i].style.display = '';
//     }

//     return this;
// };
$.prototype.show = function(display) {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        // this[i].style.display = '';
        this[i].style.display = display || '';
    }

    return this;
};

$.prototype.hide = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = 'none';
    }

    return this;
};

// $.prototype.toggle = function() {
//     for(let i = 0; i < this.length; i++) {
//         if (!this[i].style) {
//             continue;
//         }

//         if (this[i].style.display === 'none') {
//             this[i].style.display = '';
//         } else {
//             this[i].style.display = 'none';
//         }
//     }

//     return this;
// };
$.prototype.toggle = function(display) {
    debugger
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        if (this[i].style.display === 'none') {
            this[i].style.display = display || '';
            // this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }
    }

    return this;
};
// toggle style overflow 
$.prototype.toggleOverflow = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        if (this[i].style.overflow === 'hidden') {
            this[i].style.overflow = '';
        } else {
            this[i].style.overflow = 'hidden';
        }
    }

    return this;
};
