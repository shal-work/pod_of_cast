<template>
    <div class="perplexed">

        <picture v-if="isContentImageSize">
            <source type="image/webp" srcset="@/assets/img/perplexed-mind_487.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/perplexed-mind_487.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/perplexed-mind_164.webp">
            <img class="covers-img" src="@/assets/img/perplexed-mind_164.png" alt="perplexed-mind" width="164" height="164">
        </picture>
        <picture v-if="isCovers">
            <source type="image/webp" srcset="@/assets/img/perplexed-mind_560.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/perplexed-mind_560.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/perplexed-mind_373.webp">
            <img class="covers-img" src="@/assets/img/perplexed-mind_373.png" alt="perplexed-mind" width="373" height="373" :class="{'covers-img_shadow': isShadow, 'covers-img_size': isDetailImageSize}">
        </picture>
        <picture v-if="isDetailImageSize">
            <source type="image/webp" srcset="@/assets/img/perplexed-mind_487.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/perplexed-mind_487.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/perplexed-mind_373.webp">
            <img class="covers-img" src="@/assets/img/perplexed-mind_373.png" alt="perplexed-mind" width="373" height="373" :class="{'covers-img_shadow': isShadow, 'covers-img_size': isDetailImageSize}">
        </picture>
  
        <div class="perplexed__ellipse" data-animated="anima-swing-rotation">
            <svg class="svg svg_vermillion">
                <use xlink:href="@/assets/img/spriteFigure.svg#ellipse"></use>
            </svg>
        </div>
        <div class="perplexed__crooked">
            <svg class="svg svg_stroke-pewter-blue" >
                <use xlink:href="@/assets/img/spriteFigure.svg#crooked"></use>
            </svg>
        </div>
        <div class="perplexed__blob">
            <svg class="svg svg_black">
                <use xlink:href="@/assets/img/spriteFigure.svg#blob"></use>
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
        color: String,
        isShadow: { type: Boolean, default: false },
        isDetailImageSize: { type: Boolean, default: false },
    });
    const isSize12px = props.isSize12px;
    const isSize30px = props.isSize30px;
    const isContentImageSize = props.isContentImageSize;
    const color = props.color;
    const isShadow = props.isShadow;
    const isDetailImageSize = props.isDetailImageSize;
    const  isCovers = (isDetailImageSize || isContentImageSize) ? false : true;
</script>
