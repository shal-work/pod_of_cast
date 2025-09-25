<!-- isEps === '1' -->
<template>
    <div  class="podcast-title__detail-content">
        <div class="podcast-title__detail-cover">
            <AppPerplexedMind  :isSize30px="isSize30px" :isShadow="isShadow" :isDetailImageSize = "isDetailImageSize"/>
            <h2 class="podcast-title__detail-cover-title reset">Perplexed Mind</h2> 
        </div>
        <div class="podcast-title__detail-block">
            <div class="podcast-title__detail-info">
                <div class="podcast-title__detail-info-header">
                    <p class="podcast-title__detail-eps reset">
                        Episode {{props.isEps}}
                    </p>
                    <p class="podcast-title__detail-featured reset text-uppercase">
                        Featured Episode
                    </p>
                </div>
                <h2 class="title-header podcast-title__detail-title reset">Are you a Perplexed Mind Person?</h2>
            </div>
            <p class="podcast-title__detail-text reset">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
            <div class="podcast-title__detail-footnote">
                <div class="user podcast-title__detail-user">
                    <div class="user__avatar podcast-title__detail-avatar">
                        <picture>
                            <source type="image/webp" srcset="@/assets/img/avatar5_54.webp"  media="(max-width: 412px)">
                            <source type="image/png" srcset="@/assets/img/avatar5_54.png" media="(max-width: 412px)">
                            <source type="image/webp" srcset="@/assets/img/avatar5_36.webp">
                            <img src="@/assets/img/avatar5_36.png" alt="avatar5" class="user__img" width="36" height="37">
                        </picture>
                    </div>
                    <p class="user__name podcast-title__detail-name reset text-nobreak text-capitalize">
                        Jane Doe
                    </p>
                </div>
                <p class="podcast-title__detail-date text-nobreak text-capitalize reset">
                    Sep 22, 2021
                </p>
            </div>
            <div class="podcast-title__btns podcast-title__detail-btns">
                <button class="podcast-title__btn-about btn btn_black text-uppercase text-nobreak podcast-title__detail-btn-flex">
                    subscribe
                </button>
                <button class="podcast-title__btn podcast-title__detail-btn btn btn_light text-uppercase text-nobreak">
                    listen now <span  class="podcast-title__vermillion">(46 min)</span> 
                </button>
            </div>
        </div>
    </div>
    <div class="podcast-title__detail-footer">
        <div class="podcast-title__detail-buttons">
            <button  class="btn btn_grey podcast-title__button text-nobreak">  mind-behaviour </button>
            <button  class="btn btn_grey podcast-title__button text-nobreak"> health </button>
        </div>
    </div>

</template>

<script setup>
    // 1
    import AppPerplexedMind  from '@/vue_components/Podcast/Covers/PerplexedMind/AppPerplexedMind.vue' 
    const props = defineProps( {
        isEps: { type: String, default: '1' }
    });        
    const isSize30px = true;
    const isShadow = true;
    const isDetailImageSize = true;
</script>