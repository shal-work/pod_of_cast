<template>
    <section class="about">
        <h2 class="title-section about__title reset">
            Talk. Listen. Get inspired by every minute of it.
        </h2>
        <div class="about__block">
            <div class="about__item">
                <div class="about__picture" data-animated = "anima-about">
                    <picture>
                        <source type="image/webp" srcset="@/assets/img/illustration01_413.webp"  media="(max-width: 412px)">
                        <source type="image/png" srcset="@/assets/img/illustration01_413.png" media="(max-width: 412px)">                        
                        <source type="image/webp" srcset="@/assets/img/illustration01.webp">
                        <img src="@/assets/img/illustration01.png" alt="illustration01" class="about__img" width="275" height="275">
                    </picture> 
                </div>
                <p class="about__text reset">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
            </div>

            <div class="about__item">
                <div class="about__picture" data-animated = "anima-about">
                    <picture>
                        <source type="image/webp" srcset="@/assets/img/illustration02_413.webp"  media="(max-width: 412px)">
                        <source type="image/png" srcset="@/assets/img/illustration02_413.png" media="(max-width: 412px)">
                        <source type="image/webp" srcset="@/assets/img/illustration02.webp">
                        <img src="@/assets/img/illustration02.png" alt="illustration02" class="about__img" width="275" height="275">
                    </picture>                     
                </div>
                <p class="about__text reset">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
            </div>
        </div>
        <div class="container">
            <AppQuote/>
        </div>
        <div class="squiggle about__squiggle">
            <svg class="svg svg_stroke-black squiggle__svg">
                <use xlink:href="@/assets/img/spriteFigure.svg#squiggle"></use>
            </svg>
       </div>
    </section>

</template>

<script setup>
    import AppQuote  from '@/vue_components/Quote/AppQuote.vue'
    
</script>
