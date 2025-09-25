<template>
    <div class="womens-rights">
    
        <picture v-if="isContentImageSize">
            <source type="image/webp" srcset="@/assets/img/womens-rights_487.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/womens-rights_487.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/womens-rights_164.webp">
            <img class="covers-img" src="@/assets/img/womens-rights_164.png" alt="womens-rights" width="164" height="164">
        </picture>
            
        <picture v-if="isCovers">
            <source type="image/webp" srcset="@/assets/img/womens-rights_560.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/womens-rights_560.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/womens-rights_373.webp">
            <img class="covers-img" src="@/assets/img/womens-rights_373.png" alt="womens-rights" width="373" height="373" :class="{'covers-img_shadow': isShadow, 'covers-img_size': isDetailImageSize}">
        </picture>

        <picture v-if="isDetailImageSize">
            <source type="image/webp" srcset="@/assets/img/womens-rights_487.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/womens-rights_487.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/womens-rights_373.webp">
            <img class="covers-img" src="@/assets/img/womens-rights_373.png" alt="womens-rights" width="373" height="373" :class="{'covers-img_shadow': isShadow, 'covers-img_size': isDetailImageSize}">
        </picture>

        <div class="womens-rights__question1">
            <svg class="svg svg_vermillion svg_pos-abs">
                <use xlink:href="@/assets/img/spriteFigure.svg#question1"></use>
            </svg>
        </div>
        <div class="womens-rights__question2">
            <svg class="svg svg_vermillion svg_pos-abs">
                <use xlink:href="@/assets/img/spriteFigure.svg#question2"></use>
            </svg>
        </div>
        <div class="womens-rights__heart">
            <svg class="svg svg_pos-abs">
                <use xlink:href="@/assets/img/spriteFigure.svg#heart"></use>
            </svg>
        </div>
        <div class="womens-rights__crooked">
            <svg class="svg svg_pos-abs">
                <use xlink:href="@/assets/img/spriteFigure.svg#crooked-group"></use>
            </svg>
        </div>
        <div class="womens-rights__smiley">
            <svg class="svg svg_pos-abs">
                <use xlink:href="@/assets/img/spriteFigure.svg#smiley"></use>
            </svg>
        </div>
        <div class="womens-rights__blob-vermillion">
            <svg class="svg svg_vermillion svg_pos-abs">
                <use xlink:href="@/assets/img/spriteFigure.svg#blob"></use>
            </svg>
        </div>
        <div class="womens-rights__line-vermillion"></div>
        <div class="womens-rights__blob-black">
            <svg class="svg svg_black svg_pos-abs">
                <use xlink:href="@/assets/img/spriteFigure.svg#blob"></use>
            </svg>
        </div>
        <div class="womens-rights__line-black"></div>
        <div class="womens-rights__arc">
            <div class="womens-rights__arc-vermillion" :class="{'womens-rights__arc-vermillion_size': isContentImageSize, 'womens-rights__arc-vermillion_size': isDetailImageSize }" ></div>
            <div class="womens-rights__arc-blue" :class="{'womens-rights__arc-blue_size': isContentImageSize, 'womens-rights__arc-blue_size': isDetailImageSize}" ></div>
            <div class="womens-rights__arc-champagne" :class="{'womens-rights__arc-champagne_size': isContentImageSize, 'womens-rights__arc-champagne_size': isDetailImageSize}"></div>
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
    const isDetailImageSize = props.isDetailImageSize;
    const color = props.color;
    const isShadow = props.isShadow;
    const  isCovers = (isDetailImageSize || isContentImageSize) ? false : true;
</script>
