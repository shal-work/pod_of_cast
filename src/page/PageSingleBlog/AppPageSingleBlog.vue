<template>
    <main class="main">
        <h1 class="visually-hidden">Finsweet web-site for verstaem.online</h1>
        <section class="main__header">
            <AppPodcastTitle :isSingleBlog="isSingleBlog" :pState="pState" />
        </section>
        
        <div class="container single-blog">
            <AppRichtext/>
            <AppQuote :isSingleBlog="isSingleBlog"/>
            <div class="list-text">
                <ul class="list-text__title reset" data-title="Bullet list example:">
                    <li class="list-text__item">
                        Lorem ipsum dolor sit amet, <span class="list-text__item-bold text-nobreak ">consectetur adipiscing</span>  elit. Quam pellentesque at bibendum euismod tellus duis curs us dignissim odio. Sit vulputate et integer in.
                    </li>
                    <li class="list-text__item">
                        Sit vel, senectus iaculis morbi. <span class="list-text__item-bold">Amet</span> interdum imperdiet laoreet <span class="list-text__item-bold">morbi</span>  tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan.<span><a href="#" class="list-text__item text-underline">Orci non here</a></span>
                    </li>
                    <li class="list-text__item">
                        Quis dictum cursus faucibus mattis dignissim. Pellent que <span class="list-text__item-bold text-nobreak">purus in sed</span>  sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.
                    </li> 
                </ul>
                <ol class="list-text__title reset" data-title="Number list example:">
                    <li class="list-text__item">
                        Lorem ipsum dolor sit amet, <span class="list-text__item-bold">consectetur adipiscing</span>  elit. Quam pellentesque at bibendum euismod tellus duis curs us dignissim odio. Sit vulputate et integer in.
                    </li>
                    <li class="list-text__item">
                        Sit vel, senectus iaculis morbi. <span class="list-text__item-bold">Amet</span> interdum imperdiet laoreet <span class="list-text__item-bold">morbi</span>  tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan.<span><a href="#" class="list-text__item text-underline">Orci non here</a></span>
                    </li>
                    <li class="list-text__item">
                        Quis dictum cursus faucibus mattis dignissim. Pellent que <span class="list-text__item-bold text-nobreak ">purus in sed</span>  sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.
                    </li> 
                </ol>
            </div>
            <div class="single-blog__image-caption">
                <div class="single-blog__doodle">
                    <div class="single-blog__picture">
                        <picture >
                            <source type="image/webp" srcset="@/assets/img/doodle1_273_192.webp" media="(max-width: 412px)">
                            <source type="image/png" srcset="@/assets/img/doodle1_273_192.webp" media="(max-width: 412px)">
                            <source type="image/webp" srcset="@/assets/img/doodle1.webp">
                            <img src="@/assets/img/doodle1.png" alt="doodle1" class="single-blog__img" width="570" height="400">
                        </picture>
                    </div>
                    <p class="single-blog__text reset">this is an image with a caption example</p>
                </div>
                <div class="single-blog__doodle">
                    <div class="single-blog__picture">
                        <picture >
                            <source type="image/webp" srcset="@/assets/img/doodle2_273_192.webp" media="(max-width: 412px)">
                            <source type="image/png" srcset="@/assets/img/doodle2_273_192.webp" media="(max-width: 412px)">
                            <source type="image/webp" srcset="@/assets/img/doodle2.webp"> 
                            <img src="@/assets/img/doodle2.png" alt="doodle2" class="single-blog__img" width="570" height="400">
                        </picture>
                    </div>
                    <a href="#" class="single-blog__text single-blog__text_vermillion text-underline">download here</a>
                </div>
            </div>
        </div>
        <section class="blog blog_single-blog">
            <h2 class="title-section blog__title reset">Related Article</h2>
            <h3 class="blog__sub-title reset">News, Tips, Tricks and more</h3>
            <div class="blog__wrep">
                <div class="blog__sheaf" data-animated = "anima-swing">
                    <svg class="svg">
                        <use xlink:href="@/assets/img/spriteFigure.svg#sheaf"></use>
                    </svg>
                </div>
                <div class="block-cards">
                    <AppBlogCards :quantity="2"/>
                </div>
                <div class="blog__dinosaur">
                    <svg class="svg">
                        <use xlink:href="@/assets/img/spriteFigure.svg#dinosaur"></use>
                    </svg>
                </div>  
            </div>

            <div class="blog__button">
                <button class="blog__btn btn btn_black text-uppercase text-nobreak">
                    BROWSE ALL
                </button>
            </div>
        
            <div class="squiggle blog__squiggle">
                <svg class="svg svg_stroke-vermillion squiggle__svg">
                    <use xlink:href="@/assets/img/spriteFigure.svg#squiggle"></use>
                </svg>
            </div>
        </section>
        <AppCta/>
    </main>

</template>

<script setup>
    import AppPodcastTitle from '@/vue_components/Podcast/PodcastTitle/AppPodcastTitle.vue' 
    import AppRichtext from '@/vue_components/Richtext/AppRichtext.vue' 
    import AppQuote  from '@/vue_components/Quote/AppQuote.vue'
    import AppBlogCards from '@/vue_components/Blog/AppBlogCards.vue' 
    import AppCta from '@/vue_components/Cta/AppCta.vue'
    import store from "@/redux/store.js"
    const props = defineProps( {
        id: Number
    });  
    const isSingleBlog = true;
    let pState = store.items[props.id - 1];

    if (localStorage.getItem("reloadSingleBlog") === "false") {
        localStorage.removeItem("reloadSingleBlog");
        const locationHref = window.location.href;
        location.reload();
        window.location.replace(locationHref);
    } else {
        localStorage.setItem("reloadSingleBlog", "false");
        window.location = window.location;
    }

</script>