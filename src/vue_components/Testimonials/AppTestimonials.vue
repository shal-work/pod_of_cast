<template>
    <section class="testimonials">
        <h2 class="title-section testimonials__title reset">What our listeners say</h2>
        <p class="testimonials__text testimonials__text_paragraph  reset">Their experience throughout every platform</p>
        <div class="testimonials__scroll">
            <div class="testimonials__item ">
                <svg class="quotation-marks">
                    <use xlink:href="@/assets/img/spriteFigure.svg#quotation-marks"></use>
                </svg>
                <p class="testimonials__text reset">Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.</p>
                <div class="user user_testimonials">
                    <div class="user__avatar">
                        <picture>
                            <source type="image/webp" srcset="@/assets/img/avatar2.webp">
                            <img src="@/assets/img/avatar2.png" alt="avatar2" class="user__img" width="48" height="48">
                        </picture>                         
                    </div>
                    <p class="user__name reset text-capitalize">Luna lovegood,</p>
                    <div class="user__social">
                        <div class="user__svg">
                            <svg class="svg">
                                <use xlink:href="@/assets/img/spriteIco.svg#spotify-color"></use>
                            </svg>
                        </div>
                        <p class="user__text reset text-capitalize">Spotify</p>
                    </div>
                </div>
            </div>
            <div class="testimonials__item">
                <svg class="quotation-marks">
                    <use xlink:href="@/assets/img/spriteFigure.svg#quotation-marks"></use>
                </svg>
                <p class="testimonials__text reset">Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.</p>
                <div class="user user_testimonials">
                    <div class="user__avatar">
                        <picture>
                            <source type="image/webp" srcset="@/assets/img/avatar3.webp">
                            <img src="@/assets/img/avatar3.png" alt="avatar3" class="user__img" width="48" height="48">
                        </picture>                           
                    </div>
                    <p class="user__name reset text-capitalize">Emily Blunt,</p>
                    <div class="user__social">
                        <div class="user__svg">
                            <svg class="svg">
                                <use xlink:href="@/assets/img/spriteIco.svg#google-podcast-color"></use>
                            </svg>
                        </div>
                        <p class="user__text reset text-capitalize">Google Podcast</p>
                    </div>
                </div>
            </div>
            <div class="testimonials__item">
                <svg class="quotation-marks">
                    <use xlink:href="@/assets/img/spriteFigure.svg#quotation-marks"></use>
                </svg>
                <p class="testimonials__text reset">Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.</p>
                <div class="user user_testimonials">
                    <div class="user__avatar">
                        <picture>
                            <source type="image/webp" srcset="@/assets/img/avatar4.webp">
                            <img src="@/assets/img/avatar4.png" alt="avatar4" class="user__img" width="48" height="48">
                        </picture>                          
                    </div>
                    <p class="user__name reset text-capitalize">Mia Winters,</p>
                    <div class="user__social">
                        <div class="user__svg">
                            <svg class="svg">
                                <use xlink:href="@/assets/img/spriteIco.svg#spotify-color"></use>
                            </svg>
                        </div>
                        <p class="user__text reset text-capitalize">Apple Podcast</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="control">
            <button class="arrow arrow_left arrow-default" data-slide="prev" aria-label="prev">
                <svg class="svg svg_stroke-vermillion">
                    <use xlink:href="@/assets/img/spriteFigure.svg#arrow"></use>
                </svg>
            </button>
            <button class="arrow arrow_right" data-slide="next" aria-label="next">
                <svg class="svg svg_stroke-vermillion">
                    <use xlink:href="@/assets/img/spriteFigure.svg#arrow"></use>
                </svg>
            </button>
        </div>
        <div class="testimonials__rays" data-animated = "anima-rays"> 
            <svg class="svg">
                <use xlink:href="@/assets/img/spriteFigure.svg#rays"></use>
            </svg>
        </div>  
        <div class="squiggle testimonials__squiggle">
            <svg class="svg svg_stroke-black squiggle__svg">
                <use xlink:href="@/assets/img/spriteFigure.svg#squiggle"></use>
            </svg>
        </div>
    </section>
</template>

<script setup>
 

</script>
