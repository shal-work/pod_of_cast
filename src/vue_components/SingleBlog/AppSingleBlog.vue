<template>
    <div class="podcast-title__single-blog">
        <div class="podcast-title__head container">
            <RouterLink  to="/article" class="podcast-title__link-back" aria-label="Page Blog">Back to articles</RouterLink>
            <div class="podcast-title__date">{{ pState.date }}</div>
        </div>
        <div class="podcast-title__content-blog  podcast-title__content-single-blog">
            <p class="podcast-title__single-blog-sub-title text-uppercase reset">{{ pState.subtitle }}</p>
            <h2 class="title-section podcast-title__title podcast-title__single-blog-title text-capitalize reset">{{ pState.title }}</h2>
        </div>
        <div class="podcast-title__single-blog-buttons">
            <button class="btn btn_grey podcast-title__button" v-for="(item, index) in pState.btns" :key="index">{{item.name}}</button>
        </div>
        <div class="podcast-title__social-links">
            <a href="#" class="icon" aria-label="twitter">
                <svg class="icon__item">
                    <use xlink:href="@/assets/img/spriteIco.svg#twitter"></use>
                </svg>
            </a>
            <a href="#" class="icon" aria-label="instagram">
                <svg class="icon__item">
                    <use xlink:href="@/assets/img/spriteIco.svg#instagram"></use>
                </svg>
            </a>
            <a href="#" class="icon" aria-label="tiktok">
                <svg class="icon__item">
                    <use xlink:href="@/assets/img/spriteIco.svg#tiktok"></use>
                </svg>
            </a>
        </div>
        <div class="podcast-title__picture">
            <picture>
                <source type="image/webp" :srcset="require('@/assets/img/' + pState.picture + '_720_480.webp')">
                <img class="podcast-title__img" :src="require('@/assets/img/' + pState.picture + '_720_480.png')" :alt = pState.picture width="720" height="480">
            </picture>
        </div>
    </div>
    
</template>

<script setup>

    const props = defineProps( {
        pState: Object
    });

    const pState = props.pState;
    console.log(pState);
   
 
 
</script>