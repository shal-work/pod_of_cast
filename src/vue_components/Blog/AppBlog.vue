<template>
    <div class="blog">
        <h2 class="blog__title reset">Article and News</h2>
        <h3 class="blog__sub-title reset">News, tips, tricks and more</h3>
        <div class="blog__wrep">
            <div class="blog__sheaf" data-animated = "anima-swing">
                <svg class="svg">
                    <use xlink:href="@/assets/img/spriteFigure.svg#sheaf"></use>
                </svg>
            </div>
            <div class="blog__cards">
                <div class="blog__card blog__hover">
                    <div class="blog__picture">
                        <div class="blog__img">
                            <picture >
                                <source type="image/webp" srcset="@/assets/img/blog1.webp">
                                <img src="@/assets/img/blog1.png" alt="blog1" class="blog__img" width="538" height="320">
                            </picture>
                        </div>
                    </div>
                    <div class="blog__block-text">
                        <p class="blog__card-sub-title text-uppercase reset">PODCAST</p>
                        <h4 class="blog__card-title reset blog__title-hover">Setup your own podcast</h4>
                        <p class="blog__card-text reset">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime velit culpa corrupti enim veritatis ipsam fugiat odit nobis repudiandae id odio quod, voluptatibus at ut asperiores eaque! Accusantium, quibusdam reprehenderit.</p>
                    </div>

                    <div class="blog__card-footer">
                        <div class="blog__card-buttons">
                            <button class="blog__card-btn btn btn_grey">business</button>
                            <button class="blog__card-btn btn btn_grey">startup</button>
                        </div>
                        <div class="blog__card-date">Sep 14, 2021</div>
                    </div>
                </div>
                <div class="blog__card">
                    <div class="blog__picture">
                        <div class="blog__img">
                            <picture >
                                <source type="image/webp" srcset="@/assets/img/blog1.webp">
                                <img src="@/assets/img/blog1.png" alt="blog1" class="blog__img" width="538" height="320">
                            </picture>
                        </div>
                    </div>
                    <div class="blog__block-text">
                        <p class="blog__card-sub-title text-uppercase reset">TIPS & TRICK</p>
                        <h4 class="blog__card-title reset">Doodle artwork 101</h4>
                        <p class="blog__card-text reset">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime velit culpa corrupti enim veritatis ipsam fugiat odit nobis repudiandae id odio quod, voluptatibus at ut asperiores eaque! Accusantium, quibusdam reprehenderit.</p>
                    </div>

                    <div class="blog__card-footer">
                        <div class="blog__card-buttons">
                            <button class="blog__card-btn btn btn_grey">art</button>
                            <button class="blog__card-btn btn btn_grey">creative</button>
                            <button class="blog__card-btn btn btn_grey">tips and trick</button>
                        </div>
                        <div class="blog__card-date">Sep 12, 2021</div>
                    </div>
                </div>
            </div>
            <div class="blog__dinosaur">
                <svg class="svg">
                    <use xlink:href="@/assets/img/spriteFigure.svg#dinosaur"></use>
                </svg>
            </div>  
        </div>

        <!-- <div class="decor-squiggle">
            <svg class="svg svg_stroke-vermillion">
                <use xlink:href="@/assets/img/spriteFigure.svg#squiggle"></use>
            </svg>
       </div> -->

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

    </div>
</template>
