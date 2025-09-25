<template>
    <main class="main">
        <h1 class="visually-hidden">Finsweet web-site for verstaem.online</h1>
        <section class="main__header">
            <AppPodcastTitle :isAbout="isAbout" :isMain="isMain" :isDetail="isDetail" :isEps="props.id"/>
            <div class="main__crooked">
                <svg class="svg svg_vermillion">
                    <use xlink:href="@/assets/img/spriteFigure.svg#crooked"></use>
                </svg>
            </div> 
        </section>
        <AppLatestEpisode/>
        <AppCta/>
    </main>
</template>

<script setup>
    import AppPodcastTitle from '@/vue_components/Podcast/PodcastTitle/AppPodcastTitle.vue' 
    import AppLatestEpisode from '@/vue_components/LatestEpisode/AppLatestEpisode.vue' 
    import AppCta from '@/vue_components/Cta/AppCta.vue'

    const isAbout = false;
    const isMain = false;
    const isDetail = true;
       
    const props = defineProps( {
        id: { type: String, default: '1' }
    });        

    if (localStorage.getItem("reloadDetail") === "false") {
        localStorage.removeItem("reloadDetail");
        const locationHref = window.location.href;
        location.reload();
        window.location.replace(locationHref);
    } else {
        localStorage.setItem("reloadDetail", "false");
        window.location = window.location;
    }

</script>