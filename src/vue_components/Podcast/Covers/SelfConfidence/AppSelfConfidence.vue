<template>
    <div class="self">
         <picture v-if="!isNewImageSize">
            <source type="image/webp" srcset="@/assets/img/self–confidence_560.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/self–confidence_560.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/self–confidence_373.webp">
            <img class="covers-img" src="@/assets/img/self–confidence_373.png" alt="self–confidence" width="373" height="373">
        </picture>      
        <picture v-else>
            <source type="image/webp" srcset="@/assets/img/self–confidence_487.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/self–confidence_487.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/self–confidence_164.webp">
            <img class="covers-img" src="@/assets/img/self–confidence_164.png" alt="self–confidence" width="164" height="164">
        </picture>      
        <div class="self__crooked">
            <svg class="svg svg_stroke-champagne">
                <use xlink:href="@/assets/img/spriteFigure.svg#crooked"></use>
            </svg>
        </div>
        <div class="self__group2">
            <svg class="svg svg_stroke-vermillion">
                <use xlink:href="@/assets/img/spriteFigure.svg#group2"></use>
            </svg>
        </div>
        <div class="self__group3">
            <svg class="svg svg_stroke-pewter-blue">
                <use xlink:href="@/assets/img/spriteFigure.svg#group3s"></use>
            </svg>
        </div>
        <div class="self__blob">
            <svg class="svg svg_black">
                <use xlink:href="@/assets/img/spriteFigure.svg#blob"></use>
            </svg>
        </div>
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
