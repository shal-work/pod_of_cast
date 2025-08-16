<template>
    <div class="content">
 
        <h2 class="content__title reset">Recent Episodes</h2>
        <h3 class="content__sub-title reset">Available on your favorite platform</h3>
        
        <div class="content__body">
            <div class="content__three-rays" data-animated="anima-rays">
                <svg class="svg">
                    <use xlink:href="@/assets/img/spriteFigure.svg#three-rays"></use>
                </svg>
            </div> 
            <div class="content__cards">
                <div class="content__card content__card_hover">
                    <div class="content__hiader">
                        <div class="content__picture">
                            <AppCovid :isSize12px="size12px" :isNewImageSize="isNewImageSize"/>
                        </div>
                        <div class="content__block">
                            <div class="content__info">
                                <p class="content__eps reset">Eps. 6</p>
                                <h4 class="content__info-title content__info-title_hover reset"> Pandemic Becoming Endemic</h4>
                            </div>
                            <p class="content__info-text reset">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
                        </div>
                    </div>
                    <div class="content__footer">
                        <div class="content__buttons">
                            <button  class="btn btn_grey content__btn text-nobreak" aria-label="covid-19"> covid-19 </button>
                            <button  class="btn btn_grey content__btn text-nobreak" aria-label="health"> health </button>
                        </div>
                        <div class="content__users">
                            <p class="content__text reset text-nobreak">Hosted by:</p>

                            <div class="content__avatars user">
                                <span class="user__avatar content__avatar">
                                    <picture >
                                        <source type="image/webp" srcset="@/assets/img/avatar5_22.webp">
                                        <img src="@/assets/img/avatar5_22.png" alt="avatar5" class="user__img" width="22" height="22">
                                    </picture> 
                                </span>
                                <span class="user__avatar content__avatar">
                                    <picture>
                                        <source type="image/webp" srcset="@/assets/img/avatar6_22.webp">
                                        <img src="@/assets/img/avatar6_22.png" alt="avatar6" class="user__img" width="22" height="22">
                                    </picture>                                
                                </span>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="content__card">
                    <div class="content__hiader">
                        <div class="content__picture">
                            <AppTeslaautopilot :isSize12px="size12px" :isNewImageSize="isNewImageSize"/>
                        </div>
                        <div class="content__block">
                            <div class="content__info">
                                <p class="content__eps reset">Eps. 5</p>
                                <h4 class="content__info-title reset">Tesla Autopilot Controversy</h4>
                            </div>
                            <p class="content__info-text reset">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
                        </div>
                    </div>
                    <div class="content__footer">
                        <div class="content__buttons">
                            <button  class="btn btn_grey content__btn text-nobreak" aria-label="covid-19">automation</button>
                            <button  class="btn btn_grey content__btn text-nobreak" aria-label="health">tech</button>
                        </div>
                        <div class="content__users">
                            <p class="content__text reset text-nobreak">Hosted by:</p>

                            <div class="content__avatars user">
                                <span class="user__avatar content__avatar">
                                    <picture>
                                        <source type="image/webp" srcset="@/assets/img/avatar5_22.webp">
                                        <img src="@/assets/img/avatar5_22.png" alt="avatar5" class="user__img" width="22" height="22">
                                    </picture>                                 
                                </span>
                                <span class="user__avatar content__avatar">
                                    <picture>
                                        <source type="image/webp" srcset="@/assets/img/avatar6_22.webp">
                                        <img src="@/assets/img/avatar6_22.png" alt="avatar6" class="user__img" width="22" height="22">
                                    </picture>                                 
                                </span>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="content__card">
                    <div class="content__hiader">
                        <div class="content__picture">
                            <AppWomensRights :isSize12px="size12px" :isNewImageSize="isNewImageSize"/>
                        </div>
                        <div class="content__block">
                            <div class="content__info">
                                <p class="content__eps reset">Eps. 4</p>
                                <h4 class="content__info-title reset">Women's Rights? Is it alright?</h4>
                            </div>
                            <p class="content__info-text reset">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
                        </div>
                    </div>
                    <div class="content__footer">
                        <div class="content__buttons">
                            <button  class="btn btn_grey content__btn text-nobreak" aria-label="covid-19">women’s rights</button>
                        </div>
                        <div class="content__users">
                            <p class="content__text reset text-nobreak">Hosted by:</p>

                            <div class="content__avatars user">
                                <span class="user__avatar content__avatar">
                                    <picture>
                                        <source type="image/webp" srcset="@/assets/img/avatar5_22.webp">
                                        <img src="@/assets/img/avatar5_22.png" alt="avatar5" class="user__img" width="22" height="22">
                                    </picture>                                  
                                </span>
                                <span class="user__avatar content__avatar">
                                    <picture>
                                        <source type="image/webp" srcset="@/assets/img/avatar6_22.webp">
                                        <img src="@/assets/img/avatar6_22.png" alt="avatar6" class="user__img" width="22" height="22">
                                    </picture>                                  
                                </span>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="content__card content__card_hover">
                    <div class="content__hiader">
                        <div class="content__picture">
                            <AppSelfConfidence :isSize12px="size12px" :isNewImageSize="isNewImageSize"/>
                        </div>
                        <div class="content__block">
                            <div class="content__info">
                                <p class="content__eps reset">Eps. 3</p>
                                <h4 class="content__info-title reset content__info-title_hover">How to Deal with Self–Confidence</h4>
                            </div>
                            <p class="content__info-text reset">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
                        </div>
                    </div>
                    <div class="content__footer">
                        <div class="content__buttons">
                            <button  class="btn btn_grey content__btn text-nobreak" aria-label="covid-19">self-esteem</button>
                            <button  class="btn btn_grey content__btn text-nobreak" aria-label="health">health</button>
                        </div>
                        <div class="content__users">
                            <p class="content__text reset text-nobreak">Hosted by:</p>

                            <div class="content__avatars user">
                                <span class="user__avatar content__avatar">
                                    <picture>
                                        <source type="image/webp" srcset="@/assets/img/avatar5_22.webp">
                                        <img src="@/assets/img/avatar5_22.png" alt="avatar5" class="user__img" width="22" height="22">
                                    </picture>                                  
                                </span>
                                <span class="user__avatar content__avatar">
                                    <picture>
                                        <source type="image/webp" srcset="@/assets/img/avatar6_22.webp">
                                        <img src="@/assets/img/avatar6_22.png" alt="avatar6" class="user__img" width="22" height="22">
                                    </picture>                                  
                                </span>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="content__card content__card_hover">
                    <div class="content__hiader">
                        <div class="content__picture">
                            <AppSocialClass :isSize12px="size12px" :isNewImageSize="isNewImageSize"/>
                        </div>
                        <div class="content__block">
                            <div class="content__info">
                                <p class="content__eps reset">Eps. 2</p>
                                <h4 class="content__info-title reset content__info-title_hover">Type of Social Classes of People</h4>
                            </div>
                            <p class="content__info-text reset">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
                        </div>
                    </div>
                    <div class="content__footer">
                        <div class="content__buttons">
                            <button  class="btn btn_grey content__btn text-nobreak" aria-label="covid-19">social class</button>
                            <button  class="btn btn_grey content__btn text-nobreak" aria-label="health">wealth</button>
                        </div>
                        <div class="content__users">
                            <p class="content__text reset text-nobreak">Hosted by:</p>

                            <div class="content__avatars user">
                                <span class="user__avatar content__avatar">
                                    <picture>
                                        <source type="image/webp" srcset="@/assets/img/avatar5_22.webp">
                                        <img src="@/assets/img/avatar5_22.png" alt="avatar5" class="user__img" width="22" height="22">
                                    </picture>  
                                </span>
                                <span class="user__avatar content__avatar">
                                    <picture>
                                        <source type="image/webp" srcset="@/assets/img/avatar6_22.webp">
                                        <img src="@/assets/img/avatar6_22.png" alt="avatar6" class="user__img" width="22" height="22">
                                    </picture>                                  
                                </span>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="content__card">
                    <div class="content__hiader">
                        <div class="content__picture">
                            <AppPerplexedMind :isSize12px="size12px" :isNewImageSize="isNewImageSize"/>
                        </div>
                        <div class="content__block">
                            <div class="content__info">
                                <p class="content__eps reset">Eps. 1</p>
                                <h4 class="content__info-title reset">Are you a Perplexed Mind Person?</h4>
                            </div>
                            <p class="content__info-text reset">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
                        </div>
                    </div>
                    <div class="content__footer">
                        <div class="content__buttons">
                            <button  class="btn btn_grey content__btn text-nobreak" aria-label="covid-19"> mind-behaviour</button>
                            <button  class="btn btn_grey content__btn text-nobreak" aria-label="health"> health </button>
                        </div>
                        <div class="content__users">
                            <p class="content__text reset text-nobreak">Hosted by:</p>

                            <div class="content__avatars user">
                                <span class="user__avatar content__avatar">
                                    <picture>
                                        <source type="image/webp" srcset="@/assets/img/avatar5_22.webp">
                                        <img src="@/assets/img/avatar5_22.png" alt="avatar5" class="user__img" width="22" height="22">
                                    </picture>                                  
                                </span>
                                <span class="user__avatar content__avatar">
                                    <picture>
                                        <source type="image/webp" srcset="@/assets/img/avatar6_22.webp">
                                        <img src="@/assets/img/avatar6_22.png" alt="avatar6" class="user__img" width="22" height="22">
                                    </picture>                                  
                                </span>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content__control">
            <button class="btn btn_black content__browse-btn text-uppercase text-nobreak">
                BROWSE ALL EPISODES
            </button>
        </div>

        <div class="content__squiggle">
            <svg class="svg svg_stroke-black content__svg">
                <use xlink:href="@/assets/img/spriteFigure.svg#squiggle"></use>
            </svg>
       </div> 

    </div>
</template>

<script setup>
    import AppTeslaautopilot  from '@/vue_components/Podcast/Covers/Teslaautopilot/AppTeslaautopilot.vue'
    import AppCovid  from '@/vue_components/Podcast/Covers/Covid/AppCovid.vue'
    import AppWomensRights  from '@/vue_components/Podcast/Covers/WomensRights/AppWomensRights.vue'
    import AppSelfConfidence from '../Podcast/Covers/SelfConfidence/AppSelfConfidence.vue';
    import AppSocialClass from '../Podcast/Covers/SocialClass/AppSocialClass.vue';
    import AppPerplexedMind from '../Podcast/Covers/PerplexedMind/AppPerplexedMind.vue';

    const size12px = window.screen.width >= 768 ? true : false;
    const isNewImageSize = true;

</script>

