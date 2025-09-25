<template>
    <div class="card card_hover">
        <div class="card__hiader">
            <div class="card__picture">
                <AppSelfConfidence :isSize12px="isSize12px" :isContentImageSize="isContentImageSize" />
            </div>
            <div class="card__block">
                <div class="card__info">
                    <p class="card__eps reset">Eps. 3</p>
                    <h4 class="card__info-title reset card__info-title_hover">How to Deal with Self–Confidence
                    </h4>
                </div>
                <p class="card__info-text  reset">We have a therapist expert as our guest, Krista Gordon is will
                    share her experience Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <RouterLink to="/detail/3" class="card-link" aria-label="Page Detail"></RouterLink>
        </div>
        <div class="card__footer">
            <div class="card__buttons">
                <button class="btn btn_grey card__btn text-nobreak">self-esteem</button>
                <button class="btn btn_grey card__btn text-nobreak">health</button>
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
    import AppSelfConfidence  from '@/vue_components/Podcast/Covers/SelfConfidence/AppSelfConfidence.vue'
    const props = defineProps( {
        isSize12px: { type: Boolean, default: false },
        isContentImageSize: { type: Boolean, default: false },
    }); 

    const isSize12px = props.isSize12px;
    const isContentImageSize = props.isContentImageSize;

</script>