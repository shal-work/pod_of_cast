<template>
    <section class="latest-posts container">
        <div class="tabl-title latest-posts__blog">
            <h2 class="title-section reset" id="tabs-label">Latest Posts</h2>
            <div class="title-header latest-posts__decor-title ">
                <div class="latest-posts__three-rays">
                    <svg class="svg">
                        <use xlink:href="@/assets/img/spriteFigure.svg#three-rays"></use>
                    </svg>
                </div>
            </div>
        </div>   
        <div class="tablist" role="tablist" aria-labelledby="tabs-label">
            <button class="tablist__btn" role="tab" type="button" id="tab-all" aria-selected="true" aria-controls="tabpanel-all">All</button>
            <button class="tablist__btn" role="tab" type="button" id="tab-business" aria-selected="false" aria-controls="tabpanel-business" tabindex="-1">Business</button>
            <button class="tablist__btn" role="tab" type="button" id="tab-comedy" aria-selected="false" aria-controls="tabpanel-comedy" tabindex="-1">News</button>
            <button class="tablist__btn" role="tab" type="button" id="tab-education" aria-selected="false" aria-controls="tabpanel-education" tabindex="-1">Tips & Trick</button>
            <button class="tablist__btn" role="tab" type="button" id="tab-health" aria-selected="false" aria-controls="tabpanel-health" tabindex="-1">Podcast</button>
            <button class="tablist__btn" role="tab" type="button" id="tab-news" aria-selected="false" aria-controls="tabpanel-news" tabindex="-1">Productivity</button>
        </div>

        <div class="tabpanel " role="tabpanel" id="tabpanel-all" tabindex="0" aria-labelledby="tab-all">
            <AppBlogCards :quantity="4" isBlog="true"/>
        </div>
        <div class="tabpanel" role="tabpanel" id="tabpanel-business" tabindex="0" aria-labelledby="tab-business">

        </div>
        <div class="tabpanel" role="tabpanel" id="tabpanel-comedy" tabindex="0" aria-labelledby="tab-comedy">

        </div>
        <div class="tabpanel" role="tabpanel" id="tabpanel-education" tabindex="0" aria-labelledby="tab-education">
  
        </div>
        <div class="tabpanel" role="tabpanel" id="tabpanel-health" tabindex="0" aria-labelledby="tab-health">
 
        </div>
        <div class="tabpanel" role="tabpanel" id="tabpanel-news" tabindex="0" aria-labelledby="tab-news">

        </div>
         <div class="squiggle latest-posts__squiggle">
            <svg class="svg svg_stroke-vermillion squiggle__svg">
                <use xlink:href="@/assets/img/spriteFigure.svg#squiggle"></use>
            </svg>
        </div>
    </section>

</template>

<script setup>
    import  AppBlogCards from '@/vue_components/Blog/AppBlogCards.vue' 


</script>