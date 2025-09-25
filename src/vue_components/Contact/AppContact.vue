<template>
    <section class="contact">
        <div class="contact__block">
            <h2 class="title-section contact__title reset">Get in touch</h2>
            <div class="contact__pila">
                <svg class="svg">
                    <use xlink:href="@/assets/img/spriteFigure.svg#pila"></use>
                </svg>
            </div> 
            <h3 class="contact__sub-title reset">Send your message to us</h3> 
        </div> 

       
   
        <form class="form contact__form" action="#" enctype="multipart/form-data" method="POST">
            <div class="form__row">
                <div class="form__control">
                    <label class="form__label" for="first-name">Full name</label>
                    <input class="form__input" name="first-name" id="first-name" required type="text" placeholder="Porter Sev">
                </div>
                <div class="form__control">
                    <label class="form__label" for="email">Email</label>
                    <input class="form__input" name="email" id="email" required type="text" placeholder="johndoe@gmail.com">
                </div>
            </div>
            <div class="form__row">
                <div class="form__control">
                    <label class="form__label" for="phone">Phone</label>
                    <input class="form__input" name="phone" id="phone" required type="number" placeholder="Phone">
                </div>
                <div class="form__control">
                    <label class="form__label" for="subject">Subject</label>
                    <input class="form__input" name="subject" id="subject" required type="text" placeholder="Subject...">
                </div>
            </div>
            <div class="form__message">
                <label class="form__label" for="message">Message</label>
                <textarea class="form__input form__input_textarea" id="message" name="message" autocomplete="on" placeholder="Your message goes here..."></textarea>
            </div>
            <div class="contact__control">
                <p class="contact__footnote reset">required</p>
                <button class="contact__btn btn btn_black text-uppercase text-nobreak" id="submit" type="submit">Send Massage</button>
                <p class="contact__text reset">
                    Viverra at port accumsan.
                    <span>
                        <a href="#" class="contact__underline">Orci non</a>
                    </span>
                </p>
            </div>
        </form>
        <div class="contact__crooked">
            <svg class="svg svg_stroke-vermillion">
                <use xlink:href="@/assets/img/spriteFigure.svg#crooked"></use>
            </svg>
        </div>
        <div class="contact__cubi">
            <svg class="svg contact__decor">
                <use xlink:href="@/assets/img/spriteFigure.svg#cubi"></use>
            </svg>
        </div>
        <div class="squiggle contact__squiggle">
            <svg class="svg svg_stroke-vermillion squiggle__svg ">
                <use xlink:href="@/assets/img/spriteFigure.svg#squiggle"></use>
            </svg>
        </div>
    </section>

</template>