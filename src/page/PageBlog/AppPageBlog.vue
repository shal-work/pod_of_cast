<template>
    <main class="main">
        <h1 class="visually-hidden">Finsweet web-site for verstaem.online</h1>
        <section class="main__header main__blog">
            <AppPodcastTitle :isBlog="isBlog"/>
             
            <div class="main__search">
                <input id="search" class="main__input" type="search" placeholder=" " size="50"/>
                <label for="search" class="main__label">Search</label>
            </div>  
            <div class="main__crooked">
                <svg class="svg svg_vermillion">
                    <use xlink:href="@/assets/img/spriteFigure.svg#crooked"></use>
                </svg>
            </div> 
        </section>
        <AppLatestPosts/>
        <AppCta/>
        
    </main>
</template>

<script setup>
    import  AppPodcastTitle from '@/vue_components/Podcast/PodcastTitle/AppPodcastTitle.vue' 
    import  AppLatestPosts from '@/vue_components/LatestPosts/AppLatestPosts.vue' 
    import  AppCta from '@/vue_components/Cta/AppCta.vue'

    const isBlog = true;

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