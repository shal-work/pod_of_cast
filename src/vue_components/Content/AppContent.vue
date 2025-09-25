<template>
    <section class="content">
 
        <h2 class="title-section content__title reset">Recent Episodes</h2>
        <h3 class="content__sub-title reset">Available on your favorite platform</h3>
        
        <div class="content__body">
            <div class="content__three-rays" data-animated="anima-rays">
                <svg class="svg">
                    <use xlink:href="@/assets/img/spriteFigure.svg#three-rays"></use>
                </svg>
            </div> 
            <AppContentCards :isSize12px="true"/>
        </div>
        <div class="content__control">
            <button class="btn btn_black content__browse-btn text-uppercase text-nobreak">
                BROWSE ALL EPISODES
            </button>
        </div>
        <div class="content__squiggle">
            <svg class="svg svg_stroke-black content__svg">
                <use xlink:href="@/assets/img/spriteFigure.svg#squiggle"></use>
            </svg>
       </div> 
    </section>
</template>

<script setup>

    import AppContentCards from './AppContentCards'


</script>

