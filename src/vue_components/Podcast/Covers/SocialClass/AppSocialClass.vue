<template>
    <div class="social">
   
        <picture v-if="isContentImageSize">
            <source type="image/webp" srcset="@/assets/img/social-class_487.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/social-class_487.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/social-class_164.webp">
            <img class="covers-img" src="@/assets/img/social-class_164.png" alt="social-class" width="164" height="164">
        </picture>  
        <picture v-if="isCovers">
            <source type="image/webp" srcset="@/assets/img/social-class_560.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/social-class_560.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/social-class_373.webp">
            <img class="covers-img" src="@/assets/img/social-class_373.png" alt="social-class" width="373" height="373" :class="{'covers-img_shadow': isShadow, 'covers-img_size': isDetailImageSize}">
        </picture> 
        <picture v-if="isDetailImageSize">
            <source type="image/webp" srcset="@/assets/img/social-class_487.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/social-class_487.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/social-class_373.webp">
            <img class="covers-img" src="@/assets/img/social-class_373.png" alt="social-class" width="373" height="373" :class="{'covers-img_shadow': isShadow, 'covers-img_size': isDetailImageSize}">
        </picture>           
        <div class="social__star-1">
            <svg class="svg svg_stroke-pewter-blue">
                <use xlink:href="@/assets/img/spriteFigure.svg#star"></use>
            </svg>
        </div>
        <div class="social__star-2">
            <svg class="svg svg_vermillion">
                <use xlink:href="@/assets/img/spriteFigure.svg#star"></use>
            </svg>
        </div>
        <div class="social__star-3">
            <svg class="svg svg_pewter-blue">
                <use xlink:href="@/assets/img/spriteFigure.svg#star"></use>
            </svg>
        </div>
        <div class="social__curve-white-top">
            <svg class="svg svg_stroke-champagne">
                <use xlink:href="@/assets/img/spriteFigure.svg#curve-white-top"></use>
            </svg>
        </div>
        <div class="social__curve-white-bottom">
            <svg class="svg svg_stroke-champagne">
                <use xlink:href="@/assets/img/spriteFigure.svg#curve-white-bottom"></use>
            </svg>
        </div>
        <div class="social__ellipse">
            <svg class="svg svg_vermillion">
                <use xlink:href="@/assets/img/spriteFigure.svg#ellipse"></use>
            </svg>
        </div>
        <div class="social__blob">
            <svg class="svg svg_black">
                <use xlink:href="@/assets/img/spriteFigure.svg#blob"></use>
            </svg>
        </div>
        <div class="social__curve-short1">
            <svg class="svg svg_stroke-black ">
                <use xlink:href="@/assets/img/spriteFigure.svg#curve-short1"></use>
            </svg>
        </div>
        <div class="social__curve-short2">
            <svg class="svg svg_stroke-black ">
                <use xlink:href="@/assets/img/spriteFigure.svg#curve-short2"></use>
            </svg>
        </div>
        <div class="social__curve-long1">
            <svg class="svg svg_stroke-black">
                <use xlink:href="@/assets/img/spriteFigure.svg#curve-long1"></use>
            </svg>
        </div>
        <div class="social__curve-long2">
            <svg class="svg svg_stroke-black">
                <use xlink:href="@/assets/img/spriteFigure.svg#curve-long2"></use>
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
        isShadow: { type: Boolean, default: false },
        isContentImageSize: { type: Boolean, default: false },
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
