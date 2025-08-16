<template>
    <div class="perplexed">
        <picture v-if="!isNewImageSize">
            <source type="image/webp" srcset="@/assets/img/perplexed-mind_560.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/perplexed-mind_560.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/perplexed-mind_373.webp">
            <img class="covers-img" src="@/assets/img/perplexed-mind_373.png" alt="perplexed-mind" width="373" height="373">
        </picture>
        <picture v-else>
            <source type="image/webp" srcset="@/assets/img/perplexed-mind_487.webp"  media="(max-width: 412px)">
            <source type="image/png" srcset="@/assets/img/perplexed-mind_487.png" media="(max-width: 412px)">
            <source type="image/webp" srcset="@/assets/img/perplexed-mind_164.webp">
            <img class="covers-img" src="@/assets/img/perplexed-mind_164.png" alt="perplexed-mind" width="164" height="164">
        </picture>  
        <div class="perplexed__ellipse">
            <svg class="svg svg_vermillion">
                <use xlink:href="@/assets/img/spriteFigure.svg#ellipse"></use>
            </svg>
        </div>
        <div class="perplexed__crooked">
            <svg class="svg svg_stroke-pewter-blue">
                <use xlink:href="@/assets/img/spriteFigure.svg#crooked"></use>
            </svg>
        </div>
        <div class="perplexed__blob">
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
