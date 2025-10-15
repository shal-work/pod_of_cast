import $ from '../core';

// Реазизация
// $('.food-2 a').on('click',() => {
//     $('.modal-dialog').fadeIn(180);
// });
// $('button').on('click', function() {
//     $('div').eq(2).toggleClass('active');  
// });

$.prototype.on = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }
    return this;
};

$.prototype.off = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }
    return this;
};


$.prototype.click = function(handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click();
        }
    }
    return this;
};

//новые 15.10.2025, так как работает выше, после удаления артибута
$.prototype.toggleBooleanAttribute = function (attributeName) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(attributeName)) { //можно не проверять, работает
            if (this[i].getAttribute(attributeName) == 'false') {
                this[i].setAttribute(attributeName, true);
            } else {
                this[i].setAttribute(attributeName, false);
            }          
        }
    }
    return this;
};

$.prototype.toggleChangeAttribute = function (attributeName, value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(attributeName)) { //можно не проверять, работает
            this[i].setAttribute(attributeName, value);        
        }
    }
    return this;
};



