<template>
    <section class="cta">
        <div class="cta__beta">
            BETA
        </div>
        <h3 class="title-section cta__title reset">
            Available now Pod of Cast App
        </h3>
        <h4 class="cta__sub-title reset">
            We just launched our podcast app!
        </h4>
        <div class="cta__control">
            <button class="cta__btn btn btn_black text-uppercase">DOWNLOAD NOW</button>
            <p class="cta__text reset">Content also available on:</p>
            <div class="cta__icons">
                <a href="#" class="icon" aria-label="google-podcast">
                    <svg class="icon__item" >
                        <use xlink:href="@/assets/img/spriteIco.svg#google-podcast"></use>
                    </svg>
                </a>
                <a href="#" class="icon" aria-label="spotify">
                    <svg class="icon__item"> 
                        <use xlink:href="@/assets/img/spriteIco.svg#spotify"></use>
                    </svg>
                </a>
                <a href="#" class="icon" aria-label="youtube">
                    <svg class="icon__item">
                        <use xlink:href="@/assets/img/spriteIco.svg#youtube"></use>
                    </svg>
                </a>
            </div>

            <div class="cta__three-rays">
                <svg class="cta__svg">
                    <use xlink:href="@/assets/img/spriteFigure.svg#three-rays"></use>
                </svg>
            </div>
        </div>
        <div class="cta__gadget">
            <div class="cta__picture">
                <div class="cta__rays-sm" data-animated = "anima-rays">
                    <svg class="cta__svg">
                        <use xlink:href="@/assets/img/spriteFigure.svg#rays"></use>
                    </svg>
                </div>
                <div class="cta__rays-md" data-animated = "anima-rays">
                    <svg class="cta__svg">
                        <use xlink:href="@/assets/img/spriteFigure.svg#rays"></use>
                    </svg>
                </div>
                <div class="cta__rays" data-animated = "anima-rays">
                    <svg class="cta__svg">
                        <use xlink:href="@/assets/img/spriteFigure.svg#rays"></use>
                    </svg>
                </div>
                <picture>
                    <source type="image/webp" srcset="@/assets/img/trending_295_518.webp" media="(max-width: 412px)">
                    <source type="image/png" srcset="@/assets/img/trending_295_518.webp" media="(max-width: 412px)">
                    <source type="image/webp" srcset="@/assets/img/trending_428_751.webp">
                    <img src="@/assets/img/trending_428_751.png" class="cta__img" alt="trending.png" width="428" height="751">
                </picture>  
            </div>
            <div class="cta__picture cta__play">
                <picture>
                    <source type="image/webp" srcset="@/assets/img/play_421_515.webp" media="(max-width: 412px)">
                    <source type="image/png" srcset="@/assets/img/play_421_515.png" media="(max-width: 412px)">
                    <source type="image/webp" srcset="@/assets/img/play_614_751.webp">
                    <img src="@/assets/img/play_614_751.png" class="cta__img" alt="play.png" width="614" height="751">
                </picture>  
                <div class="cta__tangle">
                    <svg class="cta__tangle-svg">
                        <use xlink:href="@/assets/img/spriteFigure.svg#tangle"></use>
                    </svg>
                </div>
            </div>
        </div>
    </section>

</template>



<script setup>

</script>