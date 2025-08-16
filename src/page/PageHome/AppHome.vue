<template>
    <main class="main">
       <h1 class="visually-hidden">Finsweet web-site for verstaem.online</h1>
       <div class="main__header">
            <AppPodcastTitle/>
            <AppCovers/>
            <AppPlatform/>
       </div>
        <AppAbout/>
        <AppTestimonials/>
        <AppFeatures/>
        <AppContent/>
        <AppPricing/>
        <AppBlog/>
        <AppCta/>
    </main>
</template>


<script setup>
    import  AppPodcastTitle from '@/vue_components/Podcast/PodcastTitle/AppPodcastTitle.vue' 
    import  AppCovers from '@/vue_components/Podcast/Covers/AppCovers.vue' 
    import  AppPlatform from '@/vue_components/Podcast/Platform/AppPlatform.vue' 
    import  AppAbout from '@/vue_components/About/AppAbout.vue' 
    import  AppTestimonials from '@/vue_components/Testimonials/AppTestimonials.vue' 
    import  AppFeatures from '@/vue_components/Features/AppFeatures.vue'
    import  AppContent from '@/vue_components/Content/AppContent.vue'
    import  AppPricing from '@/vue_components/Pricing/AppPricing.vue'
    import  AppBlog from '@/vue_components/Blog/AppBlog.vue'
    import  AppCta from '@/vue_components/Cta/AppCta.vue'

</script>
