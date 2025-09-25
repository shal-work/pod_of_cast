<template> 
    <div v-if="props.isMain" class="podcast-title" >
        <div class="podcast-title__decor podcast-title__decor-left">
            <div class="podcast-title__crooked">
                <svg class="svg svg_black">
                    <use xlink:href="@/assets/img/spriteFigure.svg#crooked"></use>
                </svg>
            </div>
            <div class="podcast-title__blob">
                <svg class="svg  svg_vermillion">
                    <use xlink:href="@/assets/img/spriteFigure.svg#blob"></use>
                </svg>
            </div>
        </div>
        <div  class="podcast-title__content">
            <h2 class="title-large podcast-title__title reset">Your Daily
                <span class="title-large podcast-title__title-backlight">Podcast</span>
            </h2>
            <p class="podcast-title__text reset">
                We cover all kinds of categories and a weekly special guest.
            </p>
            <button class="podcast-title__subscribe btn btn_black text-uppercase text-nobreak">
                Subscribe
            </button>
        </div>
        <div class="podcast-title__decor podcast-title__decor-right">
            <div class="podcast-title__decor-block">
                <div class="podcast-title__star-blue" data-animated="anima-swing">
                    <svg class="svg svg_pewter-blue">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
                <div class="podcast-title__star-vermillion" data-animated="anima-swing">
                    <svg class="svg svg_vermillion">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
                <div class="podcast-title__star-black" data-animated="anima-swing">
                    <svg class="svg svg_black">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>  

    <div v-if="props.isAbout"  class="podcast-title podcast-title_page-about">
        <div class="">
            <div class="podcast-title__crooked">
                <svg class="svg svg_black">
                    <use xlink:href="@/assets/img/spriteFigure.svg#crooked"></use>
                </svg>
            </div>
            <div class="podcast-title__blob">
                <svg class="svg  svg_vermillion">
                    <use xlink:href="@/assets/img/spriteFigure.svg#blob"></use>
                </svg>
            </div>
        </div>
        <div class="podcast-title__content-about">
            <h2 class="title-large podcast-title__title reset"> About
                <span class="title-large podcast-title__title-backlight">Pod of Cast</span>
            </h2>
            <p class="podcast-title__text podcast-title__text-about reset">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.
            </p>
            <div class="podcast-title__btns">
                <button class="podcast-title__btn-about btn btn_light text-uppercase text-nobreak">
                    BECOME SPONSOR
                </button>
                <button class="podcast-title__btn btn btn_black text-uppercase text-nobreak">
                    SUBSCRIBE
                </button>
            </div>
        </div>
        <div class="podcast-title__decor podcast-title__decor-right podcast-title__decor-right-about">
            <div class="podcast-title__decor-block-about">
                <div class="podcast-title__star-blue-about" data-animated="anima-swing">
                    <svg class="svg svg_pewter-blue">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
                <div class="podcast-title__star-vermillion-about" data-animated="anima-swing">
                    <svg class="svg svg_vermillion">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
                <div class="podcast-title__star-black-about" data-animated="anima-swing">
                    <svg class="svg svg_black">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <div v-if="props.isDetail"  class="podcast-title podcast-title_page-detail">
        <div class="podcast-title__decor podcast-title__decor-left">
            <div class="podcast-title__crooked">
                <svg class="svg svg_black">
                    <use xlink:href="@/assets/img/spriteFigure.svg#crooked"></use>
                </svg>
            </div>
            <div class="podcast-title__blob">
                <svg class="svg  svg_vermillion">
                    <use xlink:href="@/assets/img/spriteFigure.svg#blob"></use>
                </svg>
            </div>
        </div>
        
        <AppDetailContent :isEps="props.isEps"/> 
            
        <div class="podcast-title__decor podcast-title__decor-right podcast-title__decor-right-detail">
            <div class="podcast-title__decor-block-about">
                <div class="podcast-title__star-blue-about" data-animated="anima-swing">
                    <svg class="svg svg_pewter-blue">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
                <div class="podcast-title__star-vermillion-about" data-animated="anima-swing">
                    <svg class="svg svg_vermillion">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
                <div class="podcast-title__star-black-about" data-animated="anima-swing">
                    <svg class="svg svg_black">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
            </div>
        </div>

    </div>
    <div v-if="props.isBlog"  class="podcast-title podcast-title_page-blog">
        <div class="podcast-title__decor podcast-title__decor-left">
            <div class="podcast-title__crooked">
                <svg class="svg svg_black">
                    <use xlink:href="@/assets/img/spriteFigure.svg#crooked"></use>
                </svg>
            </div>
            <div class="podcast-title__blob">
                <svg class="svg  svg_vermillion">
                    <use xlink:href="@/assets/img/spriteFigure.svg#blob"></use>
                </svg>
            </div>
        </div>
        <div class="podcast-title__content-blog">
            <h2 class="title-large podcast-title__title reset">Article
                <span>
                    <span class="title-large podcast-title__title-backlight podcast-title__title-backlight_black">and </span>
                    <span class="title-large podcast-title__title-backlight"> News</span>
                </span>
            </h2>
            <p class="podcast-title__text podcast-title__text-blog reset">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.
            </p>
        </div>

        <div class="podcast-title__decor podcast-title__decor-right podcast-title__decor-right-about">
            <div class="podcast-title__decor-block-about">
                <div class="podcast-title__star-blue-about" data-animated="anima-swing">
                    <svg class="svg svg_pewter-blue">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
                <div class="podcast-title__star-vermillion-about" data-animated="anima-swing">
                    <svg class="svg svg_vermillion">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
                <div class="podcast-title__star-black-about" data-animated="anima-swing">
                    <svg class="svg svg_black">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div v-if="props.isSingleBlog"  class="podcast-title podcast-title_page-single-blog">
        <div class="podcast-title__decor podcast-title__decor-left">
            <div class="podcast-title__crooked">
                <svg class="svg svg_black">
                    <use xlink:href="@/assets/img/spriteFigure.svg#crooked"></use>
                </svg>
            </div>
            <div class="podcast-title__blob">
                <svg class="svg  svg_vermillion">
                    <use xlink:href="@/assets/img/spriteFigure.svg#blob"></use>
                </svg>
            </div>
        </div>

        <AppSingleBlog :pState="props.pState"/> 

        <div class="podcast-title__decor podcast-title__decor-right podcast-title__decor-right-about">
            <div class="podcast-title__decor-block-about">
                <div class="podcast-title__star-blue-about" data-animated="anima-swing">
                    <svg class="svg svg_pewter-blue">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
                <div class="podcast-title__star-vermillion-about" data-animated="anima-swing">
                    <svg class="svg svg_vermillion">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
                <div class="podcast-title__star-black-about" data-animated="anima-swing">
                    <svg class="svg svg_black">
                        <use xlink:href="@/assets/img/spriteFigure.svg#star-big"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import AppDetailContent  from '@/vue_components/DetailContent/AppDetailContent.vue'
    import AppSingleBlog  from '@/vue_components/SingleBlog/AppSingleBlog.vue'

    const props = defineProps( {
        isMain: { type: Boolean, default: false },
        isAbout: { type: Boolean, default: false },
        isDetail: { type: Boolean, default: false },
        isBlog: { type: Boolean, default: false },
        isSingleBlog: { type: Boolean, default: false },
        isEps: String,
        pState: Object
    });

</script>