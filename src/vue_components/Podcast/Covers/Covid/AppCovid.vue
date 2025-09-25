<template>
    <div class="covid">
  
        <picture v-if="isContentImageSize">
            <source type="image/webp" srcset="@/assets/img/covid_487.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/covid_487.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/covid_164.webp">
            <img class="covers-img" src="@/assets/img/covid_164.png" alt="womens-rights" width="164" height="164">
        </picture>    
        <picture v-if="isCovers">
            <source type="image/webp" srcset="@/assets/img/covid_560.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/covid_560.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/covid_373.webp">
            <img class="covers-img" src="@/assets/img/covid_373.png" alt="womens-rights" width="373" height="373" :class="{'covers-img_shadow': isShadow, 'covers-img_size': isDetailImageSize}">
        </picture>  
        <picture v-if="isDetailImageSize">
            <source type="image/webp" srcset="@/assets/img/covid_487.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/covid_487.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/covid_373.webp">
            <img class="covers-img" src="@/assets/img/covid_373.png" alt="womens-rights" width="373" height="373" :class="{'covers-img_shadow': isShadow, 'covers-img_size': isDetailImageSize}">
        </picture>  
        <div class="covid__covid1">
            <svg class="svg">
                <use xlink:href="@/assets/img/spriteFigure.svg#covid-1"></use>
            </svg>
        </div>
        <div class="covid__covid2">
            <svg class="svg">
                <use xlink:href="@/assets/img/spriteFigure.svg#covid-2"></use>
            </svg>
        </div>
        <div class="covid__covid3">
            <svg class="svg">
                <use xlink:href="@/assets/img/spriteFigure.svg#covid-3"></use>
            </svg>
        </div>
        <AppPlatformIco :isSize12px="isSize12px" :isSize30px="isSize30px" :color="color"/>
    </div>
            
</template>

<script setup>
    import AppPlatformIco  from '@/vue_components/Podcast/Covers/PlatformIco/AppPlatformIco.vue'
    const props = defineProps( {
        isSize12px: { type: Boolean, default: false },
        isSize30px: { type: Boolean, default: false },
        isContentImageSize: { type: Boolean, default: false },
        isShadow: { type: Boolean, default: false },
        isDetailImageSize: { type: Boolean, default: false },
        color: String
    });
    const isSize12px = props.isSize12px;
    const isSize30px = props.isSize30px;
    const isContentImageSize = props.isContentImageSize;
    const color = props.color;
    const isShadow = props.isShadow;
    const isDetailImageSize = props.isDetailImageSize;
    const  isCovers = (isDetailImageSize || isContentImageSize) ? false : true;
</script>
