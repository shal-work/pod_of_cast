<template>
    <section class="latest-episode">
        <div class="tabl-title">
            <h3 class="title-section reset" id="tabs-label">Latest Episode</h3>
            <div class="latest-episode__decor-title">
                <div class="latest-episode__three-rays">
                    <svg class="svg">
                        <use xlink:href="@/assets/img/spriteFigure.svg#three-rays"></use>
                    </svg>
                </div>
            </div>            
        </div>
        <div class="tablist" role="tablist" aria-labelledby="tabs-label">
            <button class="tablist__btn" role="tab" type="button" id="tab-all" aria-selected="true" aria-controls="tabpanel-all">All</button>
            <button class="tablist__btn" role="tab" type="button" id="tab-business" aria-selected="false" aria-controls="tabpanel-business" tabindex="-1">Business</button>
            <button class="tablist__btn" role="tab" type="button" id="tab-comedy" aria-selected="false" aria-controls="tabpanel-comedy" tabindex="-1">Comedy</button>
            <button class="tablist__btn" role="tab" type="button" id="tab-education" aria-selected="false" aria-controls="tabpanel-education" tabindex="-1">Education</button>
            <button class="tablist__btn" role="tab" type="button" id="tab-health" aria-selected="false" aria-controls="tabpanel-health" tabindex="-1">Health</button>
            <button class="tablist__btn" role="tab" type="button" id="tab-news" aria-selected="false" aria-controls="tabpanel-news" tabindex="-1">News</button>
            <button class="tablist__btn" role="tab" type="button" id="tab-tech" aria-selected="false" aria-controls="tabpanel-tech" tabindex="-1">Tech</button>
        </div>
        <div class="tabpanel" role="tabpanel" id="tabpanel-all" tabindex="0" aria-labelledby="tab-all">
            <AppContentCards :isSize12px="true"/>
        </div>
        <div class="tabpanel" role="tabpanel" id="tabpanel-business" tabindex="0" aria-labelledby="tab-business">
            <!-- <AppContentCards/> -->
        </div>
        <div class="tabpanel" role="tabpanel" id="tabpanel-comedy" tabindex="0" aria-labelledby="tab-comedy">
            <!-- <AppContentCards/> -->
        </div>
        <div class="tabpanel" role="tabpanel" id="tabpanel-education" tabindex="0" aria-labelledby="tab-education">
            <!-- <AppContentCards/> -->
        </div>
        <div class="tabpanel" role="tabpanel" id="tabpanel-health" tabindex="0" aria-labelledby="tab-health">
            <!-- <AppContentCards/> -->
        </div>
        <div class="tabpanel" role="tabpanel" id="tabpanel-news" tabindex="0" aria-labelledby="tab-news">
            <!-- <AppContentCards/> -->
        </div>
        <div class="tabpanel" role="tabpanel" id="tabpanel-tech" tabindex="0" aria-labelledby="tab-tech">
            <!-- <AppContentCards/> -->
        </div>

        <div class=" squiggle latest-episode__squiggle">
            <svg class="svg svg_stroke-vermillion squiggle__svg">
                <use xlink:href="@/assets/img/spriteFigure.svg#squiggle"></use>
            </svg>
       </div> 
        <div class="latest-episode__dinosaur">
            <svg class="svg latest-episode__svg">
                <use xlink:href="img/spriteFigure.a429bb3a.svg#dinosaur-color"></use>
            </svg>
        </div>        
    </section>
</template>

<script setup>
    import AppContentCards from '@/vue_components/Content/AppContentCards.vue' 

</script>
