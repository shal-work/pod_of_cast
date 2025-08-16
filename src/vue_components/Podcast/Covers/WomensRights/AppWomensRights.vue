<template>
    <div class="rights">
        <picture v-if="!isNewImageSize">
            <source type="image/webp" srcset="@/assets/img/womens-rights_560.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/womens-rights_560.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/womens-rights_373.webp">
            <img class="covers-img" src="@/assets/img/womens-rights_373.png" alt="womens-rights" width="373" height="373">
        </picture>    
        <picture v-else>
            <source type="image/webp" srcset="@/assets/img/womens-rights_487.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/womens-rights_487.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/womens-rights_164.webp">
            <img class="covers-img" src="@/assets/img/womens-rights_164.png" alt="womens-rights" width="164" height="164">
        </picture>    

        <div class="rights__question1">
            <svg class="svg svg_vermillion">
                <use xlink:href="@/assets/img/spriteFigure.svg#question1"></use>
            </svg>
        </div>
        <div class="rights__question2">
            <svg class="svg svg_vermillion">
                <use xlink:href="@/assets/img/spriteFigure.svg#question2"></use>
            </svg>
        </div>
            <div class="rights__heart">
            <svg class="svg">
                <use xlink:href="@/assets/img/spriteFigure.svg#heart"></use>
            </svg>
        </div>
        <div class="rights__crooked">
            <svg class="svg">
                <use xlink:href="@/assets/img/spriteFigure.svg#crooked-group"></use>
            </svg>
        </div>
            <div class="rights__smiley">
            <svg class="svg">
                <use xlink:href="@/assets/img/spriteFigure.svg#smiley"></use>
            </svg>
        </div>
        <div class="rights__blob-vermillion">
            <svg class="svg svg_vermillion">
                <use xlink:href="@/assets/img/spriteFigure.svg#blob"></use>
            </svg>
        </div>
        <div class="rights__line-vermillion"></div>
        <div class="rights__blob-black">
            <svg class="svg svg_black">
                <use xlink:href="@/assets/img/spriteFigure.svg#blob"></use>
            </svg>
        </div>
        <div class="rights__line-black"></div>
        <div class="rights__arc-vermillion"></div>
        <div class="rights__arc-blue"></div>
        <div class="rights__arc-champagne"></div>
        <AppPlatformIco :isSize12px="isSize12px" :color="color"/>
    </div>
            
</template>

<script setup>
    import AppPlatformIco  from '@/vue_components/Podcast/Covers/PlatformIco/AppPlatformIco.vue'
    const props = defineProps( {
        isSize12px: Boolean,
        isNewImageSize: Boolean,
        color: String
    });
    const isSize12px = props.isSize12px;
    const isNewImageSize = props.isNewImageSize;
    // const color = "svg__fill-black";
    const color = props.color;
</script>
