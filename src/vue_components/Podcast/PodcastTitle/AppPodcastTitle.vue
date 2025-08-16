<template> 
    <div class="podcast-title">
        <div class="podcast-title__decor decor-left">
            <!-- <div class="podcast-title__crooked"></div> -->
            <div class="podcast-title__crooked">
                <svg class="svg svg_black">
                    <use xlink:href="@/assets/img/spriteFigure.svg#crooked"></use>
                </svg>
            </div>
            <!-- <div class="podcast-title__blob-vermillion"></div> -->
            <div class="podcast-title__blob">
                <svg class="svg  svg_vermillion">
                    <use xlink:href="@/assets/img/spriteFigure.svg#blob"></use>
                </svg>
            </div>
        </div>
        <div class="podcast-title__content">
            <h2 class="podcast-title__title reset">Your Daily
                <span class="podcast-title__title-backlight"> Podcast </span>
            </h2>
            <p class="podcast-title__text">
                We cover all kinds of categories and a weekly special guest.
            </p>
            <button class="podcast-title__btn btn btn_black text-uppercase text-nobreak">
                Subscribe
            </button>
        </div>
        <div class="podcast-title__decor decor-right">
            <div class="podcast-title__decor-block">
                <div class="podcast-title__star-blue"  data-animated = "anima-swing">
                    <svg class="svg svg_pewter-blue">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
                <div class="podcast-title__star-vermillion" data-animated = "anima-swing">
                    <svg class="svg svg_vermillion">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
                <div class="podcast-title__star-black" data-animated = "anima-swing">
                    <svg class="svg svg_black">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>  
</template>
