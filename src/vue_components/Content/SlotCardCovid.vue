<template>
    <div class="card card_hover">
        <div class="card__hiader">
            <div class="card__picture">
                <AppCovid :isSize12px="isSize12px" :isContentImageSize="isContentImageSize" />
            </div>
            <div class="card__block">
                <div class="card__info">
                    <p class="card__eps reset">Eps. 6</p>
                    <h4 class="card__info-title card__info-title_hover reset"> Pandemic Becoming Endemic</h4>
                </div>
                <p class="card__info-text  reset">A Nature survey shows many scientists expect the virus that
                    causes COVID-19 to become Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <RouterLink to="/detail/6" class="card-link" aria-label="Page Detail"></RouterLink>
        </div>
        <div class="card__footer">
            <div class="card__buttons">
                <button class="btn btn_grey card__btn text-nobreak"> covid-19 </button>
                <button class="btn btn_grey card__btn text-nobreak"> health </button>
            </div>
            <div class="card__users">
                <p class="card__text reset text-nobreak">Hosted by:</p>

                <div class="user">
                    <span class="user__avatar card__avatar">
                        <picture>
                            <source type="image/webp" srcset="@/assets/img/avatar5_36.webp"  media="(max-width: 412px)">
                            <source type="image/png" srcset="@/assets/img/avatar5_36.png" media="(max-width: 412px)">
                            <source type="image/webp" srcset="@/assets/img/avatar5_22.webp">
                            <img src="@/assets/img/avatar5_22.png" alt="avatar5" class="user__img" width="22"
                                height="22">
                        </picture>
                    </span>
                    <span class="user__avatar card__avatar">
                        <picture>
                            <source type="image/webp" srcset="@/assets/img/avatar6_33.webp"  media="(max-width: 412px)">
                            <source type="image/png" srcset="@/assets/img/avatar6_33.png" media="(max-width: 412px)">                            
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
    import AppCovid  from '@/vue_components/Podcast/Covers/Covid/AppCovid.vue'
    const props = defineProps( {
        isSize12px: { type: Boolean, default: false },
        isContentImageSize: { type: Boolean, default: false },
    }); 
    const isSize12px = props.isSize12px;
    const isContentImageSize = props.isContentImageSize;


</script>

