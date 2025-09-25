<template>
    <ul class="menu reset">
        <li class="menu__item">
            <RouterLink to="/" class="menu__link text-nobreak underline-anime" aria-label="Page Episodes">Episodes</RouterLink>
        </li>
        <li class="menu__item">
            <RouterLink to="/about" class="menu__link text-nobreak underline-anime" aria-label="Page About">About</RouterLink>
        </li>
        <li class="menu__more">
            <button class="menu__btn text-nobreak reset" aria-label="More" aria-expanded="false">More</button>
            <ul class="menu__sub reset">
                <li class="menu__sub-item">
                    <RouterLink  to="/detail" class="menu__sub-link menu__link text-nobreak underline-anime" aria-label="Page Testimonials">Testimonials</RouterLink>
                </li>
                <li class="menu__sub-item">
                    <RouterLink  to="/article" class="menu__sub-link menu__link text-nobreak underline-anime" aria-label="Page Features">Features</RouterLink>
                </li>
                <li class="menu__sub-item">
                    <RouterLink  to="/detail" class="menu__sub-link menu__link text-nobreak underline-anime" aria-label="Page Episodes">Episodes</RouterLink>
                </li>
                <li class="menu__sub-item">
                    <RouterLink  to="/single-blog/1" class="menu__sub-link menu__link text-nobreak underline-anime" aria-label="Page Pricing">Pricing</RouterLink>
                </li>
                <li class="menu__sub-item">
                    <RouterLink  to="/article" class="menu__sub-link menu__link text-nobreak underline-anime" aria-label="Page Blog">Blog</RouterLink>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script setup>

</script>