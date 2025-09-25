<template>
    <div class="card">
        <div class="card__hiader">
            <div class="card__picture">
                <AppPerplexedMind :isSize12px="isSize12px" :isContentImageSize="isContentImageSize" />
            </div>
            <div class="card__block">
                <div class="card__info">
                    <p class="card__eps reset">Eps. 1</p>
                    <h4 class="card__info-title reset">Are you a Perplexed Mind Person?</h4>
                </div>
                <p class="card__info-text  reset">Unable to grasp something clearly or to think logically and
                    decisively about something Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <RouterLink to="/detail/1" class="card-link" aria-label="Page Detail"></RouterLink>
        </div>
        <div class="card__footer">
            <div class="card__buttons">
                <button class="btn btn_grey card__btn text-nobreak"> mind-behaviour</button>
                <button class="btn btn_grey card__btn text-nobreak"> health </button>
            </div>
            <div class="card__users">
                <p class="card__text reset text-nobreak">Hosted by:</p>

                <div class="user">
                    <span class="user__avatar card__avatar">
                        <picture>
                            <source type="image/webp" srcset="@/assets/img/avatar5_22.webp">
                            <img src="@/assets/img/avatar5_22.png" alt="avatar5" class="user__img" width="22"
                                height="22">
                        </picture>
                    </span>
                    <span class="user__avatar card__avatar">
                        <picture>
                            <source type="image/webp" srcset="@/assets/img/avatar6_22.webp">
                            <img src="@/assets/img/avatar6_22.png" alt="avatar6" class="user__img" width="22"
                                height="22">
                        </picture>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import AppPerplexedMind  from '@/vue_components/Podcast/Covers/PerplexedMind/AppPerplexedMind.vue'
    const props = defineProps( {
        isSize12px: { type: Boolean, default: false },
        isContentImageSize: { type: Boolean, default: false },
    }); 

    const isSize12px = props.isSize12px;
    const isContentImageSize = props.isContentImageSize;

</script>