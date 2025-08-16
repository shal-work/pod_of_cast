<template>
    <footer class="footer container">
        <div class="footer__main">
            <div class="footer__item">
                <div class="footer__logo">
                    <AppLogo :color="color" :marginRight="marginRight"/>
                    <p class="footer__copyright reset">©2021.</p>
                </div>
                <p class="footer__text reset">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div class="footer__social-links">
                    <a href="#" class="icon" aria-label="twitter">
                        <svg class="icon__item">
                            <use xlink:href="@/assets/img/spriteIco.svg#twitter"></use>
                        </svg>
                    </a>
                    <a href="#" class="icon" aria-label="instagram">
                        <svg class="icon__item">
                            <use xlink:href="@/assets/img/spriteIco.svg#instagram"></use>
                        </svg>
                    </a>
                    <a href="#" class="icon" aria-label="tiktok">
                        <svg class="icon__item">
                            <use xlink:href="@/assets/img/spriteIco.svg#tiktok"></use>
                        </svg>
                    </a>                    
                </div>
            </div>
            <div class="footer-menu  ">
                <ul class="footer-menu__list reset">
                    <li class="footer-menu__item">
                        <RouterLink to="/" class="footer-menu__link text-nobreak underline-anime" aria-label="Page Episodes">About</RouterLink>
                    </li>
                    <li class="footer-menu__item">
                        <RouterLink to="/" class="footer-menu__link footer-menu__active text-nobreak underline-anime" aria-label="Page About">Testimonials</RouterLink>
                    </li>
                    <li class="footer-menu__item">
                        <RouterLink to="/" class="footer-menu__link text-nobreak underline-anime" aria-label="More">Features</RouterLink>
                    </li>
                </ul>
            <!-- </div> -->
            <!-- <div class="footer__item"> -->
                <ul class="footer-menu__list reset">
                    <li class="footer-menu__item">
                        <RouterLink to="/" class="footer-menu__link footer-menu__active text-nobreak underline-anime" aria-label="Page Episodes">Episodes</RouterLink>
                    </li>
                    <li class="footer-menu__item">
                        <RouterLink to="/" class="footer-menu__link text-nobreak underline-anime" aria-label="Page About">Pricing</RouterLink>
                    </li>
                    <li class="footer-menu__item">
                        <RouterLink to="/" class="footer-menu__link text-nobreak underline-anime" aria-label="More">Blog</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="footer__item">
                <div class="footer__platform">
                    <h2 class="footer__title reset">Listen to episodes on your fav platform:</h2>
                    <div class="footer__link">
                        <a href="#" class="footer__icon footer__google-podcast" aria-label="google-podcast">
                            <svg class="svg">
                                <use xlink:href="@/assets/img/spriteIco.svg#google-podcast-text"></use>
                            </svg>
                        </a>                        
                        <a href="#" class="footer__icon footer__spotify" aria-label="spotify">
                            <svg class="svg">
                                <use xlink:href="@/assets/img/spriteIco.svg#spotify-text"></use>
                            </svg>
                        </a>
                        <a href="#" class="footer__icon footer__youtube" aria-label="youtube">
                            <svg class="svg">
                                <use xlink:href="@/assets/img/spriteIco.svg#youtube-text"></use>
                            </svg>
                        </a>
                    </div>
                </div>
                <!-- <div class="footer__wrep"> -->
                    <div class="footer__app">
                        <h2 class="footer__title reset">App available on:</h2>
                        <div class="footer__link">
                            <a href="#" class="footer__icon footer__app-icon" aria-label="#app-store">
                                <svg class="svg">
                                    <use xlink:href="@/assets/img/spriteIco.svg#app_store"></use>
                                </svg>
                            </a>
                            <a href="#" class="footer__app-icon" aria-label="google-play">
                                <svg class="svg">
                                    <use xlink:href="@/assets/img/spriteIco.svg#google_play"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                <!-- </div> -->

            </div>
        </div>
        <div class="footer__bottom">
            <div class="footer__bottom-item">
                <p class="footer__copyright reset">©2022. All Rights Reserved. <span class="footer__vermillion">Pod of Cast</span></p>
            </div>
            <div class="footer__bottom-item">
                <p class="footer__bottom-text reset">Terms</p> 
                <p class="footer__bottom-text reset">Privacy</p> 
            </div>
        </div>
    </footer>
</template>



<script setup>
    import AppLogo from '@/vue_components/Logo/AppLogo.vue';
    const color = "white";
    const marginRight="marginRight";
</script>