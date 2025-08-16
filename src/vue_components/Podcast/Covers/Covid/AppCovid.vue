<template>
    <div class="covid">
        <picture v-if="!isNewImageSize">
            <source type="image/webp" srcset="@/assets/img/covid_560.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/covid_560.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/covid_373.webp">
            <img class="covers-img" src="@/assets/img/covid_373.png" alt="womens-rights" width="373" height="373">
        </picture>    
        <picture v-else>
            <source type="image/webp" srcset="@/assets/img/covid_487.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/covid_487.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/covid_164.webp">
            <img class="covers-img" src="@/assets/img/covid_164.png" alt="womens-rights" width="164" height="164">
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
        <AppPlatformIco :isSize12px="isSize12px" :color="color"/>
    </div>
            
</template>

<script setup>
    import AppPlatformIco  from '@/vue_components/Podcast/Covers/PlatformIco/AppPlatformIco.vue'
    // const props = defineProps( {
    //     isSize12px: Boolean,
    //     isNewImageSize: Boolean,
    //     color: String
    // });
    const props = defineProps( {
        isSize12px: { type: Boolean, default: false },
        isNewImageSize: { type: Boolean, default: false },
        color: String
    });
    const isSize12px = props.isSize12px;
    const isNewImageSize = props.isNewImageSize;
    // const color = "svg__fill-black";
    const color = props.color;

</script>
