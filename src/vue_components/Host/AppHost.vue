<template>
    <div class="host">  
        <div class="host__item">
            <div class="host__picture">
                <picture>
                    <source type="image/webp" srcset="@/assets/img/host-avatar1_483_483.webp" media="(max-width: 420px)">
                    <source type="image/png" srcset="@/assets/img/host-avatar1_483_483.png" media="(max-width: 420px)">
                    <source type="image/webp" srcset="@/assets/img/host-avatar1_518_518.webp" media="(max-width: 768px)">
                    <source type="image/png" srcset="@/assets/img/host-avatar1_518_518.png" media="(max-width: 768px)">
                    <source type="image/webp" srcset="@/assets/img/host-avatar1.webp">
                    <img src="@/assets/img/host-avatar1.png" alt="host-avatar1" class="host__img" width="259" height="488">
                </picture>
            </div>
            <div class="host__content">
                <svg class="host__smile">
                    <use xlink:href="@/assets/img/spriteFigure.svg#smile"></use>
                </svg>
                <p class="host__sub-title reset">Host 1</p>
                <h2 class="title-header host__title reset">Porter Severus</h2>
                <p class="host__text reset">Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor rarylet podofcast.</p>
                <div class="host__social-links" data-title="follow me:">
                    <a href="#" class="host__link" aria-label="tiktok">
                        <svg class="host__icon">
                            <use xlink:href="@/assets/img/spriteIco.svg#tiktok"></use>
                        </svg>
                    </a>                
                    <a href="#" class="host__link" aria-label="twitter">
                        <svg class="host__icon svg svg_pewter-blue">
                            <use xlink:href="@/assets/img/spriteIco.svg#twitter-color"></use>
                        </svg>
                    </a>
                    <a href="#" class="host__link" aria-label="instagram">
                        <img class="host__icon" src="@/assets/img/instagram-sign.svg" alt="instagram" width="20" height="20">
                    </a>
                </div>
            </div>
        </div>
        <div class="host__item">
            <div class="host__picture">
                <picture>
                    <source type="image/webp" srcset="@/assets/img/host-avatar2_518_518.webp" media="(max-width: 768px)">
                    <source type="image/png" srcset="@/assets/img/host-avatar2_518_518.png" media="(max-width: 768px)">
                    <source type="image/webp" srcset="@/assets/img/host-avatar2.webp">
                    <img src="@/assets/img/host-avatar2.png" alt="host-avatar2" class="host__img" width="259" height="488">
                </picture>
            </div>
            <div class="host__content">
                <svg class="host__sheaf">
                    <use xlink:href="@/assets/img/spriteFigure.svg#sheaf"></use>
                </svg>
                <p class="host__sub-title reset">Host 2</p>
                <h2 class="title-header host__title reset">Marques Keith</h2>
                <p class="host__text reset">Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor rarylet podofcast.</p>
                <div class="host__social-links" data-title="follow me:">
                    <a href="#" class="host__link" aria-label="tiktok">
                        <svg class="host__icon">
                            <use xlink:href="@/assets/img/spriteIco.svg#tiktok"></use>
                        </svg>
                    </a>                
                    <a href="#" class="host__link" aria-label="twitter">
                        <svg class="host__icon svg svg_pewter-blue">
                            <use xlink:href="@/assets/img/spriteIco.svg#twitter-color"></use>
                        </svg>
                    </a>
                    <a href="#" class="host__link" aria-label="instagram">
                        <img class="host__icon" src="@/assets/img/instagram-sign.svg" alt="instagram" width="20" height="20">
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>