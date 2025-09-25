<template>
    <section class="blog">
        <h2 class="title-section blog__title reset">Article and News</h2>
        <h3 class="blog__sub-title reset">News, tips, tricks and more</h3>
        <div class="blog__wrep">
            <div class="blog__sheaf" data-animated="anima-swing">
                <svg class="svg">
                    <use xlink:href="@/assets/img/spriteFigure.svg#sheaf"></use>
                </svg>
            </div>
            <div class="block-cards">
                <AppBlogCards :quantity="2"/>
            </div>
            <div class="blog__dinosaur">
                <svg class="svg">
                    <use xlink:href="@/assets/img/spriteFigure.svg#dinosaur"></use>
                </svg>
            </div>  
        </div>

        <div class="blog__button">
            <button class="blog__btn btn btn_black text-uppercase text-nobreak">
                BROWSE ALL
            </button>
        </div>
      
        <div class="squiggle blog__squiggle">
            <svg class="svg svg_stroke-vermillion squiggle__svg">
                <use xlink:href="@/assets/img/spriteFigure.svg#squiggle"></use>
            </svg>
        </div>

    </section>
</template>


<script setup>
    import AppBlogCards from './AppBlogCards.vue' 


</script>