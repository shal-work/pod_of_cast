<template>
    <section class="listeners">
        <h2 class="title-section listeners__title reset">What our listeners say</h2>
        <h3 class="listeners__info-title reset">Their experience throughout every platform</h3>
        <div class="listeners__picture">
            <picture >
                <source type="image/webp" srcset="@/assets/img/listeners_581_321.webp" media="(max-width: 412px)">
                <source type="image/png" srcset="@/assets/img/listeners_581_321.webp" media="(max-width: 412px)">
                <source type="image/webp" srcset="@/assets/img/listeners.webp">
                <img src="@/assets/img/listeners.png" alt="listeners" class="listeners__img" width="1160" height="640">
            </picture>
            <div class="listeners__saw">
                <div class="listeners__saw3">
                    <svg class="svg">
                        <use xlink:href="@/assets/img/spriteFigure.svg#saw3"></use>
                    </svg>
                </div> 
                <div class="listeners__saw2">
                    <svg class="svg">
                        <use xlink:href="@/assets/img/spriteFigure.svg#saw2"></use>
                    </svg>
                </div> 
                <div class="listeners__saw1">
                    <svg class="svg">
                        <use xlink:href="@/assets/img/spriteFigure.svg#saw1"></use>
                    </svg>
                </div> 
            </div>

        </div>
        <div class="listeners__block-title">
            <h3 class="listeners__sub-title reset">
                About and History
            </h3>
            <div class="listeners__three-rays" data-animated="anima-rays">
                <svg class="svg">
                    <use xlink:href="@/assets/img/spriteFigure.svg#three-rays"></use>
                </svg>
            </div>  
        </div>
        <div class="block-text">
            <p class="block-text__text block-text__text_indent">
                Eu non <span class="block-text__text block-text__text_bold">diam</span> phasellus vestibulum lorem. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Id diam vel quam <span class="block-text__text block-text__text_bold">elementum pulvinar</span>.
            </p>
            <p class="block-text__text block-text__text">
                Elementum eu facilisis sed odio morbi quis commodo. 
            </p>
            <p class="block-text__text block-text__text_indent">Sed odio morbi quis commodo odio aenean sed adipiscing odio diam. uno fablotoson louw uit.</p> 
            <p class="block-text__text block-text__text_indent">
                Lorem ipsum dolor sit amet, <span class="block-text__text block-text__text_bold">consectetur adipiscing</span> elit. Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in. Sit vel, senectus iaculis morbi. <span class="block-text__text block-text__text_bold">Amet</span> interdum imperdiet laoreet<span class="block-text__text block-text__text_bold"> morbi </span>tincidunt fermentum, libero. Ante enim eget. 
            </p>
            <p class="block-text__text block-text__text_indent">
                Viverra at porttitor accumsan. <span><a href="#" class="block-text__text text-underline">Orci non here</a></span>
            </p>
        </div>
        <div class="listeners__block-title">
            <h3 class="listeners__sub-title reset">Founder and Main Host</h3>
            <div class="listeners__dinosaur">
                <svg class="svg svg_pewter-blue">
                    <use xlink:href="@/assets/img/spriteFigure.svg#dinosaur-color"></use>
                </svg>
            </div>  
        </div>
        <AppHost/>
    </section>
</template>

<script setup>
    import  AppHost from '@/vue_components/Host/AppHost.vue' 

</script>

