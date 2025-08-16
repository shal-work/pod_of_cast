<template>
 
    <div class="quote">
        <svg class="quotation-marks">
            <use xlink:href="@/assets/img/spriteFigure.svg#quotation-marks"></use>
        </svg>
        <h2 class="quote__title reset">One of the best daily podcasts that covers every topic on Spotify.</h2>
        <div class="user">
            <div class="user__avatar">
                <picture>
                    <source type="image/webp" srcset="@/assets/img/avatar1.webp">
                    <img src="@/assets/img/avatar1.png" alt="avatar1" class="user__img" width="48" height="48">
                </picture> 
            </div>
            <p class="user__name reset text-capitalize">John Smith,</p>
            <div class="user__social">
                <div class="user__svg">
                    <svg class="svg">
                        <use xlink:href="@/assets/img/spriteIco.svg#spotify-color"></use>
                    </svg>
                </div>
                <p class="user__text reset text-capitalize">Social Community Manager</p>
            </div>
        </div>

        <div class="quote__blob anima-swing">
            <svg class="svg svg_black">
                <use xlink:href="@/assets/img/spriteFigure.svg#blob"></use>
            </svg>
        </div>
        <div class="quote__crooked">
            <svg class="svg svg_stroke-vermillion ">
                <use xlink:href="@/assets/img/spriteFigure.svg#crooked"></use>
            </svg>
        </div>        
    </div>

</template>

<script>

</script>
