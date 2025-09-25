<template>
    <main class="main">
        <h1 class="visually-hidden">Finsweet web-site for verstaem.online</h1>
        <section class="main__header">
            <AppPodcastTitle :isAbout="isAbout"/>
            <div class="featured">
                <AppFeatured v-for="(item, index) in featuredData"  
                    :key="index" :prop="item"
                  />
                 
            </div>
            <div class="main__crooked">
                <svg class="svg svg_vermillion">
                    <use xlink:href="@/assets/img/spriteFigure.svg#crooked"></use>
                </svg>
            </div> 
        </section>
        <AppListeners/>
        <AppSponsor/>
        <AppContact/>
        <AppCta/>
    </main>
</template>


<script setup>
    import  AppPodcastTitle from '@/vue_components/Podcast/PodcastTitle/AppPodcastTitle.vue' 
    import  AppFeatured from '@/vue_components/Featured/AppFeatured.vue' 
    import  AppListeners from '@/vue_components/Listeners/AppListeners.vue' 
    import  AppSponsor from '@/vue_components/Sponsor/AppSponsor.vue' 
    import  AppContact from '@/vue_components/Contact/AppContact.vue' 
    import  AppCta from '@/vue_components/Cta/AppCta.vue'

    const isAbout = true;

    const featuredData = [
        { 
            id: 0,
            value: 76,
            letter:'K',
            text: 'Community Members' 
        },
        { 
            id: 1,
            value: 128,
            letter: 'K',
            text: 'Podcast Subscribers'
        },
        { 
            id: 2,
            value: 59,
            letter: 'K',
            text: 'Daily Listeners'
        }
    ]

    
    if (localStorage.getItem("reloadAbout") === "false") {
        localStorage.removeItem("reloadAbout");
        const locationHref = window.location.href;
        location.reload();
        window.location.replace(locationHref);
    } else {
        localStorage.setItem("reloadAbout", "false");
        window.location = window.location;
    }


</script>
