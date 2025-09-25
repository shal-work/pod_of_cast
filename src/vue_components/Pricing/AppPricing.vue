<template>
    <section class="pricing">
        <div class="pricing__headlines">
            <h2 class="title-section pricing__title reset">Become our sponsor</h2>
            <h3 class="pricing__sub-title reset">Get exclusive episodes, merch and more</h3>
            <div class="pricing__three-rays">
                <svg class="svg">
                    <use xlink:href="@/assets/img/spriteFigure.svg#three-rays"></use>
                </svg>
            </div>
        </div>

        <div class="pricing__body">
            <div class="pricing__blob" data-animated = "anima-swing">
                <svg class="svg svg_black">
                    <use xlink:href="@/assets/img/spriteFigure.svg#blob"></use>
                </svg>
            </div>
            <div class="pricing__cards">
                <div class="pricing__card">
                    <div class="pricing__price">
                        <h4 class="title-header pricing__card-title reset">Member</h4>
                        <p class="pricing__text reset">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
                        <div class="pricing__control">
                            <button class="pricing__btn btn btn_black text-nobreak text-uppercase" aria-label="subscribe">SUBSCRIBE</button>
                            <p class="pricing__value reset">
                                $9.99
                            </p>
                        </div>
                    </div>
                    <div class="pricing__benefits">
                        <h5 class="pricing__benefits-title reset">What’s included:</h5>
                        <ul class="pricing__benefits-list">
                            <li class="pricing__benefits-item">Exclusive Content</li>
                            <li class="pricing__benefits-item" >5% Discount on Merch</li>
                            <li class="pricing__benefits-item">Join the Community</li>
                            <li class="pricing__benefits-item">Livestreaming Access</li>
                        </ul>
                    </div>
                </div>
                <div class="pricing__card">
                    <div class="pricing__price pricing__popular">
                        <h4 class="title-header pricing__card-title reset pricing__card-popular">Family</h4>
                        <p class="pricing__text reset">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
                        <div class="pricing__control">
                            <button class="pricing__btn btn btn_black text-nobreak text-uppercase" aria-label="subscribe">SUBSCRIBE</button>
                            <p class="pricing__value reset">
                                $14.99
                            </p>
                        </div>
                    </div>
                    <div class="pricing__benefits pricing__popular">
                        <h5 class="title-header pricing__benefits-title reset">What’s included:</h5>
                        <ul class="pricing__benefits-list">
                            <li class="pricing__benefits-item pricing__benefits-item_bold">Everything in Tier 1</li>
                            <li class="pricing__benefits-item">Free tickets to Events</li>
                            <li class="pricing__benefits-item">Limited Edition Merch</li>
                            <li class="pricing__benefits-item">Promote your Product</li>
                            <li class="pricing__benefits-item">Request Topic</li>
                        </ul>
                    </div>
                </div>
                <div class="pricing__card">
                    <div class="pricing__price">
                        <h4 class="title-header pricing__card-title reset">Official</h4>
                        <p class="pricing__text reset">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
                        <div class="pricing__control">
                            <button class="pricing__btn btn btn_black text-nobreak text-uppercase" aria-label="subscribe">SUBSCRIBE</button>
                            <p class="pricing__value reset">
                                $29.99
                            </p>
                        </div>
                    </div>
                    <div class="pricing__benefits">
                        <h5 class="pricing__benefits-title reset">What’s included:</h5>
                        <ul class="pricing__benefits-list">
                            <li class="pricing__benefits-item pricing__benefits-item_bold">Everything in Tier 2</li>
                            <li class="pricing__benefits-item">Exclusive Badge on Livestreaming</li>
                            <li class="pricing__benefits-item">Become an Official Sponsor</li>
                            <li class="pricing__benefits-item">Early Access to All Episodes</li>
                            <li class="pricing__benefits-item">Free Stikers and Merch</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="pricing__crooked">
                <svg class="svg svg_stroke-pewter-blue">
                    <use xlink:href="@/assets/img/spriteFigure.svg#crooked"></use>
                </svg>
            </div>  
        </div>
        <div class="squiggle pricing__squiggle">
            <svg class="svg svg_stroke-black squiggle__svg">
                <use xlink:href="@/assets/img/spriteFigure.svg#squiggle"></use>
            </svg>
        </div>
    </section>
</template>
