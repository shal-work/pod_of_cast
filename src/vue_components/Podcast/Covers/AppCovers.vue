<template>
    <div class="covers">
        <div class="covers__inner">
            <div class="covers__slides">
                <div class="covers__item">
                    <AppTeslaautopilot :color="color"/>
                    <h3 class="covers__text reset">Tesla Autopilot</h3>            
                </div>
                <div class="covers__item">
                    <AppSelfConfidence :color="color"/>
                    <h3 class="covers__text reset">Self–confidence</h3>
                </div>
                <div class="covers__item">
                    <AppPerplexedMind :color="color"/>
                    <h3 class="covers__text reset">Perplexed Mind</h3>
                </div>
                <div class="covers__item">
                    <AppWomensRights :color="color"/>
                    <h3 class="covers__text reset">Women’s Rights</h3>            
                </div>
                <div class="covers__item">
                    <AppSocialClass  :color="color"/>
                    <h3 class="covers__text reset">Social Class</h3>
                </div>
                <div class="covers__item">
                    <AppCovid :color="color"/>
                    <h3 class="covers__text reset">COVID-19 Endemic</h3>
                </div>
            </div>
        </div>


        <button class="carousel-prev reset" data-slide="prev" aria-label="prev"> </button>
        <button class="carousel-next reset" data-slide="next" aria-label="next"> </button>
    </div>

</template>

<script setup>
    import AppTeslaautopilot  from '@/vue_components/Podcast/Covers/Teslaautopilot/AppTeslaautopilot.vue'
    import AppSelfConfidence  from '@/vue_components/Podcast/Covers/SelfConfidence/AppSelfConfidence.vue'
    import AppPerplexedMind  from '@/vue_components/Podcast/Covers/PerplexedMind/AppPerplexedMind.vue'
    import AppWomensRights  from '@/vue_components/Podcast/Covers/WomensRights/AppWomensRights.vue'
    import AppSocialClass  from '@/vue_components/Podcast/Covers/SocialClass/AppSocialClass.vue'
    import AppCovid from '@/vue_components/Podcast/Covers/Covid/AppCovid.vue'
    const color = "white";
</script>
