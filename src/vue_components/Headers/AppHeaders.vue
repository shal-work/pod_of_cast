<template>
    <header class="header">
        <div class="header__wrep container">
            <AppLogo/>
            <div class="header__block">
                <nav class="header__menu">
                    <AppNavbar/>
                </nav>
                <div class="header__btns">
                    <button class="header__btn btn btn_light text-uppercase text-nobreak">
                        RECENT EPISODES
                    </button>
                    <button class="header__btn btn btn_black text-uppercase text-nobreak">
                        Subscribe
                    </button>
                </div>
            </div>

            <div class="header__burger">
                <div class="icon-bar"></div>
            </div>
        </div>

    </header>
</template>


<script setup>
    import AppNavbar from '@/vue_components/Navbar/AppNavbar';
    import AppLogo from '@/vue_components/Logo/AppLogo.vue';

    
</script>
