<template>
    <section class="sponsor">
        <div class="sponsor__block-title">
            <h2 class="title-section sponsor__title reset">
                Our Sponsor
            </h2>
            <p class="sponsor__sup-title reset">Our current official sponsor</p>
            <div class="sponsor__rays" data-animated = "anima-rays">
                <svg class="svg">
                    <use xlink:href="@/assets/img/spriteFigure.svg#rays"></use>
                </svg>
            </div>
        </div>
        <div class="sponsor__scroll">
            <div class="sponsor__item">
                <div class="sponsor__social">
                    <a href="#" class="sponsor__link" aria-label="spotify">
                        <svg class="sponsor__svg">
                            <use xlink:href="@/assets/img/spriteIco.svg#google-podcast-text"></use>
                        </svg>
                    </a>
                </div>
                <p class="sponsor__text reset">Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.</p>
            </div>
            <div class="sponsor__item">
                <div class="sponsor__social">
                    <a href="#" class="sponsor__link" aria-label="spotify">
                        <svg class="sponsor__svg">
                            <use xlink:href="@/assets/img/spriteIco.svg#spotify-text"></use>
                        </svg>
                    </a>
                </div>
                <p class="sponsor__text reset">Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.</p>
            </div>
            <div class="sponsor__item">
                <div class="sponsor__sosial">
                    <a href="#" class="sponsor__link" aria-label="spotify">
                        <svg class="sponsor__svg">
                            <use xlink:href="@/assets/img/spriteIco.svg#youtube-text"></use>
                        </svg>
                    </a>
                </div>
                <p class="sponsor__text reset">Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.</p>
            </div>
        </div>
        <div class="control">
            <button class="arrow arrow_left arrow-default" data-slide="prev" aria-label="prev">
                <svg class="svg svg_stroke-vermillion">
                    <use xlink:href="@/assets/img/spriteFigure.svg#arrow"></use>
                </svg>
            </button>
            <button class="arrow arrow_right" data-slide="next" aria-label="next">
                <svg class="svg svg_stroke-vermillion">
                    <use xlink:href="@/assets/img/spriteFigure.svg#arrow"></use>
                </svg>
            </button>
        </div>
    </section>
</template>